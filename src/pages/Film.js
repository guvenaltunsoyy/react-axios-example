import React from 'react';
import FilmDetail from '../components/FilmDetail';
import axios from 'axios'

class Film extends React.Component {
    state = {
        film: {}
    };

     async componentDidMount() {
        const film = await axios.get('https://swapi.co/api/films/'+(this.props.match.params.filmID));        
        this.setState({ film: film.data });        
    }
    

    render() {
        return (
            <div>
                {
                    Object.values(this.state.film).length > 0 && <FilmDetail film={this.state.film}/>
                }
                
            </div>
        );
    }
} export default Film;