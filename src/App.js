import { useEffect } from "react";
import "./App.css";
import SearchIcon from './search.svg'
// 26233365
const API_URL = `http://www.omdbapi.com?apikey=26233365`;
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    searchMovies("Godzilla");
  }, []);
  return (
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input 
            placeholder="Search for movies"
            value="Superman"
            type="text" />
            <img
            src={SearchIcon}
            alt='search'
            onClick={() => {}}
            />
        </div>
        <div className="container">
            <div className="mov">
                <div>
                    <p>Movie Year</p>
                </div>
                <div>
                    <img src={Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt="" />
                </div>
                <div>
                    <span>{movie1.Type}</span>
                    <h3>{movie1.Title}</h3>
                </div>
            </div>
        </div>
    </div>
  )
};
export default App;
