# 3.3 变量
ECMAScript 的变量是松散类型的，所谓松散类型就是可以用来保存任何类型的数据。    
换句话说，每个变量仅仅是一个用于保存值的占位符而已，它可以保存任何值。
```javascript
var message = 'hi';
message = 1;
```
在这个例子里面，变量 message 一开始保存了一个字符串'hi'，然后该值又被更改为数值1。这是完全有效的。       
     
有一点必须注意，用 var 操作符定义的变量将成为定义该变量的作用域中的局部变量。
```javascript
function test() {
  var message = 'hi'
}
test();
console.log(message)
```
这时候 message 的值是不会被打印到控制台的。    
我们在看一个例子：
```javascript
function test() {
  message = 'hi'
}
test();
console.log(message)
```
这个例子省略了 var 操作符，因而 message 就变成了全局变量。这样只要我们调用 test 函数这个变量就会有定义了。