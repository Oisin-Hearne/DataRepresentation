//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

//Displays the book passed to this component in a nice card.
//DIsplays the thumbnail, title and authors.
function BookItem(props) {
    return (
        <div style={{marginTop: "20px", marginLeft: "20px"}}>
            <Card style={{width: '250px'}}>
                <Card.Img variant="top" src={props.b.thumbnailUrl} style={{height:"250px", width:"250px"}}/>
                <Card.Body>
                    <Card.Title>{props.b.title}</Card.Title>
                    <Card.Text>
                        {props.b.authors}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItem;