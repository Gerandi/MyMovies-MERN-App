import React, { useState } from 'react';
import axios from 'axios';

const Favorite = ({ isFavorited, movieId }) => {
  const [isFavorite, setIsFavorite] = useState(isFavorited);

  const handleFavorite = async () => {
    try {
      const method = isFavorite ? 'delete' : 'post';
      const response = await axios[method](`/api/favorites`, {
        data: {
          movieId
        }
      });

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="" onClick={handleFavorite}>
      <i className={`bi bi-heart${isFavorite ? '-fill' : ''}`}></i>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  );
};

export default Favorite;
