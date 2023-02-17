import React, { useState, useEffect } from "react";
import axios from "axios";
import "./favorite-button.scss";

function FavoriteButton(props) {
  const [favorite, setFavorite] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8000/api/favorites/${props.movieId}`);
        setFavorite(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [props.movieId]);

  const addFavorite = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/favorites/${props.movieId}`);
      setFavorite(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/favorites/${props.movieId}`);
      setFavorite(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {favorite ? (
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={removeFavorite}
        >
          <i className="bi bi-suit-heart-fill"></i>
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={addFavorite}
        >
          <i className="bi bi-suit-heart"></i>
        </button>
      )}
    </div>
  );
}

export default FavoriteButton;
