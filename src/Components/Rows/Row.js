import axios from 'axios';
import React, { useEffect, useState } from 'react'
import baseUrl from '../../config/axios';
import "./Row.css";



const baseImageUrl = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
  const [data,setData] = useState();
  const [loading,isLoading] = useState(false);
  useEffect(()=>{
    async function fetchData() {
      let movies = await axios.get(`${baseUrl}/${fetchUrl}`);
      await setData(movies.data.results);
      isLoading(true);
    }
    fetchData();
  },[fetchUrl]);
 
  return (
    
    <div class="row">
      {loading?(
        <div class="Row__title">
        <h3>{title}</h3>
        <div className="row_posters">
        {data.map(movie => (<img key={movie.id} className={`row__poster ${isLargeRow && "large"}`} src={`${baseImageUrl}/${movie.poster_path}`} />))}
        </div>
      </div>
    
      ):(<pre>loading...</pre>)}

    </div>
  )
}

export default Row