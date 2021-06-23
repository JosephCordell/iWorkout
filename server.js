const express = require('express');

const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
require('dotenv').config();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI /* || 'mongodb://localhost/workout' */, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connected to database!');
}).then(async () => {
  // Start the API server
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
})


