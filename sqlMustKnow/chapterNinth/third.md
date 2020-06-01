# 9.3 组合聚集函数
目前为止所有聚集函数例子都只涉及单个函数。但实际上，SELECT 语句可根据所需要包含多个聚集函数。
```sql
SELECT COUNT(*) AS num_item,
	   MIN(prod_price) AS price_min,
	   MAX(prod_price) AS price_max,
	   AVG(prod_price) AS price_avg
FROM Products;
```
这里用单条 SELECT 语句执行了4个聚集计算，返回了4个值。