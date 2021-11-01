require("dotenv").config();
require("./database");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var http = require("http");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index.route");
var usersRouter = require("./routes/users.route");
var unidadRouter = require("./routes/unidad.route.js");
var app = express();

const { STARGRAVE_APP_SERVER_HOST, STARGRAVE_APP_SERVER_PORT } = process.env;

// Settings
//app.set("views", path.join(__dirname, "views"));
//app.set("view engine", "jade");

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  console.log("dirname", __dirname);
  next();
});
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

//Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/unidad", unidadRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var server = app.listen(
  STARGRAVE_APP_SERVER_PORT,
  STARGRAVE_APP_SERVER_HOST,
  function () {
    var host = server.address().address; //seteamos en host el address para mostrarlo en el consolelog de abajo
    var port = server.address().port; //lo mismo que arriba pero para port. server.address() te da acceso a las variables.
    console.log("Example app listening at http://%s:%s", host, port);
  }
);

module.exports = app;
