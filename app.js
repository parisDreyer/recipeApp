const mongoose = require('mongoose');
let bodyParser = require("body-parser");
const express = require("express");
const app = express();
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const passport = require('passport');
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use("/api/users", users);
app.use("/api/events", events);


const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("connected to mongodb successfully"))
    .catch(err => console.log(err));


// app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
