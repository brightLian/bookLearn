# 5.2 Array 类型
创建数组的两种方式：
- 第一种是使用 new 操作符后跟 Array 构造函数。
- 另一种方式是采用字面量表示法。（推荐）
数组的第一项是从0开始，数组的最后一项是 length - 1。

### 5.2.1 检测数组
- 使用 instanceof 方式：value instanceof Array
- 使用 Array.isArray()方式：Array.isArray(value)

### 5.2.2 转换方法
toString()方法：返回由数组每个值的字符串形式拼接而成的一个以逗号分隔的字符串。

valueOf()方法：返回的还是这个数组。（书上应该错误）

join()方法：接收一个分隔符，返回以这个分隔符分隔的字符串。

### 5.2.3 栈方法
栈方法是一种后进先出的数据结构，JS 提供了两种方式实现类似栈的行为。

push()方法：接收任意数量的参数，把他们逐个添加到数组的末尾，并返回修改后数组的长度。

pop()方法：移除数组最后一项，然后返回该项。

### 5.2.4 队列方法
栈方法是一种先进先出的数据结构，JS 提供了两种方式实现类似队列的行为。

shift()方法：从数组中取到第一项，然后返回该项。

unshift()方法：接收任意数量的参数，把他们逐个添加到数组的顶部，并返回修改后数组的长度。


### 5.2.5 重排序方法
reverse()方法：反转数组，并返回新数组。

sort()方法：默认按照升序排列，但接收一个比较函数作为参数，来改变排序。
（当使用默认排序是，sort()方法会调用每个数组项的 toString()方法，然后对字符串进行比较）
```javascript
let arr = [1, 10, 5, 15, 55];
console.log(arr.sort());  // [1, 10, 15, 5, 55]
```
而实际我们想要的结果并不是这样，这时候比较函数就派上用场了
```javascript
let arr = [1, 10, 5, 15, 55];
function compare(val1, val2) {
    return val1 - val2 
}
console.log(arr.sort(compare));  //  [1, 5, 10, 15, 55]
```

### 5.2.6 操作方法
concat()方法：基于当前数组的所有项创建一个新数组。  
用于数组的连接，不会影响原来的数组。

slice()方法：基于当前数组中的一或多个项创建一个新数组。  
slice()方法可以接收两个参数，即要返回项的起始位置和结束位置。    
只有一个参数的情况下，slice()方法返回参数指定位置开始到末尾所有项。  
slice()方法不会影响原来的数组。

splice()方法：最强大的数组操作方式，常用的有如下三种。    
- 删除：可以删除任意数量的项，指定两个参数：要删除的第一项的位置和要删除的项数。    
- 插入：可以向指定位置插入任意数量的项，指定三个参数：起始位置，0（要删除的数目）和要插入的项。（如果多个项就逗号分隔，类似第4、5、6...个参数）
- 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，指定三个参数：其实位置，要删除的项数和要插入的项。

### 5.2.7 位置方法
提供了两个方法：indexOf()和 lastIndexOf() 都接收两个参数：要查找的项和索引位置。

indexOf()方法：从数组开头向后查找，并返回数组中的位置，没找到返回 -1。

lastIndexOf()方法：从数组末尾向后查找，并返回数组中的位置，没找到返回 -1。

### 5.2.8 迭代方法
every()方法：对数组的每一项运行指定函数，如果该函数每一项都返回 true，则返回 true。

filter()方法：对数组的每一项运行指定函数，返回该函数会返回 true 的项组成的数组。

forEach()方法：对数组的每一项运行指定函数，无返回值。

map()方法：对数组的每一项运行指定函数，返回每次函数调用结果组成的数组。

some()方法：对数组的每一项运行指定函数，如果该函数有一项都返回 true，则返回 true。

### 5.2.9 缩小方法
reduce()方法：从数组第一项开始迭代所有项，然后遍历到最后。

reduceRight()方法：从数组最后一项开始迭代所有项，然后遍历到最后。