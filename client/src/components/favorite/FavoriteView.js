// todo
// create a vew to view all the favorite items in a table

import React, { useState, useEffect } from "react";
import axios from "axios";
import tmdbApi from '../../api/tmdbApi';
import apiFavorites from '../../api/apiFavorites';
import "./favorite-view.scss";

import PageHeader from '../page-header/PageHeader';


// make a function to get all the favorite moviesId of the specific userId from the server and store it in a state

function FavoriteView() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // const userId = localStorage.getItem("userId");
    const userId = "63ef4ae6725f5ee3273ac5e6";
    async function fetchData() {
      try {
        const response = await apiFavorites.get(`/api/favorites/${userId}`);
        setFavoriteMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

// make a function that gets the movieId from the favoriteMovies state and makes calls to tmdb api to get the movie details and store it in a state

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    favoriteMovies.map((movie) => {
      tmdbApi.detail("movie", movie.movieId, { params: {} }).then((res) => {
        setMovieDetails((movieDetails) => [...movieDetails, res]);
      });
    });
  }, [favoriteMovies]);

  // make a function that removes the movie from the favorite list

  const removeFavorite = (movieId) => {
    // const userId = localStorage.getItem("userId");
    const userId = "63ef4ae6725f5ee3273ac5e6";
    async function fetchData() {
      try {
        const response = await apiFavorites.delete(
          `/api/favorites/${userId}/${movieId}`
        );
        console.log(response.data);
        // filter out the deleted movie from the movieDetails state
        setMovieDetails(movieDetails.filter((movie) => movie.id !== movieId));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  };
  

  // return the movie details in a table and add a button to remove the movie from the favorite list


  return (
    <div className="container">
      <PageHeader>
        My Favorites
      </PageHeader>
      <div className="favorite-view">
        <table className="favorite-table">
          <thead>
            <tr>
              <th className="favorite-header">Movie Title</th>
              <th className="favorite-header">Movie Poster</th>
              <th className="favorite-header">Voting Average</th>
              <th className="favorite-header">Release Year</th>
              <th className="favorite-header">Remove from Favorite</th>
            </tr>
          </thead>
          <tbody>
            {movieDetails.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="favorite-poster"
                  />
                </td>
                <td>{movie.title}</td>
                <td>{movie.vote_average}</td>
                <td>{movie.release_date}</td>
                <td>
                  <button
                    onClick={() => {
                      removeFavorite(movie.id);
                    }}
                    className="favorite-remove-button"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FavoriteView;