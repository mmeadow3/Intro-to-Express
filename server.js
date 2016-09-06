"use strict"
// using HTTP pie
 // http POST http://localhost:3000/mike


const express = require('express');  ///////takes the place of require HTTP
const app = express();


// var hbs  = require('express-handlebars');
// app.engine('handlebars', hbs());
/////start HBS engine/////

// app.set('view engine', 'handlebars');
// app.set("views", "templates");  /////shows what directory to look in/////

//////start ejs engine///////////
// app.set('view engine', 'ejs');
// app.set("views", "templates");  /////shows what directory to look in/////

/////start pug engine//////////
app.set('view engine', 'pug');
app.set("views", "templates");  /////shows what directory to look in/////


///////////app.use is a middleware function///////////
/////////////////transform stream////////////////
///////This will serve up a static file.  found at localhost:3000/products.html
app.use(express.static("public")) ///// this is looking for static files in the public folder
/////always have this at the top of the server page

app.get('/', function (req, res) { //////getting the requested page
  res.render('page', {title: "Home"});  //////what will send on the page
  })


app.get('/', function (req, res) { //////getting the requested page
  res.send('Hello World!');  //////what will send on the page
  })
    .get('/mike', function (req, res) { //////getting the requested page
      res.send(`<h1 style="color: red"> Hello World in h1 and red</h1>`);  //////what will send on the page
    });

app.post('/mike', function (req, res) { //////getting the requested page
      res.send(`<h1 style="color: red">Contact us, thanks</h1>`);  //////what will send on the page
    });



//////always put this at the bottom//////////
app.get('/*', function (req, res) { /////* is for any page, and those not found
  res.send('404 ERROR');
});



/////start the server/////////
app.listen(3000, function () {
  console.log('listening on port 3000!');
});
