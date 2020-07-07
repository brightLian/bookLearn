# 6.2 创建对象
虽然 Object 构造函数或对象字面量都可以用来创建单个对象，但这些方式有个明显的缺点：使用同一个接口创建很多对象，会产生大量的重复代码。
为了解决这个问题，人们开始使用工厂模式的一种变体。

### 6.2.1 工厂模式
例子：
```javascript
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    alert(this.name)
  }
  return o
}

var person1 = createPerson('lml', '24', 'FE');
var person2 = createPerson('xxs', '24', 'CV');
```
工厂模式解决了创建多个相似对象的问题，但却没有解决对象识别的问题。随着 JS 的发展，有一个新模式出现了。

### 6.2.2 构造函数模式
ECMAScript 中的构造函数可用来创建特定类型的对象。像 Object 和 Array 这样的原生构造函数，在运行时会自动出现在执行环境中。      
此外也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。
```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job
  this.sayName = function() {
    alert(this.name);
  }
}
var person1 = new Person('lml', '24', 'FE');
var person2 = new Person('xxs', '24', 'CV');
```
和工厂模式的不同之处在于：
- 没有显示地创建对象
- 直接将属性和方法赋给了 this 对象
- 没有 return 语句    

要创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下步骤
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象（因此 this 指向了这个新对象）
3. 执行构造函数中的代码（为这个对象添加属性）
4. 返回新对象。

在前面例子的最后，person1 和 person2 分别保存着 Person 的一个不同的实例。这两个对象都有一个 constructor 属性，该属性指向 Person。
```javascript
alert(person1.constructor == Person) // true
alert(person2.constructor == Person) // true
```
对象的 constructor 属性最初是用来标识对象类型的。但是提到检测对象类型，还是 instanceof 操作符更可靠一些。    
我们这个例子中创建的对象即时 Object 的实例，又是 Person 的实例。
```javascript
alert(person1 instanceof Object); // true
alert(person1 instanceof Person); // true
alert(person2 instanceof Object); // true
alert(person2 instanceof Person); // true
```
**1.将构造函数当作函数**       
构造函数与函数的唯一区别就是调用方式的不同。   
任何函数只要使用 new 操作符来调用，那它就可以是构造函数。    
任何函数如不通过 new 操作符来调用，那它就是普通函数。
```javascript
// 当作构造函数
var person = new Person('lml', 24, 'FE');
person.sayName(); // lml

// 作为普通函数调用
Person('lml', 24, 'FE'); // 添加调 window
window.sayName(); // lml

// 在另一个函数的作用域中调用
var o = new Object();
Person.call(o, 'lml', 24, 'FE');
o.sayName(); // lml
```

**2.构造函数的问题**     
使用构造函数的主要问题就是每个方法都要在每个实例上重新创建一遍。    
比如前面的例子，person1 和 person2 都有一个为 sayName() 方法，但是两个对象不是同一个 Function 实例。     
然而创建两个完成同样任务的 Function 实例是没有必要的。因此可以像下面这样，通过把函数定义转移到构造函数外部来解决这个问题。
```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}
function sayName() {
    alert(this.name);
} 
var person1 = new Person('lml', 24, 'FE');
var person2 = new Person('xxs', 24, 'CV');
```
在这个例子中，我们把 sayName() 函数定义到构造函数的外部。而在构造函数的内部，我们将 sayName 属性设置成等于全局的 sayName 函数。       
由于 sayName 包含的是一个指向函数的指针，因此 person1 和 person2 对象就共享了全局作用域中定义的同一个 sayName()函数。    
这样确实解决了两个函数做同一个事的问题，可是在全局作用域中定义的函数只是被某个对象调用，这会污染全局作用域。    
更让人无法接受的是如果需要定义多个方法，就需要定义多个全局函数。

### 6.2.3 原型模式
我们创建的每一个函数都有一个 prototype 原型属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的方法。      
如果按照字面意思来理解，那么 prototype 就是通过构造函数而创建的那个对象实例的原型对象。   
使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。    
换句话说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象上。
```javascript
function Person() {
  
}
Person.prototype.name = 'lml';
Person.prototype.age = 24;
Person.prototype.job = 'FE';
Person.prototype.sayName = function() {
  alert(this.name);
}
var person1 = new Person();
person1.sayName(); // lml

var person2 = new Person();
person2.sayName(); // lml
alert(person1.sayName == person2.sayName) // true
```
我们将 sayName() 方法和属性直接添加到了 Person 的 prototype 属性中，构造函数变成了空函数。    
即使如此，也仍可以通过调用构造函数来创建新对象，而且新对象还会具有相同的属性和方法。   
但与构造函数模式不同的是，新对象的这些属性和方法是有所有实例共享的。

**1.理解原型对象**    
无论什么时候，只要创建一个新函数，就会根据一组特定的规则为该函数创建一个 prototype 属性，这个属性指向函数的原型对象。    
在默认情况下，所有原型对象都会自动获得一个 constructor 属性，这个属性包含一个指向 prototype 属性所在函数的指针。    
就拿上面的例子，Person.prototype.constructor 指向 Person。   
而通过这个构造函数，我们还可继续为原型对象添加其他属性和方法。

创建自定义的构造函数之后，其原型对象默认只会取得 constructor 属性：至于其他方法，则都是从 Object 继承而来的。  
当调用构造函数创建一个新实例后，该实例的内部将包含一个指针，指向构造函数的原型对象。

**2.原型与 in 操作符**   
有两种方式可以使用 in 操作符：单独使用和在 for-in 循环中使用。在单独使用是，in 操作符会在通过对象能够访问给定属性是返回 true，
无论该属性存在于实例中还是原型中。
```javascript
function Person() {
  
}
Person.prototype.name = 'lml';
Person.prototype.age = 24;
Person.prototype.job = 'FE';
Person.prototype.sayName = function() {
  alert(this.name);
}

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty('name')); // false
alert(name in person1); // true

person1.name = 'lml1';
alert(person1.name); // lml1 ——来自实例
alert(person1.hasOwnProperty('name')); // true
alert(name in person1); // true

alert(person2.name); // lml ——来自原型
alert(person2.hasOwnProperty('name')); // false
alert(name in person2); // true

delete person1.name;
alert(person1.name); // lml ——来自原型
alert(person1.hasOwnProperty('name')); // false
alert(name in person1); // true
```
在以上代码中，name 属性要么是直接在对象上访问到的，要么是通过原型访问到的。    
因此，调用 name in person1 始终都返回 true，无论该属性存在于实例中还是存在于原型中。   
同时使用 hasOwnPrototype 和 in 操作符，就可以确定该属性是存在于对象还是存在于原型中。
```javascript
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object)
}
```
由于 in 操作符只要对象就能够访问到属性就返回 true，hasOwnProperty() 只在存在于实例中时才返回 true。   
因此只要 in 操作符返回 true 而 hasOwnProperty() 返回 false，就可以确定属性是原型中的属性。

**3.更简单的原型语法**   
前面的例子中每添加一个属性和方法就要敲一遍 Person.prototype。更常见的方法是采用一个包含所有属性和方法的对象字面量来重写。
```javascript
function Person() {
}
Person.prototype = {
    name: 'lml',
    age: 24,
    job: 'FE',
    sayName: function() {
        alert(this.name);
    }
}
```
在上边，我们将 Person.prototype 设置为一个以对象字面量形式创建的新对象。   
最终结果相同，但是有一个例外：constructor 属性不再指向 Person 了。    
每创建一个函数，都会创建它的 prototype 对象，这个对象也会自动指向 constructor 属性。     
而我们在这里，本质上重写了默认的 prototype 对象，因此 constructor 属性也变成了新对象的 constructor 属性，不再指向 Person 函数。    
此时，尽管 instanceof 操作符还能返回正确的结果，但通过 constructor 已经无法确定对象的类型了。
```javascript
var friend = new Person();
alert(friend instanceof Object); // true
alert(friend instanceof Person); // true
alert(friend.constructor == Person); // false
alert(friend.constructor == Object) // true
```
在此，用 instanceof 操作符测试 Object 和 Person 仍返回 true，但 constructor 属性则等于 Object 而不等于 Person 了。   
如果 constructor 的值重要的化，可以特定声明其返回值。
```javascript
function Person() {
}
Person.prototype = {
    constructor: Person,
    name: 'lml',
    age: 24,
    job: 'FE',
    sayName: function() {
        alert(this.name);
    }
}
```
注意通过这种方式重设 constructor 属性会导致它的可枚举特性被设置为 true。
默认情况下，原生的 constructor 属性是不可枚举的，我们可以采用 Object.defineProperty()。
```javascript
function Person() {
}
Person.prototype = {
    name: 'lml',
    age: 24,
    job: 'FE',
    sayName: function() {
        alert(this.name);
    }
}
Object.defineProperty(Person.prototype, 'constructor', {
    value: Person,
    enumerable: false
})
```

**4.原型的动态性**

**5.原生对象的类型**

**6.原型对象的问题**

### 6.2.4 组合使用构造函数模式和原型模式
创建自定义模式的最常见方式，就是组合使用构造函数模式和原型模式。   
构造函数模式用于定义实例属性，而原型属性用于定义方法和共享的属性。   
结果，每个实例都会有自己的一份实例的副本，但同时又共享着对方法的引用，最大限度的节省了内存。    
另外，这种混成模式还支持向构造函数传递参数。
```javascript
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['ljc', 'lyy']
}
Person.prototype = {
    constructor: Person,
    sayName: function() {
        alert(this.name)
    }
}

var person1 = new Person('lml', 24, 'FE');
var person2 = new Person('xxs', 24, 'CV');

person1.friends.push('lh');
alert(person1.friends); // 'ljc, lyy, lh'
alert(person2.friends); // 'ljc, lyy'
alert(person1.friends == person2.friends); // false
alert(person1.sayName == person2.sayName); // true
```
在这个例子中，实例属性都是在构造函数中定义的，而由所有实例共享的属性 constructor 和方法 sayName() 则是在原型中定义的。   
而修改了 person1.friends，并不会影响到 person2.friends，因为他们分别引用不同的数组。

这种混成模式，是目前在 ECMAScript 中使用最广泛、认同度最高的一种创建自定义类型的方法。可以说，这是用来定义引用类型的一种默认方式。

### 6.2.5 动态原型模式
有其他 OO 语言开发经验的开发人员在看到独立的构造函数和原型时，很可能会感到非常困惑。   
动态原型模式正是致力于解决这个问题的一个方案，他把所有信息都封装在了构造函数中，而通过在构造函数中初始化原型，又保持了同时使用构造函数和原型的优点。    
换句话说，可通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型。
```javascript
function Person(name, age, job) {
     this.name = name;
     this.age = age;
     this.job = job;
     if (typeof this.sayName != "function") {
         Person.prototype.sayName = function() {
             alert(this.name);
         }
     }
}

var friend = new Person('ljc', 25, 'RD');
friend.sayName(); // ljc
```
这里只有在 sayName() 方法不存在的情况下，才会将它添加到原型中。   
这段代码只会在初次调用构造函数才会执行。   
此后，原型已经完成初始化，不会再做什么修改了。  
不过要记住，这里对原型所做的修改，能够立即在所有实例中得到反馈。因此，这种方法确实可以说非常完美。   
其中， if 语句检查的可以是初始化之后应该存在的任何属性或方法，不必用一大堆 if 语句检查每个属性和每个方法，只需要检查一个即可。   

### 6.2.6 寄生构造函数模式
在前面几种模式都不适用的情况下，可以使用寄生构造模式。   
这种模式的基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象；但表面上看，这个函数又很像构造函数。
```javascript
function Person(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        alert(this.name);
    };
    return o;
}

var friend = new Person('ljc', 25, 'RD');
friend.sayName(); // ljc
```
在这个例子，Person 函数创建一个新对象，并以相应的属性和方法初始化该对象，然后又返回了找个对象。    
除了使用 new 操作符并把使用的包装函数叫做构造函数之外，这个模式跟工厂模式其实是一摸一样的。    
构造函数在不返回值的情况下，默认会返回新对象的实例。而通过在构造函数的末尾添加 return 语句，可以重写调用构造函数时返回的值。   

### 6.2.6 稳妥构造函数模式
稳妥构造函数中遵循与构造函数类似的模式，但有两点不同：一是新创建对象的实例不引用 this；二是不使用 new 操作符调用构造函数。
```javascript
function Person(name, age, job) {
    var o = new Object();
    o.sayName = function() {
        alert(name);
    };
    return o;
}
```
注意，在这种模式创建的对象中，除了使用 sayName() 方法之外，没有其他方法能访问 name 的值。