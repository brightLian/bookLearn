# 3.1 排序数据
这节课讲述如何使用 SELECT 语句的 ORDER BY 子句，根据需要排序检索出的数据。   

其实检索出的数据并不是随机显示的。如果不排序，数据一般将以它在地层表中出现的顺序显示，这可能是数据最初添加到表中的顺序。    
为了明确地排序用 SELECT 语句检索出的数据，可以使用 ORDER BY 子句。ORDER BY 子句去一个或多个列的名字，据此对输出进行排序。
```sql
SELECR prod_name FROM Products ORDER BY prod_name;
```
注意：在指定一条 ORDER BY 子句时，应该保证他是 SELECT 语句中最后一条子句。不然会出现错误信息。
