const ejs = require('ejs')

// 因为EJS是将模版中的JS代码转换后执行的。
// 自身并不提供语法，所以像什么ES6 ES7，只要你当前的环境支持，就可以写。

console.log(ejs.render(`
  <p>colos:</p>
  <ul><% -%>
    <% list.forEach(item => { %>
      <li><%= item -%></li>
    <% }) %>
  </ul>
`, {
  list: [
    'red',
    'green',
    'blue'
  ]
}))
