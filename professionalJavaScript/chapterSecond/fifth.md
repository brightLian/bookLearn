# 2.5 小结
把 JavaScript 插入到 HTML 中要使用&lt;script&gt;元素。使用这个元素可以把 JavaScript 嵌入到 HTML 页面中，让脚本和标记混合到一起；
也可以包含外部的 JavaScript 文件。而我们需要注意的地方有：
- 在包含外部 JavaScript 文件时，必须叫 src 属性设置只想对应文件的 URL。
- 所有&lt;script&gt;元素都会按照他们在页面中出现的先后顺序依次被解析。在不使用 defer 和 async 属性的情况下。
- 由于浏览器会先解析完不使用 defer 属性的&lt;script&gt;中的代码，然后在解析后面的内容，所以一定把&lt;script&gt;元素放在页面最后。
- 使用 defer 属性可以让脚本在文档完全呈现之后再执行。
- 使用 async 属性可以表示当前脚本不必等待其他脚本，也不必阻塞文档呈现。