# 10.3 过滤分组
除了能用 GROUP BY 分组数据外，SQL 还允许过滤分组，规定包括哪些分组，排除哪些分组。    
例如，你可以列出至少有两个订单的所有顾客，为此必须基于完整的分组而不是个别的行进行过滤。    
   
我们已经看到了，WHERE 子句的作用。但是，在这个例子中 WHERE 不能完成任务，因为 WHERE 过滤指定的是行而不是分组。
事实上，WHERE 没有分组的概念。   
   
那么，不使用 WHERE 使用什么呢？SQL 为此提供了另一个子句，就是 HAVING 子句。
HAVING 非常类似 WHERE。
事实上，目前为止所学过的所有类型的 WHERE 子句都可以使用 HAVING 来代替。
唯一差别是，WHERE 过滤行，而 HAVING 过滤分组。   
   
那么，怎么过滤分组呢？请看下面的例子：
```sql
SELECT cust_id, COUNT(*) AS orders FROM Orders GROUP BY cust_id HAVING COUNT(*) >= 2;
```
这条 SELECT 语句的前3行类似于上面的语句。
最后一行增加了 HAVING 子句，它过滤 COUNT(*) >= 2 的哪些分组。    
可以看到，WHERE 子句在这里不起作用，因为过滤是基于分组聚集值，而不是特定行的值。  
    
那么，又没有在一条语句中同时使用 WHERE 和 HAVING 子句的需要呢？事实上，确实有。
```sql
SELECT vend_id, COUNT(*) AS num_orders 
FROM Orders
WHERE prod_price >= 4 
GROUP BY vend_id
HAVING COUNT(*) >= 2;
```
这条语句中，第一行是使用了聚集函数的基本 SELECT 语句，很像前面饿例子。
WHERE 子句过滤所有 prod_price 至少为4的行，然后按 vend_id 分组数据，HAVING 子句过滤计数为2或2以上的分组。