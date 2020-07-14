# 7.4 私有变量
任何函数中定义的变量都可以认为是私有变量。

如何在函数内部创建一个闭包，那么闭包通过自己的作用域链也可以访问这些变量。这样就可以创建用于访问私有变量的公有方法。

我们把有权访问私有变量和私有函数的公有方法成为特权方法。    
有两种创建特权方法的形式，第一种是在构造函数中定义特权方法：
```javascript
function MyObject() {
    // 私有变量和私有函数
    var privateVariable = 10;
    function privateFunction() {
        return false;
    }
    // 特权方法
    this.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    }
}
```
这个模式在构造函数定义了所有私有变量和函数。然后，有创建了能够访问这些成员的特权方法。    
能够在构造函数中定义特权方法，是因为特权方法作为闭包有权访问在构造函数中定义的所有变量和函数。

利用私有变量和特权方法，可以隐藏那些不应该被直接修改的数据。
```javascript
function Person(name) {
    this.getName = function() {
        return name;
    };
    
    this.setName = function(value) {
        name = value
    };
}
var person1 = new Person('lml');
alert(person1.getName()); // lml
person1.setName('xxs');
alert(person1.getName()); // xxs
```
在构造函数中定义特权方法有一个缺点，就是必须使用构造函数来达到这个目的。    
构造函数模式的缺点是针对每个实例都会创建同样一组方法，使用静态私有变量可以避免这个问题

### 7.4.1 静态私有变量
通过在私有作用域中定义私有变量或函数，同样可以创建特权方法。
```javascript
(function() {
    var privateVariable = 10;
    
    function privateFunction() {
        return false;
    }
    
    MyObject = function() {
      
    };
    
    // 特权方法
    MyObject.prototype.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    }
})();
```
这个模式与在构造函数中定义特权方法的主要区别，就在于私有变量和函数是由实例共享的。    
```javascript
(function Person() {
    var name = '';
    
    Person = function(value) {
        name = value
    };
    
    Person.prototype.getName = function() {
        return name;
    };
    
    Person.prototype.setName = function(value) {
        console.log(11111111111)
        name = value
    };
})();
var person1 = new Person('lml');
alert(person1.getName()); // lml
person1.setName('xxs');
alert(person1.getName()); // xxs

var person2 = new Person('ljc');
alert(person1.getName()); // ljc
alert(person2.getName()); // ljc
```
以上这种方式创建静态私有变量会因为使用原型而增进代码的复用，但每个实例都没有自己的私有变量。

### 7.4.2 模块模式

### 7.4.3 增强模块模式
