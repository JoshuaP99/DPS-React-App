import '../dpsstyles.css';
import RoleTypeIcon from '../svg/Role Type-Icon.svg'
import HelpPositionIcon from '../svg/help-positions-icon.svg'
import AreaOfFocusIcon from '../svg/Areas of Focus-Icon.svg'
import HelpIcon from '../svg/help-icon.svg'
import AreaOfFocus from './AreaOfFocus'
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(props){
    return(
        <h1>{props.name}</h1>
    )
}

const Navigation = () => {
    return (
        <Navbar bg="transparent" variant="light" expand="lg" fixed="top">
            <Container>
                <Header name="DPS Org Chart"/>
            </Container>
            <Nav className="justify-content-end">
                <Nav.Link href="#home" className="nav-link"><img src={HelpPositionIcon} className="link-icon"/>Employees</Nav.Link>
                <Nav.Link href="#features" className="nav-link"><img src={RoleTypeIcon} className="link-icon"/>Role Types</Nav.Link>
                <Nav.Link href="#pricing" className="nav-link"><img src={AreaOfFocusIcon} className="link-icon"/>Area of Focus</Nav.Link>
                <Nav.Link type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src={HelpIcon} className="link-icon"/></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation