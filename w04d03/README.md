# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript and XML AJAJ
* JS is going to make all the HTTP requests in the background
* single page application SPA


```xml
<username>alice</username>
<password>1234</password>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  method: 'POST',
  url: '/urls',
  success: (response) => {
    // do something with the response
  },
  error: (err) => {
    // do something on error
  }
});
```







