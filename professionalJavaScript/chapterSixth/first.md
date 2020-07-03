# 6.1 理解对象
目前都是用字面量的形式来创建对象。

### 6.1.1 属性类型
ECMAScript 只有两种属性：数据属性和访问器属性。   

**数据属性：** 包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有4个描述其行为的特性。
- configurable：表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问其属性。
- enumerable：表示能通过 for-in 循环返回属性。
- writable：表示能否修改属性的值。
- value：包含这个属性的值

**访问器属性：** 不包含数据值，包含一对儿 getter 和 setter 函数。访问器属性有4个描述其行为的特性。
- configurable：表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问其属性。
- enumerable：表示能通过 for-in 循环返回属性。
- get：在读取属性时调用的函数。
- set：在写入属性时调用的函数。

上边的方法可以调用 Object.defineProperty()进行修改。

### 6.1.2 定义多个属性
由于为对象定义多个属性可能性比较大，提供了 Object.defineProperties()方法。方法接收两个参数：第一个对象是要添加和修改其属性的对象，第二个
对象的属性与第一个对象中要添加或修改的属性一一对应。例如：
```javascript
var book = {};
Object.defineProperties(book, {
    _year: {
        value: 2020
    },
    edition: {
        value: 1
    },
    year: {
        get() {
            return this._year
        },
        set(v) {
            if (v > 2020) {
                this._year = v;
                this.edition += v - 2020
            }
        }
    }
})
```

### 6.1.3 读取属性的特性
使用 ECMAScript 5的 Object.getOwnPropertyDescriptor()方法，可以取得给定属性的描述符。这个方法接收两个参数：属性所在的对象和要读取
描述符的名称。返回值是一个对象，如果是访问器属性，这个对象的属性有 configurable、enumerable、get、set。
如果是数据属性，这个对象的属性 configurable、enumerable、writable、value。
