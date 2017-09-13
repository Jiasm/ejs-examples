const ejs = require('ejs')

console.log(ejs.render(`
  <%= (console.log('render1'), 'render') %>
`, {
  name: 'Niko Bellic',
  cache: true,
  filename: 'cache_template'
}))

console.log(ejs.render(`
  <%= (console.log('render2'), 'render') %>
`, {
  name: 'Niko Bellic',
  cache: true,
  filename: 'cache_template'
}))
