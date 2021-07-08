import React from "react"
import axios from "axios"
import Movie from "./Movie"
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //https://yts.mx/api
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=date_added");    
    this.setState({ movies, isLoading: false })
  }
  
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return <div>
      {isLoading 
        ? "Loading.." 
        : movies.map(movie => (
          <Movie 
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.sumary}
            rating={movie.rating}
            poster={movie.medium_cover_image} />
        ))}      
    </div>
  }
}

export default App;
