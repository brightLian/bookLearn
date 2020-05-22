# 2.5 检索不同的值
如前所述，SELECT 语句返回所有匹配的行。但是，如果你不希望每个值都出现，该怎么办呢？    
即检索的内容不出现重复的值：使用 DISTINCT 关键字。    
```sql
SELECT DISTINCT vend_id FROM Products;
```
SELECT DISTINCT vend_id 告诉 DBMS 值返回不同的 vend_id 行。 如果使用 DISTINCT 关键字，他必须放在列名的前面。   
注意：不能部分使用 DISTINCT。   