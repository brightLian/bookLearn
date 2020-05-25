# 3.2 按多个列排序

经常需要按不止一个列进行数据排序。要按照多个列排序，简单指定列名，列明之间用逗号分开即可。
```sql
SELECT prod_id, prod_price, prod_name FROM Products ORDER BY prod_price, prod_name;
```
如果有多个排序规则的化，则是按照你指定的先后进行。
