import { Container, Row, Col } from 'react-bootstrap';
import IndividualizedPathwaySVG from "./IndividualizedPathwaySVG"
import CardBody from './CardBody';

const IndividualizedPathway = ({title, body}) => {
    return (
        <>
            <div>
                <h1>Employees</h1>
            </div>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col lg="6">
                        <IndividualizedPathwaySVG style={{ width: '50vw' }} />            
                    </Col>
                    <Col lg="6" style={{ padding: '8rem' }}>
                        <CardBody 
                            title = {title}
                            body ={body}
                            link = "#learnMoreBackdrop"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default IndividualizedPathway