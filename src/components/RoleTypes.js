import { Container, Row, Col } from 'react-bootstrap';
import RoleTypesSVG from './RoleTypesSVG';
import CardBody from './CardBody';

const IndividualizedPathway = () => {
    return (
        <Container fluid>
            <Row className='align-items-center'>
                <Col lg="6">
                    <RoleTypesSVG style={{ width: '50vw' }} />            
                </Col>
                <Col lg="6" style={{ padding: '8rem' }}>
                    <CardBody 
                        title = "test"
                        body ="Yes show me the good good"
                        link = "#learnMoreBackdrop"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default IndividualizedPathway

