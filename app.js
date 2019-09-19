const express = require("express");
const bodyParser = require("body-parser");

const task = require('./routes/task.route'); // Imports routes for the products
// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb://victor:victor1db2password@ds341247.mlab.com:41247/axis_tracking";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/tasks", task);

let port = 8080;

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});