import { Container, Row, Col, Card, Button, CloseButton } from 'react-bootstrap';
import IndividualizedPathwaySVG from "./IndividualizedPathwaySVG"
import Escape from "../svg/Esc X.svg"
import NewTab from "../svg/opens-new-tab-arrow.svg"


function CardBody({title, body, link}) {
    return (
        <Card className='textbox'>
            <Button><img src={Escape} className="esc-button"></img></Button>
            <Card.Body className='text-center'>
                <Card.Title><h2>{title}</h2></Card.Title>
                <Card.Text className='card-body'>{body}</Card.Text>
                <Card.Link className="btn btn-primary" role="button" href={link}>
                    Show Employees in this Section <img src={NewTab} />
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

const IndividualizedPathway = () => {
    return (
        <Container fluid>
            <Row className='align-items-center'>
                <Col lg="6">
                    <IndividualizedPathwaySVG style={{ width: '50vw' }} />            
                </Col>
                <Col lg="6" style={{ padding: '8rem' }}>
                    <CardBody />
                </Col>
            </Row>
        </Container>
    );
}

export default IndividualizedPathway