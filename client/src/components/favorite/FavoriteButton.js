import React, { useState, useEffect } from "react";
import axios from "axios";
import "./favorite-button.scss";

function FavoriteButton({ movieId }) {
  const [isLoading, setLoading] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [token,setToken] = useState(localStorage.getItem("jwt"))
  
 
  useEffect(() => {
    async function fetchData() {

      setLoading(true);
      try {
        const response = await axios.get(`/api/favorites/${movieId}`);
        setFavorite(response.data.isFavorite);
      } catch (error) {
        console.error(error);
      } finally {
        if (token !== null){

        setLoading(false);
      }
    }
  }
    fetchData();
  }, [movieId]);

  async function handleClick() {
    console.log(movieId,"itemid")
    setLoading(true);
    try {
      const response = await localStorage.setItem('movies',JSON.stringify( movieId));
      // setFavorite(response.data.isFavorite);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className={`btn btn-sm favorite-button ${isLoading ? "loading" : ""}`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <i className="bi bi-spinner-fill "></i>
      ) : (
        <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`} />
      )}
      Favorite
    </button>
  );
}

export default FavoriteButton;
