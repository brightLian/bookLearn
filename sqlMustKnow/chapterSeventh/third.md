# 7.3 执行算术计算
计算字段的另一常见用途是对检索出的数据进行算数计算。举个例子，Orders 表包含收到的所有订单，OrderItems 表包含每个订单中的各项物品。
下面的 SQL 语句检索订单号20008中的所有物品。
```sql
SELECT prod_id, quantity, item_price FROM OrderItems WHERE order_num = 20008;
```
item_price 列包含订单中每项物品的单价。如下汇总物品的总价格。
```sql
SELECT prod_id, quantity, item_price, quantity*item_price AS expanded_price FROM OrderItems WHERE order_num = 20008;
```
输出显示的 expanded_price 列是一个计算字段。客户端现在可以使用这个新计算列，就像使用其他列一样。