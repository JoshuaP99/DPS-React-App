import HelpPositionIcon from '../svg/help-positions-icon.svg';
import RoleTypesIcon from '../svg/Role Type-Icon.svg';
import AreaOfFocusIcon from '../svg/Areas of Focus-Icon.svg';

const HowToModal = () => {
    return (
        <div className="modal fade" id="learnMoreBackdrop" data-bs-backdrop="info" data-bs-keyboard="false" tabIndex="-1"
        aria-labelledby="learnMoreBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title ms-0" id="learnMoreBackdropLabel">
                        Area of Focus + Role Type
                    </h2>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="container-fluid">
                        <div className="row">
                            <div id="card-div">
                                <div className="modal-summary" id="roleTypeDesc">
                                    Nothing to display
                                </div>
                                <h3 className="textcollapse" data-bs-toggle="collapse" href="#multiCollapse1" role="button" aria-expanded="false" aria-controls="multiCollapse1">CHARGE <i className="bi bi-caret-down"></i>
                                </h3>
                                <div className="collapse multi-collapse role-charge" id="multiCollapse1">
                                    <div className="role-text">Nothing to display</div>
                                </div>
                                <h3 className="textcollapse" data-bs-toggle="collapse" href="#multiCollapse2" role="button" aria-expanded="false" aria-controls="multiCollapse2">SCOPE <i className="bi bi-caret-down"></i></h3>
                                <div className="collapse multi-collapse role-scope" id="multiCollapse2">
                                    <div className="role-text">Nothing to display</div>
                                </div>
                                <h3 className="textcollapse" data-bs-toggle="collapse" href="#multiCollapse3" role="button" aria-expanded="false" aria-controls="multiCollapse3">FORECASTING <i className="bi bi-caret-down"></i></h3>
                                <div className="collapse multi-collapse role-forecast" id="multiCollapse3">
                                    <div className="role-text">Nothing to display</div>
                                </div>
                                <h3 className="d-flex align-items-center textcollapse" data-bs-toggle="collapse" href="#multiCollapse4" role="button" aria-expanded="false" aria-controls="multiCollapse4">COMMUNICATION + RESPONSIBILITY <i className="bi bi-caret-down"></i></h3>
                                <div className="collapse multi-collapse role-comm" id="multiCollapse4">
                                    <div className="role-text">Nothing to display</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HowToModal