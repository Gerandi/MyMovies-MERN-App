import axios from 'axios';
import React, { useEffect } from 'react';

const FavoriteView = () => {
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/343611?api_key=16fbaa0e8bf2debb209f0e3dfdbe8290').then(res=>{console.log(res,"ress")})
    })
    return (
        
        <div>
            testttt
        </div>
    );
};

export default FavoriteView;