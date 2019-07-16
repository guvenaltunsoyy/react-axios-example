import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class FilmItem extends React.Component {
    render() {
        const { film } = this.props;
        // console.log(film);
        const filmID=film.url.split("/")[5];
        // console.log(filmID);
        

        return (
            <div className='container'>
                <Card>
                    <Card.Body>
                        <Card.Title>{film.title}</Card.Title>
                        <hr />
                        <Card.Text>
                            {
                                film.opening_crawl
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                       <Button variant='outline-secondary' href={'/film/'+filmID}>Film Detayına Git</Button>
                       </Card.Body>
                </Card>
            </div>
        );
    }
} export default FilmItem;