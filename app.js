var express = require("express");
var path = require("path");
const connectDB = require("./mongodb")
const Signup = require("./models/User")


var routes = require("./routes");

var app = express();
connectDB();


app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(routes);
app.use(express.json())
app.use(express.static('views'));
app.use('/css', express.static(__dirname + 'views/css'));
app.use('/img', express.static(__dirname + 'views/img'));
app.use(express.urlencoded({extended:false}))

app.listen(app.get("port"),function(){
    console.log("server started on port " + app.get("port"));

});