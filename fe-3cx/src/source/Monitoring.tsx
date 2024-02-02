export default function Monitoring() {
    return (
        <div>
            <div
                className="modal fade"
                id="followup"
                tabIndex={-1}
                aria-labelledby="followupLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Follow Up
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="row mt-2">
                                <div className="col-12">
                                    <select name="" id="" className="form-select">
                                        <option value="" hidden selected>
                                            Source Institution
                                        </option>
                                        <option value=""> Payor </option>
                                        <option value=""> Provider </option>
                                        <option value=""> Corporate </option>
                                        <option value=""> Broker </option>
                                        <option value=""> Family </option>
                                        <option value=""> Member </option>
                                        <option value=""> Others </option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <textarea
                                        name=""
                                        className="form-control"
                                        id=""
                                        cols={30}
                                        rows={3}
                                        placeholder="Remarks"
                                    ></textarea>
                                </div>
                                <div className="col-6">
                                    <textarea
                                        name=""
                                        className="form-control"
                                        id=""
                                        cols={30}
                                        rows={3}
                                        placeholder="Response"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="viewSolution"
                tabIndex={-1}
                aria-labelledby="viewSolutionLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                View Solution
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Institution</th>
                                            <th>Remarks</th>
                                            <th>Response</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Provider
                                            </td>
                                            <td>jangan tidur</td>
                                            <td>oke</td>
                                            <td>In Progress</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-warning">In Progress</button>
                            <button className="btn btn-success">Done</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <h6>Filter By :</h6>
                <div className="row mb-2">
                    <div className="col-4">
                        <input type="text" placeholder="Transaction ID" className="form-control" />
                    </div>
                    <div className="col-4">
                        <input type="text" placeholder="No Card" className="form-control" />
                    </div>
                    <div className="col-4">
                        <input type="text" placeholder="Provider" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="">Start</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="">End</label>
                        <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-success">Submit</button>
                </div>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Transaction ID</th>
                            <th>Card No</th>
                            <th>Caller Name</th>
                            <th>Transaction Date</th>
                            <th>Time</th>
                            <th>Close Date</th>
                            <th>Time</th>
                            <th>Mobile No</th>
                            <th>Data Type</th>
                            <th>Provider</th>
                            <th>Status</th>
                            <th>User</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>202410293012</td>
                            <td>8000123456789</td>
                            <td>Dwi Arya Putra</td>
                            <td>2024-09-01</td>
                            <td>20:00</td>
                            <td>2024-09-04</td>
                            <td>20:00</td>
                            <td>085714862846</td>
                            <td>Non Medis</td>
                            <td>RS Medistra</td>
                            <td>Closed</td>
                            <td>Syahri</td>
                            <td>

                                <button className="btn btn-success btn-sm me-1" data-bs-target="#followup" data-bs-toggle="modal">
                                    Follow Up
                                </button>

                                {/* isi dari follow up */}
                                <button className="btn btn-success btn-sm" data-bs-target="#viewSolution" data-bs-toggle="modal">
                                    View Solution
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
