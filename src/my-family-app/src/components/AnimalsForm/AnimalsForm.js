import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AnimalsForm() {
    const [myAnimals, setMyAnimals] = useState([]);

    return (
        <div className="bg-secondary text-light mb-3 pb-3">
            <h6 className="display-6 d-flex justify-content-center">AnimalsForm</h6>
            <div className="p-3">
                <label htmlFor="exampleInputAnimal1">Add animal and press ENTER</label>
                <input type="animal" className="form-control" id="exampleInputAnimal1" aria-describedby="AnimalHelp" placeholder="Enter animal" onKeyUp={(event) => { if (event.key === "Enter") {setMyAnimals([...myAnimals].concat([event.target.value])); event.target.value = ''; } }}/>
                <small id="animalHelp" className="form-text text-muted">Please, add a valid animal!</small>
            </div>
            <ul>{myAnimals.map((x, index) => <li key={index}>{x}</li>)}</ul>
            <div className="d-flex justify-content-center">
              <button className="btn btn-lg rounded-pill btn-dark text-light me-1" onClick={() => setMyAnimals([...myAnimals].sort())} disabled={myAnimals === null || myAnimals.length < 2}><FontAwesomeIcon icon="fa-caret-down" /></button>
              <button className="btn btn-lg rounded-pill btn-dark text-light ms-1 me-1" onClick={() => setMyAnimals([...myAnimals].sort().reverse())} disabled={myAnimals === null || myAnimals.length < 2}><FontAwesomeIcon icon="fa-caret-up" /></button>
              <button type="button" className="btn btn-lg rounded-pill btn-danger ms-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" disabled={myAnimals === null || myAnimals.length === 0}><FontAwesomeIcon icon="fa-trash" /></button>
            </div>
            <div className="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Sure?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">Are you sure you want to delete all animals that are currently stored in-memory?</div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger rounded-pill"  data-bs-dismiss="modal" onClick={() => setMyAnimals([])}>RESET</button>
                    <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">CANCEL</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
}

export default AnimalsForm;