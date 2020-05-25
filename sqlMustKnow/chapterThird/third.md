# 3.3 按列位置排序

除了能用列名指出排序顺序外，ORDER BY 还支持按相对列位置进行排序。
```sql
SELECT prod_id, prod_price, prod_name FROM Products ORDER BY 2, 3;
```
这里面的 ORDER BY 2, 3 表示先按照 prod_price 在按照 prod_name 进行排序。     
这一技术的主要好处在于不用重新输入列名。

