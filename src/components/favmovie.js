import React from 'react'
import store from '../store';

const Favmovie = ({name,poster,rating,id}) => {

    const removefromfavs = ()=>{
        store.dispatch({
            type:"REMOVE_FROM_FAVOURITE",
            payload:{
                id:id,
            }
          })
    }
    
  

    return (
        <div style={{maxWidth:"fit-content",textAlign:'center',}}  >
            <img width="75%" src={`http://image.tmdb.org/t/p/w500${poster}`} />
            <h3>{name}</h3>
            <p>Rating: {rating}/10</p>  
            <p onClick={removefromfavs} >Remove from Favourite</p>   
        </div>
    )
}

export default Favmovie;
