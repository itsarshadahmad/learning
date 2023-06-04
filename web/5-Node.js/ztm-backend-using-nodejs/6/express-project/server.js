const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

// setting template engine to handlebars
app.set('view engine', 'hbs');
// Path is used to work with directory paths. __dirname provide current working directory path.
// path.join() joins path by current directory of project then inside folder name view.
// It return specified directory of file or folder.
// Setting template engine views which could then render to display views.
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  // req.base url return baseurl following route url ex- /baseURL/routeURL
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// express.static denotes static file like images, html, css. It has static files which you
// want to serve to client when requested.
app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  // Rendering templates and passing value to templates 
  res.render('index', {
    title: 'My Friends Are VERYY Clever',
    caption: 'Let\'s go skiing!',
  });
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


// RESTful APIs
// Use existing standards (HTTP, JSON, URL)
// Endpoints are collections of data
// Use GET, POST, PUT, and DELETE
// Client and Server
// Stateless and Cacheable

// MVC Design Pattern
// Controller is function that react to user request and reponse accordingly.
// Model is data store or database. It also include function by which we access database.
// It contains representation of data in format it will be used by webapp.
// View is data from model which will be presented back to the user in desired format.
// ex- JSON, HTML, Template, etc
// User (Uses) -> Controller (Manipulates) -> Model (Updates) -> View (represented/sees) -> User

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});