# 7.1 递归
递归函数是在一个函数通过名字调用自身情况下构成的。
```javascript
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
```
这是一个经典的阶乘递归。下面代码可能导致出错。
```javascript
var anotherFactorial= factorial;
factorial = null;
alert(anotherFactorial(3));
```
以上代码先把 factorial() 函数保存在变量 anotherFactorial 中，然后将 factorial 变量设置为 null，结果指向原始函数的引用只剩一个。     
但接下来调用 anotherFactorial() 时，由于必须执行 factorial()，而 factorial 已经不再是函数，所以导致错误。     
在这种情况下使用 arguments.callee 可以解决问题。
```javascript
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
```
使用 arguments.callee 代替函数名，可以确保无论怎样调用函数都不会出现问题。