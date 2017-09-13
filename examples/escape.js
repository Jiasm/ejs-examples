const ejs = require('ejs')

console.log(ejs.render(`
  escape        : <%= tag %>
  without escape: <%- tag %>
`, {
  tag: '<h1>Hello</h1>'
}))
