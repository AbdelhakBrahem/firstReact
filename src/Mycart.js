import {Card,Button} from 'react-bootstrap'
function Mycart() {
    return (

        <div className="Mycart">
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title>First app React</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
        </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Mycart;