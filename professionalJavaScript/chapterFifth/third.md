# 5.3 Date 类型
Date 类型是在早起 Java 中的 java.util.Date 类基础上构建的。   
Date 类型使用自 UTC 1970年1月1日零时开始经过的毫秒数来保存日期。    

创建 Date 类型的方法是使用 new 操作符和 Date 构造函数即可。

### 5.3.1 继承的方法
toString()方法：

valueOf()方法：

### 5.3.2 日期格式化方法
toDateString()：以特定的格式显示星期几、月、日和年。

toTimeString()：以特定的格式显示时、分、秒和地区。

toLocalDateString()：

toLocalTimeString()：

toUTCString()：以特定的格式返回完整的UTC时间。

### 5.3.3 日期/时间组件方法
getTime()：

setTime()：

getFullYear()：

getUTCFullYear()：

setFullYear()：

setUTCFullYear()：

getMouth()：

getUTCMouth()：

setMouth()：

setUTCMouth()：

getDate()：

getUTCDate()：

setDate()：

setUTCDate()：

getDay()：

getUTCDay()：

getHours()：

getUTCHours()：

setHours()：

setUTCHours()：

getMinutes()：

getUTCMinutes()：

setMinutes()：

setUTCMinutes()：

getSeconds()：

getUTCSeconds()：

setSeconds()：

setUTCSeconds()：

getMilliSeconds()：

getMilliUTCSeconds()：

setMilliSeconds()：

setMilliUTCSeconds()：

getTimezoneOffset()：