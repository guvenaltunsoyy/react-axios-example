import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import FilmName from './FilmName';

class FilmDetail extends React.Component {
    render() {
        let { film } = this.props;
        film = JSON.parse(film);
        let urls = [];
        urls = film.characters;


        return (
            <Container>
                <Card className="text-center">
                    <Card.Header>{film.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>HEY</Card.Title>
                        {
                            urls ? urls.map((url, index) => {
                                this.getCharacterName(url)
                            }) : console.log("wait")
                        }
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </Container>

        );
    }

    getCharacterName = function (url) {
        try {
            axios.get(url).then(response => {
                console.log(response.data.name);
                return response.data.name;
            }).catch((error) => console.log(error)
            );
            //return response.data.name.toString();
        } catch (error) {
            console.log(error);

        }
    }
} export default FilmDetail;