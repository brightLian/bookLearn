# 9.1 聚集函数
这一课介绍什么是 SQL 的聚集函数，如何利用它们汇总表的数据。    
   
我们经常需要汇总数据而不是它们的实际检索出来，为此 SQL 提供了专门的函数。使用这些函数，SQL 查询可用于检索数据，以便分析和报表生成。
这种类型的检索例子有：   
- 确定表中行数；
- 获得表中某些行的和；
- 找出表列中的最大值、最小值、平均值。
上述例子都需要汇总表中的数据，而不需要实际数据本身。因此，返回实际表数据纯属浪费时间和处理资源。     
     
为方便这种类型的检索，SQL 给出了5个聚集函数，这些函数能进行上述检索。与前一章介绍的数据处理函数不同，SQL 聚集函数在各种主要 SQL 实现中得到
了相当一致的支持。
| 函数          | 说明 |
|:-------------:|:-------------:|
| AVG()   | 返回某列的平均值 |
| COUNT()   | 返回某列的行数 |
| MAX()   | 返回某列的最大值 |
| MIN()   | 返回某列的最小值 |
| SUM()   | 返回某列的和 |

### AVG()函数
AVG()通过表中行数计数并计算其列值之和，求的该列的平均值。AVG()可用来返回所有列的平均值，也可用来返回特定列或行的平均值。    
下面的例子使用 AVG() 返回 Products 表中所有产品的平均价格。    
```sql
SELECT AVG(prod_price) AS avg_price FROM Products;
``` 
此 SELECT 语句返回值 avg_price，它包含 Products 表中所有产品的平均价格。    
AVG()也可以用来确定特定列或行的平均值。下面的例子返回特定供应商所提供产品的平均价格：   
```sql
SELECT AVG(prod_price) AS avg_price FROM Products WHERE vend_id = 'DLL01';
```
这条 SELECT 语句与之前的不同在于，它包含了 WHERE 子句。此 WHERE 子句仅过滤出 vend_id 为 DLL01 的产品，因此 avg_price 中返回的值只是
该供应商产品的平均值。

### COUNT()函数
COUNT()函数用于进行计数。可利用 COUNT()确定表中行的数目或符合特定条件的行的数目。   
    
COUNT()函数有两种使用方式：
- 使用 COUNT(*)对表中行的数目进行计算，不管表列中包含的是空值还是非空值。
- 使用 COUNT(column)对也定列中具有值的行进行计数，忽略 NULL 值。
下面的例子返回 Customers 表中顾客的总数：
```sql
SELECT COUNT(*) AS num_cust FROM Customers;
```
此例子中，利用 COUNT(*)对所有行计数，不管行中各列有什么值。计算数值在 num_cust 中返回。    
  
下面例子只对具有电子邮件地址的客户计数：
```sql
SELECT COUNT(cust_email) AS num_cust FROM Customers;
```
这条 SELECT 语句使用 COUNT(cust_email)对 cust_email 列中有值的行进行计数。

### MAX()函数
MAX()返回指定列中的最大值。MAX()要求指定列名，如下所示：
```sql
SELECT MAX(prod_price) AS max_price FROM Products;
```
这里，MAX()返回 Products 表中最贵物品的价格。

### MIN()函数
MIN()的功能正好与 MAX()功能相反，他返回指定列的最小值。与 MAX()一样，MIN()要求指定列名：
```sql
SELECT MIN(prod_price) AS max_price FROM Products;
```
这里，MAX()返回 Products 表中最便宜物品的价格。

### SUM()函数
SUM()用来返回指定列值的和。    
   
下面举一个例子，OrderItems 包含订单中实际的物品，每个物品有相应的数量。可如下检索所订购物品的总数：
```sql
SELECT SUM(quantity) AS items_ordered FROM OrderItems WHERE order_num = 20005;
```
函数 SUM(quantity)返回订单中所有物品数量之和，WHERE 子句保证值统计某个物品订单中的物品。    
SUM()也可以用来合计计算值。在下面例子中，合集没想物品的 item_price * quantity，得出总的订单金额。
```sql
SELECT SUM(item_price * quantity) AS total_ordered FROM OrderItems WHERE order_num = 20005;
```
函数 SUM(quantity)返回订单中所有物品价钱之和，WHERE 子句保证值统计某个物品订单中的物品。




