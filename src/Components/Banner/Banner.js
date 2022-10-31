import React, { useEffect, useState } from 'react'
import axios from 'axios';
import baseUrl from '../../config/axios';
import "./Banner.css";
import requests from '../../config/requests';
const baseImageUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [bannerMovie,setBannerMovie] = useState();
    const [loaded, setBannerLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${baseUrl }/${requests.fetchPopular}`);

            console.log(request.data.results[0]);
            setBannerMovie(request.data.results[0]);
            setBannerLoaded(true);
        }
        fetchData();
     
    },[loaded])
    console.log(bannerMovie);
  return (
    <>
        {loaded ? (
            <header className='banner' style={{backgroundSize:"cover",backgroundImage:`url(${baseImageUrl}/${bannerMovie.backdrop_path})`,backgroundPosition:"center center"}}>
            <div className="banner__contents">
            <h1 className='banner__title'>
                
                {bannerMovie.original_title}
            </h1>
            {/* div > 2buttons  */}
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            {/* description */}
            <div className="banner__description">{bannerMovie.overview}</div>
        </div> 
        <div className='banner__fadeBottom' />
        </header>
        ):(<div>
            Loading...
        </div>)}
        
  
    </>
  )
}

export default Banner