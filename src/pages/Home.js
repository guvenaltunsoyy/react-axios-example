import React from 'react';
import axios from 'axios';
import FilmItem from '../components/FilmItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomePage extends React.Component {
    state = {
        films: []
    };

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/films/');
        this.setState({ films: response.data.results });
        console.log(response.data.results);

    }
    render() {
        const { films } = this.state;
        return (
            <Container>
                <Row sm={3}>
                    {films.map((film, index) =>
                        <Col key={index} md={4} style={{ margin: 5 }}><FilmItem key={index} film={film} /></Col>
                    )}
                </Row>
            </Container>
        );
    }
}
export default HomePage;