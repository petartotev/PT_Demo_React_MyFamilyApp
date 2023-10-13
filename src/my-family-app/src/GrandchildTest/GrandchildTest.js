import './GrandchildTest.css';
import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import AnimalsForm from '../AnimalsForm/AnimalsForm.js';
import PersonTable from '../PersonTable/PersonTable.js';

function GrandchildTest() {
    const [grandchildTestValue, setGrandchildTestValue] = useState(false);

    return (
        <div className="row bg-warning text-dark m-3">
            <div class="col-md-12 mb-3">
                <h5 class="display-5 d-flex justify-content-center">GrandchildTest</h5>
                {
                    !grandchildTestValue ?
                    <div class="mt-3 mb-3">
                        <p class="d-flex justify-content-center">The spinner below is a ready-to-use Component imported from 'react-bootstrap' library.</p>
                        <div class="d-flex justify-content-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </div> :
                    <></>
                }
                <div class="form-check form-switch d-flex justify-content-center mb-3">
                    <input class="form-check-input btn-lg" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => setGrandchildTestValue(!grandchildTestValue)}></input>
                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                </div>
                <AnimalsForm />
                <PersonTable />
            </div>
        </div>
      );
}

export default GrandchildTest;
