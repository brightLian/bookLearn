# 3.4 指定排序方向

数据排序不限于升序排序，这只是默认的排序顺序。还可以使用 ORDER BY 子句进行降序排序。为了进行降序排序，必须指定 DESC 关键字。   
```sql
SELECT prod_id, prod_price, prod_name FROM Products ORDER BY prod_price DESC;
```
DESC 关键字只应用到直接位于其前面的列名。