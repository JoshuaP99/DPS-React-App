import { Container, Row, Col, Card } from 'react-bootstrap';
import AreaOfFocusSVG from "./AreaOfFocusSVG"
import Escape from "../svg/Esc X.svg"
import NewTab from "../svg/opens-new-tab-arrow.svg"

const AreaOfFocus = () => {
    return (
        <Container>
            <Row className='align-items-center'>
                <Col lg="6">
                    <AreaOfFocusSVG style={{ width: '50vw' }} />            
                </Col>
                <Col lg="6">
                    <Card className='textbox'>
                        <span className="btn btn-default large"><img src={Escape} className="esc-button"></img></span>
                        <Card.Body className='text-center'>
                            <Card.Title><h2>Area of Focus</h2></Card.Title>
                            <Card.Text className='card-body'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Card.Link className="btn btn-primary" role="button" href="">
                                Show Employees in this Section <img src={NewTab} />
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AreaOfFocus