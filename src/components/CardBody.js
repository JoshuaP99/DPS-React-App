import { Card } from "react-bootstrap"
import Escape from "../svg/Esc X.svg"
import NewTab from "../svg/opens-new-tab-arrow.svg"

function CardBody({title, body, link}) {
    return (
        <Card className='textbox'>
            <span><img src={Escape} className="esc-button"></img></span>
            <Card.Body className='text-center'>
                <Card.Title><h2>{title}</h2></Card.Title>
                <Card.Text className='card-body'>{body}</Card.Text>
                <Card.Link className="btn btn-primary" role="button" data-bs-toggle="modal" data-bs-target={link}>
                    Learn More<img src={NewTab} />
                </Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardBody