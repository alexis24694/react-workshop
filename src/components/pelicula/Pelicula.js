import React from 'react'

const Pelicula = ({ movie }) => {
  return (
    <div style={{width : '200px', display : 'inline-block', textAlign : 'center', margin : '50px'}}>      
      <img src={movie.images.posterArt.url} style={{width : '200px'}}/>
      <h2>{movie.title}</h2>
    </div>
  )
};

export default Pelicula