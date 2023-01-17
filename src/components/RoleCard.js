import { Card, Button } from "react-bootstrap"
import { useState } from "react"
import Escape from "../svg/Esc X.svg"
import NewTab from "../svg/opens-new-tab-arrow.svg"


function CardBody({title, body, link}) {
    const [shown, setShown] = useState(0)

    const hide = () => {
        setShown(shown += 0)
    };
    
    return (
        <Card className='textbox' style={{ opacity: {shown} }}>
            <Card.Body>
                <Button style={{ background: "transparent", border: "transparent", cursor: "pointer"}} onClick={hide} ><img src={Escape} className="esc-button"></img></Button>
                <Card.Title><h2>{title}</h2></Card.Title>
                <Card.Text className='card-body'>{body}</Card.Text>
                <br/>
                <Card.Link className="btn btn-primary" role="button" data-bs-toggle="modal" data-bs-target={link}>
                    Learn More<img src={NewTab} style={{ height: "1.2rem", paddingLeft: ".5rem" }} />
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CardBody