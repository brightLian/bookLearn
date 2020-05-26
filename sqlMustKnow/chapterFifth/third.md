# 5.3 NOT 操作符
WHERE 子句中的 NOT 操作符有且只有一个功能，那就是否定其后所跟的任何条件。因为 NOT 从来不单独使用，所以和其他操作符有所不同。     
下面例子说明 NOT 的用法，为了列出除 DLL01 之外的所有供应商制造的产品，可编写如下的代码。
```sql
SELECT prod_name FROM Products WHERE NOT vend_id = 'DLL01' ORDER BY prod_name;
```
这里的 NOT 否定跟在其后的条件，因此 DBMS 不是匹配 vend_id 为 DLL01，而是匹配非 DLL01 之外的所有东西。   
上面的例子也可以使用<>操作符来完成，如下所示：
```sql
ECT prod_name FROM Products WHERE vend_id <> 'DLL01' ORDER BY prod_name;
```