# 2.3 检索多个列
要想从一个表中检索多个列，仍然使用相同 SELECT 语句。唯一不同的是必须在 SELECT 关键字后给出多个列名，列名之间必须以逗号分隔。    
下面的 SELECT 语句从 Products 表中选择3列：   
```sql
SELECT prod_id, prod_name, prod_price FROM Products
```
与前一个例子一样，这条语句使用 SELECT 语句从表 Products 中选择数据。在这个例子中，制定了3个列名，列名之间用逗号分割。 