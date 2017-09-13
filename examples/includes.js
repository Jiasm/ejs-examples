const ejs = require('ejs')

console.log(ejs.render(`
  <% include template %>
  <p>some detail</p>
`, {
  user: {
    name: 'Niko Bellic'
  },
  filename: 'template'  // 使用include必须添加 `filename`
}))
