# 3.4 数据类型
ECMAScript 有5种简单数据类型：Undefined、Null、Boolean、Number 和 String。   
还有一种复杂数据类型：Object。

### typeof操作符
鉴于 ECMAScript 是松散类型的，因此需要有一种手段来检测给定变量的数据类型————typeof 就是负责提供这方面信息的操作符。    
对一个值使用 typeof 操作符可能返回下列某个字符串：
- undefined————这个值未定义；
- boolean————这个值是布尔值；
- string————这个值是字符串；
- number————这个值是数值；
- object————这个值是对象或者null；
- function————这个值是函数。

### undefined类型
undefined 类型只有一个值，即特殊的 undefined。在使用 var 声明变量但未对其加以初始化时，这个变量的值就是 undefined 如：
```javascript
var message;
console.log(message == undefined); // true
```

### null类型
null 类型是第二个只有一个值的数据类型，这个特殊的值就是 null。从逻辑角度看，null 表示一个空对象指针，而这也正式使用 typeof 操作符检测 
null 值时会返回 object 的原因。如：
```javascript
var car = null;
console.log(typeof car) // object
```
实际上 undefined 值是派生自 null 值的，因此对它们进行相等性测试要返回 true：
```javascript
console.log(null == undefined); // true
```
这里位于 null 和 undefined 之间的相等操作符总是返回 true，不过要注意的是，这个操作符处于比较的目的会转换其操作数。    

### boolean类型
boolean 类型是 ECMAScript 中使用最多的类型之一，该类型只有两种字面量：true 和 false。    
    
需要注意的是，boolean 类型的字面值 true 和 false 是区分大小写的。   
虽然 boolean 类型的字面值只有两个，但是所有值都有与这两个 boolean 值等价的值。
```javascript
var message = 'hi';
var messageAsBoolean = Boolean(message);
console.log(messageAsBoolean) // true
```    
在这个例子中，字符串 message 被转换为了一个 boolean，我们可以对任意的数据类型的值调用 Boolean() 函数，而且会返回一个 boolean 值。     
下边给出了各种数据类型及其对应的转换规则：
| 数据类型          | 转为 true 的值     |   转为 false 的值              |
|:-------------:|:-------------:|:----------------------:|
| Boolean   | true | false |
| String   | 任意非空字符串 | ''空字符串 |
| Number   | 任何非0数字值 | 0和NaN |
| Object   | 任何对象 | null |
| Undefined   | / | undefined |

### number类型
Number 类型应该是最令人关注的数据类型了。    
最基本的数值字面量格式是十进制整数，十进制整数可以像下面这样直接在代码中输入：
```javascript
var intNum = 55;
```
除了以十进制表示外，整数还可以通过八进制或者十六进制的字面量表示。
    
**浮点数值**：  
所谓浮点数值就是改数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。  
  
**数值范围**：  
最小值存在 Number.MIN_VALUE 中，是 5e-324。最大值存在 Number.MAX_VALUE 中，是 1.7976931348623157e+308。    
如果这个值是负数并且超出范围则会被转成 -Infinity，如果这个值是正数并且超出范围则会被转成 Infinity。   
     
**NaN**：   
特殊的数值，这个数值用于表是一个本来要返回数值的操作数为返回数值的情况。   
NaN的两个特点：
- 任何涉及NaN的操作都会返回NaN。
- NaN与任何值都不相等，包括NaN本身。
```javascript
console.log(NaN == NaN) // false
```
针对 NaN 的两个特点，定义了 isNaN() 函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数是否不是数值。
isNaN() 在接受到一个值后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值，例如字符串'10'或 Boolean 值。
而任何不能被转换为数值的值都会导致这个函数返回 true。请看下面的例子。  
```javascript
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN('10')); // false
console.log(isNaN('blue')); // true
console.log(isNaN(true)); // false
```
**数值转换**：  
有三个函数可以吧非数值转换为数值：Number()、parseInt()和 parseFloat()。    
第一个函数即转型函数 Number() 可以用于任何数据类型，而另两个函数则专门把字符串转换为数值。     
这3个函数对于同样的输入会有返回不同的结果。   
Number() 函数的转换规则如下：
- 如果是 Boolean 值，true 和 false 分别被转换为1和0。
- 如果是数字值，只是最简单的传入和返回。
- 如果是 null 值，返回0。
- 如果是 undefined，返回 NaN。
- 如果是字符串：如果字符串只包含数字，则将其转换为十进制数值；  
如果字符串中包含有效的浮点格式，则将其转换为对应的浮点数值；  
如果字符串中包含有效的十六进制格式，则将其转换为相同大小的十进制的数值；  
如果字符串是空的，则将其转换为0；  
如果字符串中包含上述格式之外的字符，则将其转换为 NaN。  
- 如果是对象，则调用对象的 valueOf() 方法，然后将其按照前面的规则转换为返回的值。
如果转换的结果是 NaN，则调用对象的 toString() 方法，然后再次依照前面的规则返回字符串值。   

由于 Number() 函数在转换字符串时比较复杂而且不够合理，因此在处理整数的时候更常用的是 parseInt() 函数。
parseInt() 函数在转换字符串时，更多的时看其是否符合数值模式。
它会忽略字符串前面的空格，知道找到第一个非空格字符。
如果第一个字符不是数字字符或负号，parseInt() 就会返回 NaN()。
如果第一个字符是数字字符，parseInt() 会继续解析第二个字符，直到解析完所有后续字符或者遇到了一个符数字字符。   
为了更好的理解 parseInt() 的转换规则，看下面例子：
```javascript
console.log(parseInt('1231kkjlkjasl')) // 1231
console.log(parseInt('')) // NaN
console.log(parseInt('22.5')) // 22
console.log(parseInt(100)) // 100
```

与 parseInt() 类似，parseFloat() 也是从第一个字符开始解析每个字符。而且也是一直解析到字符串末尾，或者解析遇到一个无效的浮点数字符为止。
也就是说，字符串中的第一个小数点是有效的，而第二个小数点就是无效的了，因此他后面的字符串将被忽略。    
以下是使用 parseFloat() 转换数值的几个典型事例：
```javascript
console.log(parseFloat('123klkljkl')) // 123
console.log(parseFloat('22.5')) // 22.5
console.log(parseFloat('23.45.67')) // 23.45
console.log(parseFloat('3.125e7')) // 31250000
```

### string 类型
string 类型用于表示由零或多个字符组成的字符序列，即字符串。字符串可以是单引号或双引号表示。    
不过，以双引号开头的字符串必须以双引号结尾，而以单引号开头的字符串必须以单引号结尾。   

**字符字面量**    
string 数据类型包含一些特殊的字符字面量，也叫转义序列，用于表示非打印字符，或者具有其他特殊用途的字符。    
这些字符字面量如下表示：
| 字面量          | 转义     |
|:-------------:|:-------------:|
| \n  | 换行 |
| \t  | 制表 |
| \b  | 退格 |
| \r  | 回个 |
| \f  | 进纸 |
| \\  | 斜杠 |
| \'  | 单引号 |
| \"  | 双引号 |
| \xnn  | 以十六进制代码nn表示一个字符 |
| \unnn  | 以十六进制代码nnnn表示一个 Unicode 字符 |

**字符串的特点**     
ECMAScript 中的字符串是不可变的，也就是说，字符串一旦创建，他们的值就不能改变。    
要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。   

**转换为字符串**  
要把一个值转换为一个字符串有两种方式。第一种使用几乎每个值都有的 toString() 方法。    
数值、布尔值、对象和字符串值都有 toString() 方法。但 null 和 undefined 值没有这个方法。  
在不知道要转换的值是不是 null 或者 undefined 的情况下，还可以使用转型函数 String() ，这个函数能够将任何类型的值转换为字符串。   
String() 函数遵循下列转换规则：
- 如果值有 toString() 方法，则调用该方法并返回对应的结果；
- 如果值是 null，则返回 'null';
- 如果值是 undefined，则返回 'undefined'。


### Object 类型
ECMAScript 中的对象其实就是一组数据和功能的集合。   
仅创建 Object 的实例并没有什么用处，但关键是要理解一个重要的思想：即 Object 类型是所有他的实例的基础。   
换句话说：Object 类型所具有的任何属性和方法也同样存在于更具体的对象中。   
Object 的每个实例都具有下列的方法和属性。
- constructor：保存着用于创建当前对象的函数。
- hasOwnProperty：用于检查个顶的属性在当前对象的实例中是否存在。
- isPrototypeOf：用于检查传入的对象是否是当前对象的原型。 
- propertyIsEnumerable：用于检查给定的属性是否可以使用 for-in 语句来枚举。
- toLocaleString()：返回对象的字符串表示，该字符串中与执行环境的地区对应。
- toString()：返回对象的字符串表示。
- valueOf()：返回对象的字符串、数值和布尔值表示。