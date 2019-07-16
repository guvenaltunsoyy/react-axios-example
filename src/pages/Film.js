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
        // console.log(film.data);
        
    }
    

    render() {
        return (
            <div>
                <h1>merhaba</h1>
                <FilmDetail film={JSON.stringify(this.state.film)}/>
            </div>
        );
    }
} export default Film;