# 2.6 限制结果
SELECT 语句返回指定表中所有匹配的行，很可能是每一行。如果你想返回第一行或者一定数量的行，该怎么办呢？    
我们以 MySQL 为例，需要使用 LIMIT 子句，其他类型的数据库的可以自行查询：   
```sql
SELECT prod_name FROM Products LIMIT 5;
```
上述代码使用 SELECT 语句来检索单独的一列数据。LIMIT5 指示 MySQL 等 DBMS 返回不超过5行数据。    