const RoleModal = () => {
    return (
        <div className="modal fade" id="expandRoleBackdrop" data-bs-backdrop="info" data-bs-keyboard="false" tabindex="-1" aria-labelledby="expandRoleBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header pb-1">
                        <div className="modal-title ms-0">
                            <h2  id="expandRoleBackdropLabel">
                                Role title
                            </h2>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div id="modal-role-type" className="col-3">
                                    <h6>Role Type: </h6><h6 className="modal-subtitle mb-2">modal aof (aof)</h6>
                                </div>
                                <div id="modal-aof" className="col-3">
                                    <h6>Area of Focus: </h6><h6 className="modal-subtitle mb-2">modal aof (aof)</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div id="card-div">
                                    <div className="modal-summary" id="roleDesc">
                                        Role Summary
                                    </div>
                                    <h3 className="textcollapse" data-bs-toggle="collapse" href="#multi-Collapse1" role="button" aria-expanded="false" aria-controls="multi-Collapse1">Responibilities <i className="bi bi-caret-down"></i></h3>
                                    <div className="collapse multi-collapse role-responsibilities" id="multi-Collapse1">
                                        <div className="role-text">Nothing to display</div>
                                    </div>
                                    <h3 className="textcollapse" data-bs-toggle="collapse" href="#multi-Collapse2" role="button" aria-expanded="false" aria-controls="multi-Collapse2">Education + Experience + Expertise  <i className="bi bi-caret-down"></i></h3>
                                    <div className="collapse multi-collapse role-edu" id="multi-Collapse2">
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

export default RoleModal