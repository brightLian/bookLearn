# 5.1 组合 WHERE 子句
这一课教授如何组合 WHERE 子句以建立功能更强、更高级的搜索条件。我们还将学习如何使用 NOT 和 IN 操作符。      
### 组合WHERE子句
第4课介绍的所有 WHERE 子句在过滤数据时使用的都是单一的条件。为了进行更强的过滤控制，SQL 允许给出多个 WHERE 子句。这些子句有两种使用方式，即以 AND 子句或 OR 子句的方式使用。
    
### AND操作符
要通过不知一个列进行过滤，可以使用 AND 操作符给 WHERE 子句附加条件。
```sql
SELECT prod_id, prod_price, prod_name FROM Products WHERE vend_id = 'DLL01' AND prod_price <= 4;
```
此 SQL 语句检索由供应商 DLL01 制造且价格小于等于4美元的所有产品内容。这条 SELECT 语句中的 WHERE 子句包含两个搜索条件，用关键字 AND 联结。    
这个例子值包含一个 AND 子句，因此最多有两个过滤条件。可以增加多个过滤条件，每个条件件都要使用 AND 关键字。

### OR操作符
OR 操作符与 AND 操作符正好相反，它指示 DBMS 检索匹配任意一条件的行。事实上，许多 DBMS 在 OR WHERE 子句的第一个条件得到满足的情况下，就不在计算第二个条件了。    
请看如下的 SELECT 语句：
```sql
SELECTR prod_name, prod_price FROM Products WHERE vend_id = 'DLL01' OR vend_id = 'BRS01';
```
此语句检索有一个指定供应商制造的所有产品的产品名和价格。OR 操作符告诉 DBMS 匹配任一条件而不知同时匹配两个条件。

### 求值顺序
WHERE 子句 可以包含任意数目的 AND 和 OR 操作符。允许二者结合进行复杂、高级的过滤。      
但是组合 AND 和 OR 会带来了一个有趣的问题，我们看一个例子：
```sql
SELECT prod_name, prod_price FROM Products WHERE vend_id ='DLL01' OR vend_id = 'BRS01' AND prod_price >= 10;
```
这个语句可能你期望的返回值里面的商品价格都是大于等于10的，但是实际会返回小于10的。显然，返回的数据未按照预期进行过滤。      
:point_right:原因在于求值的顺序，SQL 在处理 OR 操作符之前，优先处理 AND 操作符。      
当看到上述 WHERE 子句是，它理解为：有供应商 BRS01 制造的价格为10及以上的所有产品，以及有供应商 DLL01 制造的所有商品。    
换句话说：由于 AND 在求值过程中优先级更高，操作符也被错误的组合了。此问题的解决方法是使用 () 对操作符进行明确的分组。
```sql
SELECT prod_name, prod_price FROM Products WHERE (vend_id = 'DLL01' OR vend_id = 'BRS01') AND prod_price >= 10;
```
这条 SELECT 语句与前一条的唯一差别是，将前两个条件用圆括号括了起来。因为圆括号具有比 AND 或 OR 操作符更高的求值顺序，所以 DBMS 首先过滤圆括号内的 OR 条件。