
var express = require("express");


// var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
// app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


// Routes

require("./routes/htmlRoutes")(app);
{
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
        );
      });
    };
