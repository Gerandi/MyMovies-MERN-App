import React, { useState, useEffect } from "react";
import axios from "axios";
import "./favorite-button.scss";

function FavoriteButton({ itemId }) {
  const [isLoading, setLoading] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [token,setToken] = useState(localStorage.getItem("jwt"))
  
 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/favorites/${itemId}`);
        setFavorite(response.data.isFavorite);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [itemId]);

  async function handleClick() {
    setLoading(true);
    try {
      const response = await axios.post(`/api/favorites/${itemId}`, {
        isFavorite: !isFavorite
      });
      setFavorite(response.data.isFavorite);
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
