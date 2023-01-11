import Escape from "../svg/Esc X.svg"
import NewTab from "../svg/opens-new-tab-arrow.svg"

const Card = () => {
    return (
        <div className="card-body" id="card-div">
            <p className="card-body">Test Text</p>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <a target="_blank" rel="noopener noreferrer" href="">
                            <button className="btn btn-primary" role="button">
                                Show Employees in this Section <img src={NewTab}></img>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card