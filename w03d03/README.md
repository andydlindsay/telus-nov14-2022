# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Render pages differently based on language preference
- [x] Log user in with email and password
- [x] Log user out

### HTTP
* request and response
* stateless => neither party HAS to remember any previous interactions

### Cookies
* key/value pairs
* browser will send ALL cookies with each subsequent request
* cookies are domain-specific


                                                  request

client ===========> middleware => middleware => route handler => middleware
                    req.body      logger
                    next()        next()

### Users
* id
* email
* password

user_id

login
protected

urlencoding
email=jstamos%40mail.com&password=asdgdfkalshdf









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










