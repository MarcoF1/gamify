const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const cors = require("cors");

// create our app
const app = express();

// set up user session
app.use(
  session({
    secret: "gamify",
    resave: true,
    saveUninitialized: true,
  })
);

// allows us to make requests from POSTMAN
app.use(cors());

// set up the app to use dev logger
app.use(logger("dev"));

// accept json
app.use(express.json());

// https://stackoverflow.com/questions/29960764/what-does-extended-mean-in-express-4-0
// allows object nesting in POST
app.use(express.urlencoded({ extended: false }));

// cookies for sessions
app.use(cookieParser());

// server html+css+js frontend
app.use(express.static(path.join(__dirname, "dist")));

console.log("Running on localhost:3000...");

module.exports = app;
