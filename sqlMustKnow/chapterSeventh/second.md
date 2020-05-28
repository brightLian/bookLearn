# 7.2 拼接字段
为了说明如何使用计算字段，我们来举一个简单的例子，创建由两列组成的标题。        
    
venders 表包含供应商名和地址信息。加入要生成一个供应商报表，需要在格式化的名称中列出供应商的位置。     
   
此报表需要一个值，而表中数据存储在两个列 vend_name 和 vend_country 中。此外，需要用括号将 vend_country 括起来，这些东西都没有存储在数
据库表中。这个返回供应商名称和地址的 SELECT 语句很简单，但我们如何创建这个组合值呢？    
     
解决方法就是吧两个列拼接起来。在 SQL 中的 SELECT 语句中，可使用一个特殊的操作符来拼接两个列。   
```sql
SELECT vend_name + '(' + vend_country + ')' FROM Vendors ORDER BY vend_name;
SELECT vend_name || '(' || vend_country || ')' FROM Vendors ORDER BY vend_name;
SELECT Concat(vend_name, '('  vend_country, ')') FROM Vendors ORDER BY vend_name;
```
上面几个 SELECT 语句拼接一下元素：
- 存储在 vend_name 列中的名字；
- 包含一个空格和一个做括号的字符串；
- 存储在 vend_country 列中的国家；
- 包含一个右圆括号的字符串。
从上述输出中可以看到， SELECT 语句返回包含上述四个元素的一个列。   
    
在看看上述 SELECT 语句返回的输出。结合成一个计算字段的两个列空格填充。许多数据库保存填充为列宽的文本值，而实际上你要的结果不需要这些空格。
为了返回格式化的数据，必须去掉这些空格。这可以使用 SQL 的 RTRIM() 函数完成：
```sql
SELECT vend_name + '(' + RTRIM(vend_country) + ')' FROM Vendors ORDER BY vend_name;
SELECT vend_name || '(' || RTRIM(vend_country) || ')' FROM Vendors ORDER BY vend_name;
SELECT Concat(vend_name, '(' RTRIM(vend_country), ')') FROM Vendors ORDER BY vend_name;
```
RTRIM() 函数去掉值右边的所有空格。通过使用 RTRIM()，各个列都进行了整理。

### 使用别名
从前面的输出可以看到，SELECT 语句可以很好地拼接地址字段。但是，这个新计算列的名字是什么呢？     
实际上它没有名字，只是一个值。如果仅在 SQL 查询工具中查看一下结果，我们使用别名。    
**别名：一个字段或者值的替换名，使用 AS 关键字赋予。**   
```sql
SELECT vend_name + '(' + RTRIM(vend_country) + ')' AS vend_title FROM Vendors ORDER BY vend_name;
SELECT vend_name || '(' || RTRIM(vend_country) || ')' AS vend_title FROM Vendors ORDER BY vend_name;
SELECT Concat(vend_name, '(' RTRIM(vend_country), ')') AS vend_title FROM Vendors ORDER BY vend_name;
```