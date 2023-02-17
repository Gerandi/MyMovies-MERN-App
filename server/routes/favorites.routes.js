const express = require('express');
const router = express.Router();

const favorites = require("../controllers/favorites.controller.js");

//Authenticate middleware to see if the user is logged in or not
const {authenticate} = require('../config/jwt.config')

// Create a Favorite for a user by movieId
router.post("/",authenticate, favorites.create);

// Get one Favorite by movieId and userId
router.get("/:userId/:movieId",authenticate, favorites.findOneByMovieIdAndUserId);

// Retrieve all Favorites by userId
router.get("/:userId",authenticate, favorites.findAllByUserId);

// Delete a Favorite with movieId and userId
router.delete("/:userId/:movieId",authenticate, favorites.deleteByMovieIdAndUserId);

// Delete all Favorites of a user
router.delete("/:userId",authenticate, favorites.deleteAll);


module.exports = router;
