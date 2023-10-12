import React, { useState } from 'react';
import Person from './Person.js';

function PersonTable() {
    const myPeople = [new Person('Petar','Totev', 33), new Person('John','Doe', 22), new Person('Johnny','Cash', 69)];

    return (
        <div class="bg-dark text-light">
            <h2 class="display-6 d-flex justify-content-center">PersonTable</h2>
            <table class="table table-striped table-dark text-warning">
                <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {myPeople != null && myPeople.length > 0 ? myPeople.sort((a,b) => parseInt(a.age) - parseInt(b.age)).map((x, index) => <tr><th scope="row">{index + 1}</th><td>{x.firstName}</td><td>{x.lastName}</td><td>{x.age}</td></tr>) : null}
                </tbody>
            </table>
        </div>
      );
}

export default PersonTable;