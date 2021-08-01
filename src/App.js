import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Movie from './components/movie';
import store from './store';
import Favmovie from './components/favmovie';


const App = ()=> {
  const [movies,setMovies]=useState([]);
  const[search,setSearch]=useState("");
  const [page,setPage]=useState(false);

 

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2fa337078e1a52b89ef34381a00de949`)
    .then((res)=>{setMovies(res.data.results);console.log(res.data.results)})
    .catch((error) => {
      console.log(error);
    });
   
  }, [])

  const favourites = store.getState();

  const filteredFavourites = favourites.filter( movie=>{
    return movie.name.toLowerCase().includes(search.toLowerCase());
  });



  const handleInput = (e)=>{
    setTimeout(setSearch(e.target.value),2000);
}
 
  const filteredMovie = movies.filter( movie=>{
    return movie.original_title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="App">
      <header className="App-header" style={{display:"flex",justifyContent:"space-between",padding:"2rem"}} >
        <div style={{display:"flex",justifyContent:"space-around"}} >
          <p style={{margin:"0px 5px"}} onClick={()=>{
          setPage(false);
        }} >home</p>
        <p style={{margin:"0px 5px"}} onClick={()=>{
          setPage(true);
        }} >favourites</p>
        </div>
       <input style={{width:"100%",maxWidth:"500px",height:"40px"}} placeholder="Search..." type="text" onChange={handleInput} />
      </header>
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}} >
       { page ? (filteredFavourites.map((favmovie)=>{
         console.log(favmovie.id)
         return <Favmovie key={favmovie.id} name={favmovie.name} poster={favmovie.poster} rating={favmovie.rating}   />
        })) :
       (filteredMovie.map((movie)=>{
         return <Movie key={movie.id} id={movie.id} name={movie.original_title} poster={movie.poster_path} rating={movie.vote_average}  />
        }))}
      </div>
     
    </div>
  );
}

export default App;
