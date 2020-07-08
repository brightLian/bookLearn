# 6.3 继承
继承是 OO 语言中很重要的概念，许多 OO 语言都支持两种继承方式：接口继承和实现继承。    
接口继承只继承方法签名，而实现继承则继承实际的方法。   
由于函数没有签名，在 JS 中无法实现接口继承，只能依赖原型链实现实现继承。

### 6.3.1 原型链
ECMAScript 中描述了原型链的概念，并将原型链作为实现继承的主要方法。
   
其思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。
    
简单回顾一下构造函数、原型和实例的关系：每一个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。
   
那么，假如我们让原型对象等于另一个类型的实例，结果会怎么样？显然，此时的原型对象将包含一个指向另一个原型的指针。相应地，另一个原型中也包含着一个指向另一个构造函数的指针。
   
假如另一个原型又是另一个类型的实例，那么上述关系仍然成立，如此层层递进，就构成了实例与原型的链条。   
```javascript
function SuperType() {
    this.prototype = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.prototype;
};

function SubType() {
    this.subproperty = false;
}

// 继承了 SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue()); // true
```
以上代码定义了两个类型：superType 和 subType。每个类型分别有一个属性和一个方法。    
他们的区别是 SubType 继承了 SuperType，而继承是通过创建 SuperType 的实例，并将该实例赋给 SubType.prototype 实现的。  
实现的本质是重写原型对象，代之以一个新类型的实例。       

换句话说，原来存在于 SuperType 的实例中的所有属性和方法，现在也存在于 SubType.prototype 中了。    

在确立了继承关系后，我们给 SubType.prototype 添加了一个方法，这样就在继承了 SuperType 的属性和方法的基础上又添加了一个新方法。

通过实现原型链，本质上扩展了本章前面介绍的原型搜索机制。当以读取模式访问一个实例属性时，首先会在实例中搜索这个属性，如果没有找到该属性，则会搜索实例的原型。在通过原型链实现继承的情况下，搜索过程就得以沿着原型链继续向上。      

就拿上面的例子来说，调用 instance.getSuperValue() 会经历3个搜索步骤：
- 搜索实例。
- 搜索 SubType.prototype。
- 搜索 SuperType.prototype。（在这一步才会找到该方法，在找不到属性或方法的情况，搜索过程总要到原型末端才会停下来。）

**1.别忘记默认的原型**     
比如上面的例子：SubType 继承了 SuperType，而 SuperType 继承了 Object。当调用 instance.toString()时，实际上调用的是保存在 Object.prototype 中的那个方法。

**2.确定原型和实例的关系**
可以使用两种方法确定，第一种是通过 instanceof 方法。
```javascript
alert(instance instanceof Object); // true
alert(instance instanceof SubType); // true
alert(instance instanceof SuperType); // true
```
由于原型链的关系，我们可以说 instance 是 Object、SubType、SuperType中任何一个类型的实例。

第二种方式使用 isPrototypeOf() 方法。同样，只要是原型链中出现过的原型。都可以说是改原型链所派生的实例和原型，因此 isPrototypeOf() 方法也会返回 true。
```javascript
alert(Object.prototype.isPrototypeOf(instance)); // true
alert(SubType.prototype.isPrototypeOf(instance)); // true
alert(SuperType.prototype.isPrototypeOf(instance)); // true
```

**3.谨慎地定义方法**
子类型有时候会重写超类型中的某个方法，或者需要添加超类型中不存在的某个方法。但是给原型添加方法的代码一定要放在替换原型的语句之后。
```javascript
function SuperType() {
    this.prototype = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.prototype;
};

function SubType() {
    this.subproperty = false;
}

// 继承了 SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

SubType.prototype.getSuperValue = function() {
    return false;
};

var instance = new SubType();
alert(instance.getSuperValue()); // false
```
当通过 SubType 的实例调用 getSuperValue() 时，调用的是这个重新定义的方法，但通过 SuperType() 的实例调用 getSuperValue() 时，调用的还是原来的那个方法。

**4.原型链的问题**
存在的问题：包含引用类型值的原型。在通过原型实现继承时，原型实际上会变成另一个类型的实例。
```javascript
function SuperType() {
    this.colors = ['red', 'blue', 'yellow'];
}

function SubType() {
  
}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('black');
alert(instance1.colors); // 'red, blue, yellow, black'

var instance2 = new SubType();
alert(instance2.colors); // 'red, blue, yellow, black'
```
原型链的第二个问题：在创建子类型的实例是，不能向超类型的构造函数中传递参数。
实际上，应该说是没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。

综上所述：实现中很少会单独使用原型链。

### 6.3.2 借用构造函数
在子类型构造函数的内部调用超类型构造函数。
```javascript
function SuperType() {
    this.colors = ['red', 'blue', 'yellow'];
}

function SubType() {
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push('black');
alert(instance1.colors); // 'red, blue, yellow, black'

var instance2 = new SubType();
alert(instance2.colors); // 'red, blue, yellow'
```
通过使用 call() 方法，我们实际上是在新创建的 SubType 的实例环境下调用了 SuperType 构造函数。    
这样一来，就会在新 SubType 对象上执行 SuperType() 函数中定义的所有对象初始化代码。   

这样的结果就是 SubType 的每个实例都会具有自己的 colors 属性的副本。   

**1.传递参数**
相对于原型链而言，借用构造函数有一个很大的优势，可以在子类型构造函数中向超类型构造函数传递参数。
```javascript
function SuperType(name) {
    this.name = name;
}

function SubType() {
    SuperType.call(this, 'lml');
    this.age = 24
}

var instance1 = new SubType();
alert(instance1.name); // lml
alert(instance1.age); //24
```
**2.借用构造函数的问题**
如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定义，函数不能复用。   
而且在超类型的原型中定义方法，对子类型是不可见的，结果所有的类型都只能使用构造函数模式。    
因此，借用构造函数的技术也是很少单独使用的。

### 6.3.3 组合继承
组合继承是原型链和借用构造函数的技术组合到一起。     
借用原型链实现对原型属性和方法的继承，借用构造函数来实现对实例属性的继承。    
这样既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。
```javascript
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'yellow'];
}

SuperType.prototype.sayName = function() {
    alert(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function() {
    alert(this.age);
};

var instance1 = new SubType('lml', 24);
instance1.colors.push('black');
alert(instance1.colors); // 'red, blue, yellow, black'
instance1.sayName(); // 'lml'
instance1.sayAge(); // 24

var instance2 = new SubType('xxs', 24);
alert(instance2.colors); // 'red, blue, yellow'
instance2.sayName(); // 'xxs'
instance2.sayAge(); // 25
```
在这个例子，SuperType 构造函数定义了两个属性：name 和 colors。    
SuperType 的原型定义了 sayName()方法。   
SubType 构造函数在调用 SuperType 构造函数是传入了 name 参数，然后定义了自己的属性 age。          
SuperType 的实例赋值给 SubType 的原型，然后又在新原型上定义了 sayAge() 方法。    
这样两个 SubType 的实例既分别拥有了自己的属性，又可以使用相同的方法。

组合继承避免了原型链和借用构造函数的缺点，融合了他们的优点。成为了 JavaScript 中就常用的继承模式。

### 6.3.4 原型式继承

### 6.3.5 寄生式继承

### 6.3.6 继承组合式继承