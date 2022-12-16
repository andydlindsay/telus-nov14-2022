# W05D05 - Mid-term Project Kickoff

### Why
* give experience on building something from end-to-end
* enjoy your pain
* more pair programming
* working in a team
* hands on learning
* git exp with teams
* collaboration skills

### Pick a Project

### User Stories
* describe what a user can do and their motivation
* As a ______, I can ______, because _______

* As a logged-in user, I can see a list of maps of the area around me, because I'm interested in local things

* As a non-logged-in user, I cannot edit a pin on a map, because that map doesn't belong to me

* As an admin user, I can list products for sale, because I want more money

planning/user-stories.md

### User-story nouns === resources
* tables
* ERD
* 4 - 6 tables
* lowest fidelity possible diagrams.net, whiteboard, pen and paper

planning/erd.png
planning/erd-stretch.png

### Routes
* can the client perform BREAD operations on a particular resource
* remember RESTful routing
* resources are plural
* the routes we use to access the data represent the underlying data structure

* REST is a naming convention

<!-- GET /allUsersInTheDatabase
POST /createANewUser -->

Browse  GET   /pins
Read    GET   /pins/:id
Edit    POST  /pins/:id
Add     POST  /pins
Delete  POST  /pins/:id/delete

GET /maps/:map_id/pins
GET /authors/:author_id/books

PUT replaces a resource entirely
PATCH replaces a piece of a resource
DELETE deletes a resource

Browse  GET    /pins
Read    GET    /pins/:id
Edit    PATCH  /pins/:id
Add     POST   /pins
Delete  DELETE /pins/:id

planning/routes.md

### MVP
* minimum viable product
* KV minimum viable demo (MVD)
* if you're not going to demo it, don't build it

### User Login
* don't do it

```js
// /login/5
app.get('/login/:id', (req, res) => {
  // set the cookie
  req.session.user_id = req.params.id;

  res.cookie('user_id', req.params.id);

  // redirect the user
  res.redirect('/');
});
```

### Wireframes/Mockups
* lowest fidelity possible (figma)

planning/wire-frame.png

### Tech Stack
* Back end: Node, Express, Postgres
* Front end: HTML, CSS, JS, jQuery, CSS framework, SCSS

### SPA vs multi-page
* these are not mutually exclusive

### Git
* merge conflicts
* two or more devs touch the same file

### I will not code on master/main

### Split up the work
* horizontal - everyone is working on the same layer
* vertical - everyone working on diff layers
* pair programming

please don't fall on your sword

### Communication
* please do it











