# 7.2 闭包
**闭包：是指有权访问另一个函数作用域中的变量的函数。**

创建闭包的方式，就是在一个函数内部创建另一个函数。
```javascript
function createComparisonFunction(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value2 > value1) {
            return -1
        } else {
            return 0
        }
    }
}
```
value1 和 value2 之所以可以访问到 propertyName，是因为内部函数的作用域链中包含 createComparisonFunction() 的作用域。

但是闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。过度使用闭包会导致内存占用过多。

**7.2.1 闭包与变量**
闭包只能取得包含函数中任何变量的最后一个值。
```javascript
function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
       result[i] = function() {
            return i
       } 
    } 
    return result;
}
```
每个函数返回的都是10，每个函数的作用域链中都保存着 createFunctions() 的活动对象，所以他们引用的是同一个变量 i。    
当 createFunctions() 函数返回后，变量 i 的值是10，所以在每个函数内部 i 的值都是10。

**7.2.2 关于 this 值**
this 对象是在运行时基于函数环境绑定的：
- 在全局函数中，this 等于 window。
- 当函数作为某个对象的方法调用时，this 等于那个对象。
- 匿名函数因为执行环境是全局，其 this 指向 window。
```javascript
var name = 'This Window';
var object = {
    name: 'My Object',
    getNameFunc: function() {
        return function() {
            return this.name
        }
    }
};

alert(object.getNameFunc()());
```
这个对象返回的 getNameFunc() 是一个匿名函数，调用匿名函数时执行环境被指向了全局。
```javascript
var name = 'This Window';
var object = {
    name: 'My Object',
    getNameFunc: function() {
        var that = this;
        return function() {
            return that.name
        }
    }
};

alert(object.getNameFunc()());
```
在调用匿名函数之前，我们把 this 赋值给了 that 变量。而在定义闭包之后，闭包仍然可以访问到 that 这个变量。所以返回了 My Object。

**7.2.3 内存泄漏**
因为垃圾回收机制，闭包在 IE 中会导致内存泄漏问题。
```javascript
function assignHandler() {
    var element = document.getElementById('someElement');
    element.onclick = function() {
        alert(element.id);
    }
}
```
由于匿名函数保存着一个对 assignHandler() 的活动对象的引用，因此就会导致无法减少 element 的引用数。     
只要匿名函数一直存在，element 的引用数至少是1，因此他所占用的内存永远不会被回收。
```javascript
function assignHandler() {
    var element = document.getElementById('someElement');
    var id = element.id;
    element.onclick = function() {
        alert(id);
    };
    element = null;
}
```
将 element 变量设置为 null。这样就能接触对 DOM 对象的引用，顺利减少其引用数，确保内存正常回收。

