/* jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

const mongoose = require('mongoose');
// let dev_db_url = 'mongodb+srv://saiffer:1234@products-8rcgp.mongodb.net/test?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://saiffer:1234@products-8rcgp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

let mongoDB = process.env.MONGODB_URI || uri;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

