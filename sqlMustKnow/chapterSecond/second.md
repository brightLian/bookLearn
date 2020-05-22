# 2.2 检索单个列
我们将从简单的 SQL SELECT 语句讲起，此语句如下所示：
```sql
SELECT prod_name FROM Products;
```
上述语句利用 SELECT 语句从 Products 表中检索一个名为 prod_name 的列。    
所需列的名字写在 SELECT 关键字之后， FROM 关键字指出从哪个表中检索数据。     
**注意：**   
&emsp;&emsp;1. **未排序数据：** 如果你多次试验这个查询可能会发现显示输出的数据顺序不同。如果没有制定排序查询结果，则返回的数据没有特定顺序。   
&emsp;&emsp;2. **结束 SQL 语句：** 多条 SQL 语句必须以分号分隔。   
&emsp;&emsp;3. **SQL 语句与大小写：**  SQL 语句不区分大小写，因此使用 SELECT 和 select 是相同的。    
&emsp;&emsp;4. **使用空格：** 在处理 SQL 语句时，其中所有空格都会被忽略。SQL 语句可以写成长长的一行，也可以分写在多行。