const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
).then(() => {
  const routes = require("./routes")(mongoose);
  app.use(routes);
  console.log('Database is connected');
  // Start the API server
  app.listen(PORT, function() {
    console.log(`Now listening on port ${port}`);
  });
});