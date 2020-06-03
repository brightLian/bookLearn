# 10.2 创建分组
分组是使用 SELECT 语句的 GROUP BY 子句建立的。看一例子：
```sql
SELECT vend_id, COUNT(*) AS num_prods FROM Products GROUP BY vend_id;
```
上面的 SELECT 语句制定了两个列：vend_id 包含产品供应商的 ID，num_prods 为计算字段（用COUNT(*)函数建立）。
GROUP BY 子句指示 DBMS 按 vend_id 排序并分组数据。
这就会对每个 vend_id 而不是整个表计算 num_prods 一次。
从输出中可以看到，供应商 BRS01 有3个产品，供应商 DLL01 有4个产品，而供应商 FNG01 有2个产品。   
   
因为使用了 GROUP BY 子句前，需要知道一些重要规定。
- GROUP BY 子句可以包含任何数目的列，因而可以对分组进行嵌套，更细致的进行数据分组。
- 如果在 GROUP BY 子句中潜逃了分组，数据将在最后指定的分组上进行汇总。换句话说，在建立分组中，指定的所有列都一起计算。
- GROUP BY 子句中列出的每一列都必须是检索列或者有效的表达式。如果在 SELECT 中使用表达式，必须在 GROUP BY 子句中指定相同的表达式。不能使用别名。
- 大多数 SQL 实现不允许 GROUP BY 列带有长度可变的数据类型。
- 除聚集计算语句外，SELECT 语句中的每一列都必须在 GROUP BY 子句中给出。
- 如果分组列中包含具有 NULL 值的行，则 NULL 将作为一个分组返回。如果列中有多行 NULL 值，它们将分为一组。
- GROUP BY 子句必须出现在 WHERE 子句之后，ORDER BY 子句之前。