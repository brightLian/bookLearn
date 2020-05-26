# 5.2 IN 操作符
IN 操作符用来指定条件范围，范围中的每个条件都可以进行匹配。IN 取一组有逗号分隔、括在圆括号中的合法值。举个例子：
```sql
SELECT prod_name, prod_price FROM Product WHERE vend_id IN ('DLL01', 'BRS01') ORDER BY prod_name;
```
此 SELECT 语句检索有供应商 DLL01 和 BRS01 制造的所有产品。IN 操作符后跟由逗号分隔的合法值，这些值必须括在圆括号中。     
你可能会操测 IN 操作符完成了与 OR 相同的功能，确实是这样：
```sql
SELECT prod_name, prod_price FROM Product WHERE vend_id = 'DLL01' OR vend_id = 'BRS01' ORDER BY prod_name;
```
为什么使用 IN 操作符？其优点如下：
1.在有很多合法选项时，IN 操作符的语法更清楚，更直观。
2.在与其他 AND 和 OR 操作符组合使用 IN 时，求值顺序更容易管理。
3.IN 操作符比一组 OR 操作符执行的更快。
4.IN 的最大优点是可以包含其他 SELECT 语句，能够更动态地建立 WHERE 子句。（后续会介绍）