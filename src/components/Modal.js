import HelpPositionIcon from '../svg/help-positions-icon.svg';
import RoleTypesIcon from '../svg/Role Type-Icon.svg';
import AreaOfFocusIcon from '../svg/Areas of Focus-Icon.svg';

const Modal = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">How to use the chart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col justify-content-center">
                                <img src={HelpPositionIcon} className="modal-img"></img>
                                <br></br><p className="card-body">On the "Employee Positions" page, circles represent a role and a
                                                            circle with a number inside of it representes a list of roles too large
                                                            too fit within this visualization. Hover over any role to see it's title,
                                                            and click to learn more! <strong>Use the search bar at the top to filter by studio,
                                                            name, people, etc.</strong></p>
                            </div>
                            <div className="col justify-content-center">
                                <img src={RoleTypesIcon} className="modal-img"></img>
                                <br></br><p className="card-body">The "Role Types" page is where you go to understand the Charge, Scope, Forecasting, and Communication responibilities
                                                            for different types of roles. Click on any ring of this visualization to learn more about the new role types!
                                </p>
                            </div>
                            <div className="col justify-content-center">
                                <img src={AreaOfFocusIcon} className="modal-img"></img>
                                <br></br><p className="card-body">The "Areas of Focus" page is where you go to get an overview of the different specialties that one may pursue.
                                                            click on any of the titles, or within an Area of Focus to learn more!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Got It!</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Modal