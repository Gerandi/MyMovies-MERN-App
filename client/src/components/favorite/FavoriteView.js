// todo
// create a vew to view all the favorite items in a table

import React, { useState, useEffect } from "react";
import axios from "axios";


function FavoriteView() {
  const [isLoading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [token,setToken] = useState(localStorage.getItem("jwt"))

  useEffect(() => {
    async function fetchData() {

      setLoading(true);
      try {
        const response = await axios.get(`/api/favorites/`);
        setFavorites(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        if (token !== null){

        setLoading(false);
      }
    }
  }
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Favorite View</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Release Date</th>
            <th scope="col">Vote Average</th>
            <th scope="col">Poster</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite) => (
            <tr key={favorite.id}>
              <td>{favorite.title}</td>
              <td>{favorite.release_date}</td>
              <td>{favorite.vote_average}</td>
              <td><img>{favorite.poster_path}</img></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoriteView;
