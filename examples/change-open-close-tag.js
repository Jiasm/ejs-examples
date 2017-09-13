const ejs = require('ejs')

// 全局的设置
// ejs.open = '{{'
// ejs.close = '}}'

console.log(ejs.render(`
  <%= name %>
  {{= name }}
`, {
  name: 'Niko Bellic',
  // 或者可以在某次`render`处设置
  open: '{{',
  close: '}}'
}))
