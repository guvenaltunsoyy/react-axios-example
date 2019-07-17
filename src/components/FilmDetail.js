import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

class FilmDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount(){
        const urls = this.props.film.characters;
        urls.forEach(url => {
            axios.get(url).then(response => {
                this.state.list.push(response.data.name)
                this.setState({
                    list: this.state.list
                });
            }).catch((error) => console.log(error));
        });
    }
    render() {
        return (
            <Container>
                <Card className="text-center">
                    <Card.Header><h2>{this.props.film.title}</h2></Card.Header>
                    <Card.Body>
                        <Card.Title>Oyuncular</Card.Title>
                        {
                            this.state.list.map((v,key) => {
                                return <Card.Text key={key}>{v}</Card.Text>
                            })
                        }
                        <Button variant="primary" href="/home">Go Home</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </Container>
        );
    }

} export default FilmDetail;