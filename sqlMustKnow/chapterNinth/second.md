# 9.2 聚集不同值
以上5中聚集函数都可以如下使用。
- 对所有行执行计算，指定 ALL 参数或者不指定参数。
- 只包含不同的值，指定 DISTINCT 参数。 
   
下面的例子使用 AVG()函数返回特定供应商提供的产品的平均价格。
它与上面的 SELECT 语句相同，但使用了 DISTINCT 参数，因此平均值只考虑各个不同但价格：
```sql
SELECT AVG(DISTINCT prod_price) AS avg_price FROM Products WHERE vend_id = 'DLL01';
```
可以看到，在使用 DISTINCT 后，此例子中的 avg_price 比较高，因为有多个物品具有相同的较低价格，排除了它们提升了平均价格。