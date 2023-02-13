import React, { useState, useEffect } from "react";
import axios from "axios";
import "./favorite-button.scss";

function FavoriteButton({ itemId }) {
  const [isLoading, setLoading] = useState(false);
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(`/api/favorites/${itemId}`);
        setFavorite(response.data.isFavorite);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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
