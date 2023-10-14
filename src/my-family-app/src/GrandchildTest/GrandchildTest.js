import './GrandchildTest.css';
import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import AnimalsForm from '../AnimalsForm/AnimalsForm.js';
import PersonTable from '../PersonTable/PersonTable.js';

function GrandchildTest() {
    const [grandchildTestValue, setGrandchildTestValue] = useState(false);

    return (
        <div className="row bg-warning text-dark m-3">
            <div className="col-md-12 mb-3">
                <h5 className="display-5 d-flex justify-content-center">GrandchildTest</h5>
                {
                    !grandchildTestValue ?
                    <div className="mt-3 mb-3">
                        <p className="d-flex justify-content-center">The spinner below is a ready-to-use Component imported from 'react-bootstrap' library.</p>
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </div> :
                    <></>
                }
                <div className="form-check form-switch d-flex justify-content-center mb-3">
                    <input className="form-check-input btn-lg" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => setGrandchildTestValue(!grandchildTestValue)}></input>
                    <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
                <AnimalsForm />
                <PersonTable />
            </div>
        </div>
      );
}

export default GrandchildTest;
