## React Router Breakout

### Main Components
* `<BrowserRouter>`: Main container that wraps all children involved in routing/rendering
* `<Link>`: The component responsible for updating the current url
* `<Route>`: Url-matcher for conditionally rendering components based on the current url
* `<Routes>`: Wrapper for the `Route`'s which will only allow one route to match
* `<Navigate>`: Can be used to "redirect" a user

### Custom Hooks
* `useParams`: Allows us to access the dynamic parameters in the current url (similar to `req.params` in Express)
* `useNavigate`: Allows us to programmatically move the user to a different endpoint
