import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    title: this.props.title,
    image: this.props.image,
    description: this.props.description,
    pelicula:[]
  }

  componentWillMount(){
    fetch('https://api.themoviedb.org/3/genre/28/movies?api_key=973d52551ddad630f72f4c633694ee36&language=en-US&include_adult=false&sort_by=created_at.asc')
    .then(r=>r.json())
    .then(pelicula=>{
      this.setState({pelicula:pelicula.results})
    })
    fetch('https://api.themoviedb.org/3/movie/550?api_key=973d52551ddad630f72f4c633694ee36')
    .then(r=>r.json())
    .then(pelicula=>{
      this.setState({pelicula:pelicula.results})
    })
  }
  
  render(){
    const link = 'https://image.tmdb.org/t/p/w500/';
    return(
      <div className="moviesInfo">
        <a onClick={this.searchMovie} href="#">Action</a>
        <a href="#">Comedy</a>
        <a href="#">Drama</a>
        <div className="movies">
        <img src="" alt=""/>
        {this.state.pelicula.map(m=>{
          return (   
  
            <p> 
          <h2>{m.original_title}</h2>
            <p>{m.overview}</p>
          <img src= {link + m.poster_path} />
          </p>
          )
        })}
        </div>
      </div>
    )
  }
}

export default App;
