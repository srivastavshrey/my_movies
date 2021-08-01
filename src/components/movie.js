import React from 'react'
import store from '../store';

const Movie = ({name,poster,rating,id}) => {

    const addtofavs = ()=>{
        store.dispatch({
            type:"ADD_TO_FAVOURITE",
            payload:{id:id,poster:`http://image.tmdb.org/t/p/w500${poster}`,name:name,rating: rating}
          })

          
    }
    
  
  
    return (
        <div style={{maxWidth:"fit-content",textAlign:'center',}}  >
            <img width="75%" src={`http://image.tmdb.org/t/p/w500${poster}`} />
            <h3>{name}</h3>
            <p>Rating: {rating}/10</p>  
            <p onClick={addtofavs} >Add to Favourite</p>   
        </div>
    )
}

export default Movie;
