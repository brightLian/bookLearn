# 6.1 LIKE 操作符
这一课介绍什么是通配符、如何使用通配符以及怎样使用 LIKE 操作符进行通配搜索，以便对数据进行复杂过滤。      
前面介绍的所有操作符都是针对已知值进行过滤的。不管是匹配一个值还是多个值，其共同点是过滤中使用的值都是已知的。     
但是这种过滤方法并不是任何时候都好用。例如：怎么搜索产品名中包含某个字段的所有产品？用简单的比较操作符肯定不行，必须使用通配符。    
利用通配符，可以创建比较特定数据的搜索模式。在这个例子中，如果你想找出名称包含某个字段的所有产品，可以构造一个通配符搜索模式。     
**通配符：** 用来匹配值的一部分的特殊字段。     
**搜索模式：** 由字面值、通配符或两者组合构成的搜索条件。    
通配符本身实际上是 SQL 的 WHERE 子句中含有特殊含义的字符，SQL 支持几种通配符。为在搜索子句中使用通配符，必须使用 LIKE 操作符。     

### 百分号通配符
最长使用的是百分号通配符。在搜索串中，%表示任何子都出现任意次数。例如，为了找出所有以词 Fish 起头的产品，可发布以下 SELECT 语句：
```sql
SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE 'Fish%';
```
此例子使用了搜索模式'Fish%'。在执行这条子句时，将检索任意以 Fish 起头的词。%告诉 DBMS 接受 Fish 之后的任意字符，不管他是什么。    
通配符可在搜索模式中的任意位置使用，并且可以使用多少个通配符。下面的例子使用两个通配符：
```sql
SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE '%bean bag%';
```
搜索模式'%bean bag%'表示匹配任何位置上包含文本 bean bag 的值，不论前后出现什么字符。

### 下划线通配符
另一个有用的通配符是下划线。下划线的用途和%一样，但它只匹配单个字符，而不是多个字符。举个例子：
```sql
SELECT prod_id, prod_name FROM Products WHERE prod_name LIKE '_ inch teedy bear';
```
与%能匹配多个字符不同，_总是刚好匹配一个字符，不能多也不能少。

### 方括号通配符
方括号通配符用来制定一个字符集，它必须匹配指定位置的一个字符。     
例如：找出所有名字以 J 或者 M 起头的联系人：
```sql
SELECT cust_contact FROM Customers WHERE cust_contact LIKE '[JM]%' ORDER BY cust_contact;
```
此语句的 WHERE 子句中的模式为'[JM]%'，这一搜索模式使用了两个不同的通配符。[JM]匹配方括号中的任意一个字符，它也只能匹配单个字符。    
此通配符可以使用前缀字符^来否定。例如：下面的查询匹配以 J 和 M 之外的任意字符起头的任意联系人名：
```sql
SELECT cust_contact FROM Customers WHERE cust_contact LIKE '[^JM]%' ORDER BY cust_contact;
SELECT cust_contact FROM Customers WHERE NOT cust_contact LIKE '[JM]%' ORDER BY cust_contact;
```
上面两个的结论是相同的。
