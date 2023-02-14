require("dotenv").config();
const mongoose = require("mongoose");


mongoose
  .connect('mongodb://localhost/MovieDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(() => {
      console.log(
        "Connected to database on port 8000 and database MovieDb!"
      );
  })
  .catch((err) => {
    console.log(err);
  });

