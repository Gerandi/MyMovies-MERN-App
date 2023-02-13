require("dotenv").config();
const mongoose = require("mongoose");


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to database on port " + process.env.PORT + " and database " + process.env.MONGODB_URI + "!"
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

