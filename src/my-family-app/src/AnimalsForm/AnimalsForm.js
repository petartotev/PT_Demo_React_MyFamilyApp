import React, { useState } from 'react';

function AnimalsForm() {
    const [myAnimals, setMyAnimals] = useState([]);

    return (
        <div class="bg-secondary text-light mb-3 pb-3">
            <h6 class="display-6 d-flex justify-content-center">AnimalsForm</h6>
            <div class="form-group p-3">
                <label for="exampleInputAnimal1">Add animal and press ENTER</label>
                <input type="animal" class="form-control" id="exampleInputAnimal1" aria-describedby="AnimalHelp" placeholder="Enter animal" onKeyUp={(event) => { if (event.key === "Enter") {setMyAnimals([...myAnimals].concat([event.target.value])); event.target.value = ''; } }}/>
                <small id="animalHelp" class="form-text text-muted">Please, add a valid animal!</small>
            </div>
            <ul>{myAnimals.map(x => <li>{x}</li>)}</ul>
            <div class="d-flex justify-content-center">
              <button class="btn btn-lg rounded-pill btn-dark text-light me-1" onClick={() => setMyAnimals([...myAnimals].sort())}>SORT</button>
              <button type="button" class="btn btn-lg rounded-pill btn-danger ms-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">RESET</button>
            </div>
            <div class="modal fade text-dark" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Sure?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">Are you sure you want to delete all animals that are currently stored in-memory?</div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger rounded-pill"  data-bs-dismiss="modal" onClick={() => setMyAnimals([])}>RESET</button>
                    <button type="button" class="btn btn-secondary rounded-pill" data-bs-dismiss="modal">CANCEL</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
}

export default AnimalsForm;