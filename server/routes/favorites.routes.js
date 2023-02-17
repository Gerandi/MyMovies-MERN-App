const express = require('express');
const router = express.Router();

const favorites = require("../controllers/favorites.controller.js");

// Create a Favorite
router.post("/", favorites.create);

// Retrieve all Favorites by userId
router.get("/:userId", favorites.findAllByUserId);

// Delete a Favorite with movieId and userId
router.delete("/:userId/:movieId", favorites.deleteByMovieIdAndUserId);

// Delete all Favorites of a user
router.delete("/:userId", favorites.deleteAll);

module.exports = router;
