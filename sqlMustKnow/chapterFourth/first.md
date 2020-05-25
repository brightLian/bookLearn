# 4.1 使用 WHERE 语句
这一课将讲授如何使用 SELECT 语句的 WHERE 子句就指定搜索条件。    
数据库表中一般包含大量的数据，很少需要检索表中的所有行。通常只会根据特定操作或者报告的需要提取表数据的子集。只检索所需数据需要指定过滤条件。    
在 SELECT 语句中，数据根据 WHERE 子句中指定的搜索条件进行过滤。WHERE 子句在表名之后给入，如下所示：
```sql
SELECT prod_name, prod_price, FROM Products WHERE prod_price = 3.49;
```
这条语句从 products 表中检索两个列，但不返回所有行，只返回 prod_price 值为3.49的行。    
注意：在同时使用 ORDER BY 和 WHERE 子句是时，应该让 ORDER BY 位于 WHERE 之后，否则会产生错误。