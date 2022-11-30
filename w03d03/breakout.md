# Breakout

```html
<div>
  <h2>Hello</h2>
  <div>
    <p>Good morning</p>
    <p>Good morning</p>
    <p>Good morning</p>
    <p>Good morning</p>
    <p>Good morning</p>
  </div>
</div>

<form method="POST" action="/register"> 
  <input name="email" />
  <input name="password" />

  <button type="submit">Register!</button>
</form>
```

```ejs
<!-- inside the _header.ejs -->
<% if (username) { %>
  <h2>You are signed in as: <%= username %></h2>
  <form>
    <button>Logout</button>
  </form>
<% } else { %>
  <form>
    <input name="username" />
  </form>
<% } %>
```
