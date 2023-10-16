import React, { useState } from 'react';
import Person from './Person.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PersonTable() {
    const myEmptyPerson = new Person('', '', 0);
    const [myPeople, setMyPeople] = useState([new Person('Boo','Foo', 104), new Person('John','Doe', 53), new Person('Petar','Totev', 33), new Person('Johnny','Cash', 69)]);
    const [myPerson, setMyPerson] = useState(myEmptyPerson);

    function removePersonByIndex(index) {
        let myPeopleLocal = [...myPeople];
        myPeopleLocal.splice(index,1);
        setMyPeople(myPeopleLocal);
    }

    function handleFormSubmit(event) {
        let myPeopleLocal = [...myPeople];
        myPeopleLocal.push(new Person(myPerson.firstName, myPerson.lastName, myPerson.age));
        setMyPerson(myEmptyPerson);
        setMyPeople(myPeopleLocal);
        event.preventDefault();
    }

    function isFormFilledIn() {
        return myPerson.firstName !== null && myPerson.firstName !== '' && myPerson.firstName !== ' '
            && myPerson.lastName !== null && myPerson.lastName !== '' && myPerson.lastName !== ' ' 
            && myPerson.age > 0;
    }

    function isNullOrWhiteSpace(text) {
        return text === null || text === '' || text === ' ';
    }

    function isNullOrNonPositive(num) {
        return num === null || num < 1;
    }

    return (
        <div className="bg-dark text-light">
            <h6 className="display-6 d-flex justify-content-center">PersonTable</h6>
            <div className="bg-secondary m-3 p-3">
                <form className="d-flex justify-content-center" onSubmit={(e) => handleFormSubmit(e)}>
                    <label>First Name&nbsp;
                        <input type="text" value={myPerson.firstName} onChange={(e) => setMyPerson({...myPerson, firstName: e.target.value})} />&nbsp;
                    </label>
                    <label>Last Name&nbsp;
                        <input type="text" value={myPerson.lastName} onChange={(e) => setMyPerson({...myPerson, lastName: e.target.value})} />&nbsp;
                    </label>
                    <label>Age&nbsp;
                        <input type="number" value={myPerson.age} onChange={(e) => setMyPerson({...myPerson, age: e.target.value})} />
                    </label>
                	<input type="submit" value="Submit" className="btn btn-sm btn-light text-dark rounded-pill ms-2" disabled={isFormFilledIn() ? "" : "disabled"}/>
                </form>
                {isNullOrWhiteSpace(myPerson.firstName) ? <small className="text-danger">Add a valid string for first name!<br /></small> : <></>}
                {isNullOrWhiteSpace(myPerson.lastName) ? <small className="text-danger">Add a valid string for last name!<br /></small> : <></>}
                {isNullOrNonPositive(myPerson.age) ? <small className="text-danger">Add a positive number for age!<br /></small> : <></>}
            </div>
            <table className="table table-striped table-dark text-warning">
                <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">
                        <button onClick={() => setMyPeople([...myPeople].sort((a,b) => a.firstName > b.firstName ? 1 : -1))} className="btn btn-sm text-light" disabled={myPeople === null || myPeople.length < 2}>
                            <FontAwesomeIcon icon="fa-caret-down" />
                        </button>
                        First Name
                        <button onClick={() => setMyPeople([...myPeople].sort((a,b) => a.firstName > b.firstName ? -1 : 1))} className="btn btn-sm text-light" disabled={myPeople === null || myPeople.length < 2}>
                            <FontAwesomeIcon icon="fa-caret-up" />
                        </button>
                      </th>
                      <th scope="col">
                        <button onClick={() => setMyPeople([...myPeople].sort((a,b) => a.lastName > b.lastName ? 1 : -1))} className="btn btn-sm text-light" disabled={myPeople === null || myPeople.length < 2}>
                            <FontAwesomeIcon icon="fa-caret-down" />
                        </button>
                        Last Name
                        <button onClick={() => setMyPeople([...myPeople].sort((a,b) => a.lastName > b.lastName ? -1 : 1))} className="btn btn-sm text-light" disabled={myPeople === null || myPeople.length < 2}>
                            <FontAwesomeIcon icon="fa-caret-up" />
                        </button>
                      </th>
                      <th scope="col">
                        <button onClick={() => setMyPeople([...myPeople].sort((a,b) => a.age > b.age ? 1 : -1))} className="btn btn-sm text-light" disabled={myPeople === null || myPeople.length < 2}>
                            <FontAwesomeIcon icon="fa-caret-down" />
                        </button>
                        Age
                        <button onClick={() => setMyPeople([...myPeople].sort((a,b) => a.age > b.age ? -1 : 1))} className="btn btn-sm text-light" disabled={myPeople === null || myPeople.length < 2}>
                            <FontAwesomeIcon icon="fa-caret-up" />
                        </button>
                      </th>
                      <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {myPeople != null && myPeople.length > 0 ? myPeople.sort((a,b) => parseInt(a.age) - parseInt(b.age)).map((x, index) => <tr key={index}><th scope="row">{index + 1}</th><td>{x.firstName}</td><td>{x.lastName}</td><td>{x.age}</td><td><button className="btn btn-sm rounded-pill btn-danger ms-1" onClick={() => removePersonByIndex(index)}><FontAwesomeIcon icon="fa-trash" /></button></td></tr>) : null} */}
                    {myPeople != null && myPeople.length > 0 ? myPeople.map((x, index) => <tr key={index}><th scope="row">{index + 1}</th><td>{x.firstName}</td><td>{x.lastName}</td><td>{x.age}</td><td><button className="btn btn-sm rounded-pill btn-danger ms-1" onClick={() => removePersonByIndex(index)}><FontAwesomeIcon icon="fa-trash" /></button></td></tr>) : null}
                </tbody>
            </table>
        </div>
      );
}

export default PersonTable;
