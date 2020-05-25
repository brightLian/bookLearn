# 4.2 WHERE 子句操作符
我们在做相等检验时看到了第一个 WHERE 子句，它确定一个列是否包含指定的值。     
| 操作符          | 说明     |
|:-------------:|:-------------:|
| =   | 等于 |
| <>   | 不等于 |
| !=   | 不等于 |
| <   | 小于 |
| <=   | 小于等于 |
| !<   | 不小于 |
| >=   | 大于等于 |
| !>   | 不大于 |
| BETWEEN   | 两者之间 |
| IS NULL   | 为NULL值 |
### 检索单个值
我们已经看到了检验相等的例子，现在来看看几个使用其他操作符的例子。      
第一个例子是列出所有价格小于10美元的产品。
```sql
SELECT prod_name, prod_price FROM Products WHERE prod_price < 10;
```
### 不匹配检查
这里自己列出所有供应商 DLL01 制造的商品：
```sql
SELECT vend_id, prod_name FRPM Products WHERE vend_id <> 'DLL01';
```

### 范围值检查
要检查某个范围的值，可以使用 BETWEEN 操作符。其语法与其他 WHERE 子句的操作符稍有不同。    
下面的例子说明如何使用 BETWEEN 操作符，他检索价格在5美元和10美元之间的所有产品。   
```sql
SELECT prod_name, prod_price FROM Products WHERE prod_price BETWEEN 5 AND 10;
```
从这个例子可以看到，在使用 BETWEEN 时，必须指定两个值。两个值必须用 AND 关键字分割。BETWEEN 匹配范围中所有的值，包括指定开始值和结束值。

### 空值检查
在创建表时，表设计人员可以指定其中的列能否不包含值。在一个列不包含值时，撑起包含空值 NULL。   
确定值是否为 NULL，不能简单地检查是否 = NULL。SELECT 语句又一个特殊的 WHERE 子句，可用来检查具有 NULL 值的列。这个 WHERE 子句就是 IS NULL。   
```sql
SELECT prod_name FROM Products WHERE prod_price IS NULL;
```