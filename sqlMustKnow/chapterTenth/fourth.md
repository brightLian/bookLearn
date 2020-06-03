# 10.4 分组和排序
GROUP BY 和 ORDER BY 经常完成相同的工作，但他们非常不同，理解这一点很重要。  
| ORDER BY     | GROUP BY     | 
|:-------------:|:-------------:|
| 对产生的输出排序   | 对行分组，但输出可能不是分组的顺序 |
| 任意列都可以使用   | 只能使用选择列或者表达式列 |
| 不一定需要   | 如果与聚集函数一起使用，则必须使用 |
上表第一项差别十分重要。
我们经常发现，用 GROUP BY 分组的数据确实是以分组顺序输出的。
但不总是这样，这不是 SQL 规范所要求的。
此外，即使特定的 DBMS 总是按给出的 GROUP BY 子句排序数据，用户也可能会要求以不同的顺序排序。
就因为你以某种方式分组数据，并不表示你需要以相同的方式排序排序输出。
应该提供明确的 ORDER BY 子句，即使其效果等同于 GROUP BY 子句。   
   
为说明 GROUP BY 和 ORDER BY 的使用方法，来看一个例子。
下面的 SELECT 语句类似于前面那些例子。
他检索包含3个或更多物品的订单号和订购物品数目：
```sql
SELECT order-mum, COUNT(*) AS items
FROM OrderItems
GROUP BY order_num
HAVING COUNT(*) >= 3;
```
要按订购物品数目排序输出，需要添加 ORDER BY 子句，如下所示：
```sql
SELECT order-mum, COUNT(*) AS items
FROM OrderItems
GROUP BY order_num
HAVING COUNT(*) >= 3;
ORDER BY items, order_num;
```
在这个例子中，使用 GROUP BY 子句按订单号分组数据，以便 COUNT(*) 函数能够返回每个订单中的物品数目。
HAVING 子句过滤数据，使得只返回包含三个或更多物品的订单。
最后用 ORDER BY 子句排序输出。