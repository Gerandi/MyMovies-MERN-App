import React, { useState, useEffect } from "react";
import axios from "axios";
import "./favorite-button.scss";

<<<<<<< HEAD
function FavoriteButton(props) {
  const [favorite, setFavorite] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt"));

=======
function FavoriteButton({ movieId }) {
  const [isLoading, setLoading] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [token,setToken] = useState(localStorage.getItem("jwt"))
  
 
>>>>>>> 7b15585d5ca8af2713bf6cc3b7efcea227d1c2cc
  useEffect(() => {
    async function fetchData() {
      try {
<<<<<<< HEAD
        const response = await axios.get(`http://localhost:8000/api/favorites/${props.movieId}`);
        setFavorite(response.data);
=======
        const response = await axios.get(`/api/favorites/${movieId}`);
        setFavorite(response.data.isFavorite);
>>>>>>> 7b15585d5ca8af2713bf6cc3b7efcea227d1c2cc
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
<<<<<<< HEAD
  }, [props.movieId]);

  const addFavorite = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/api/favorites/${props.movieId}`);
      setFavorite(response.data);
=======
  }, [movieId]);

  async function handleClick() {
    console.log(movieId,"itemid")
    setLoading(true);
    try {
      const response = await localStorage.setItem('movies',JSON.stringify( movieId));
      // setFavorite(response.data.isFavorite);
>>>>>>> 7b15585d5ca8af2713bf6cc3b7efcea227d1c2cc
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
