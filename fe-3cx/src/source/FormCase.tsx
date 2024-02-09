import { useState } from "react";

export default function FormCase() {
    const [cardNo, setCardno] = useState(true);
    const isCardno = () => {
        setCardno(!cardNo);
    };
    return (
        <div>
            {/* MODALS HISTORY CALL*/}
            <div
                className="modal fade"
                id="historycall"
                tabIndex={-1}
                aria-labelledby="historycallLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="historycallLabel">
                                History Call
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Transaction Id</th>
                                            <th>Transaction Date</th>
                                            <th>Close Date</th>
                                            <th>Mobile Number</th>
                                            <th>Data Type</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>0909090909</td>
                                            <td>2024-01-29</td>
                                            <td>2024-01-29</td>
                                            <td>085714862846</td>
                                            <td>NON MEDIS</td>
                                            <td>INQUIRY</td>
                                            <td>CLOSE</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>023482131</td>
                                            <td></td>
                                            <td>2024-01-29</td>
                                            <td>082114361948</td>
                                            <td>NON MEDIS</td>
                                            <td>INQUIRY</td>
                                            <td>IN PROGRESS</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="createcase"
                tabIndex={-1}
                aria-labelledby="createcaseLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h4>Do you want to close this case?</h4>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-warning">In Progress</button>
                            <button className="btn btn-success">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#historycall"
                className="btn btn-danger btn-sm"
            >
                History Call
            </button>

            <div className="form-group">
                <h6>Caller Profile</h6>
                <div className="row">
                    <div className="col-6">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Caller Name"
                            className="form-control"
                        />
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Phone Number"
                            className="form-control"
                        />
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    Have a card number?
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            onChange={isCardno}
                            checked={cardNo}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Ya
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            onChange={isCardno}
                            checked={!cardNo}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Tidak
                        </label>
                    </div>
                </div>
                {cardNo ? (
                    <div className="col-12">
                        <input type="text" className="form-control" placeholder="CardNo" />
                    </div>
                ) : (
                    ""
                )}

                <div className="row mt-3">
                    <div className="col-12">
                        <input type="text" placeholder="ClaimId" className="form-control" />
                    </div>
                </div>

                <div className="row mt-3">
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
                <div className="form-group mt-3">
                    <h6>Transaction Info</h6>
                    <div className="row">
                        <div className="col-4">
                            <select className="form-select" name="" id="">
                                <option value="">Category</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-select" name="" id="">
                                <option value="">Data Type</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-select" name="" id="">
                                <option value="">Detail Category</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {/* jika Source Institution nya === provider */}
                        <div className="col-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Provider jika source institution nya Provider Search by Provider master"
                            />
                        </div>
                        {/*  */}

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

                    <div className="button mt-3">
                        <button
                            className="btn btn-primary"
                            data-bs-target="#createcase"
                            data-bs-toggle="modal"
                        >
                            Create Case
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
