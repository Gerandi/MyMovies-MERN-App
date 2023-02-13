require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// mongoDB initialization
require("./config/db.config");