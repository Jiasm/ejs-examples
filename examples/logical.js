const ejs = require('ejs')

console.log(ejs.render(`
  <% if (user) {%>
    <h1><%= user.name %></h1>
  <% } else { %>
    <h1>no result</h1>
  <% } %>
`, {
  user: {
    name: 'Niko Bellic'
  }
}))
