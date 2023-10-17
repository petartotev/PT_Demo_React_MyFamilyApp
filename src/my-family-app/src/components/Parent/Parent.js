import './Parent.css';
import ChildReceiver from '../ChildReceiver/ChildReceiver.js';
import ChildGiver from '../ChildGiver/ChildGiver.js';
import ChildHooker from '../ChildHooker/ChildHooker.js';
import React, { useState } from 'react';

function Parent() {
    const [parentValue, setParentValue] = useState();
    const [childGiverNumber, setChildGiverNumber] = useState(-1);

    const buttonHandler = () => {
        getActivityFromBoredApiCom();
    }

    function giveNumberToParent(number) {
        setChildGiverNumber(number);
    }

    function getActivityFromBoredApiCom() {
        fetch('https://www.boredapi.com/api/activity')
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('useEffect did not manage to fetch data from server!');
            }
        })
        .then(data => {
            console.log(data);
            setParentValue(data.activity)
        })
        .catch((err) => {
            console.log(err);
            let activity = getHardcodedActivityFromBoredApiCom();
            setParentValue(activity);
        })
        .finally(() => {});
    }

    function getHardcodedActivityFromBoredApiCom() {
        var activities = [
            '{"activity":"Clean out your refrigerator","type":"busywork","participants":1,"price":0,"link":"","key":"9324336","accessibility":0}',
            '{"activity":"Start a garden","type":"recreational","participants":1,"price":0.3,"link":"","key":"1934228","accessibility":0.35}',
            '{"activity":"Go to the library and find an interesting book","type":"relaxation","participants":1,"price":0.05,"link":"","key":"8253550","accessibility":0.2}',
            '{"activity":"Take a bubble bath","type":"relaxation","participants":1,"price":0.15,"link":"","key":"2581372","accessibility":0.1}',
            '{"activity":"Clean out your car","type":"busywork","participants":1,"price":0,"link":"","key":"2896176","accessibility":0.08}',
            '{"activity":"Wash your car","type":"busywork","participants":1,"price":0.05,"link":"","key":"1017771","accessibility":0.15}',
            '{"activity":"Go on a long drive with no music","type":"relaxation","participants":1,"price":0.1,"link":"","key":"4290333","accessibility":0.2}',
            '{"activity":"Write a poem","type":"recreational","participants":1,"price":0,"link":"","key":"8688620","accessibility":0}',
            '{"activity":"Make a to-do list for your week","type":"busywork","participants":1,"price":0,"link":"","key":"5920481","accessibility":0.05}',
            '{"activity":"Learn Morse code","type":"education","participants":1,"price":0,"link":"https://en.wikipedia.org/wiki/Morse_code","key":"3646173","accessibility":0}'
        ]

        var index = Math.floor(Math.random() * (activities.length - 0)) + 0;
        console.log(index);

        return JSON.parse(activities[index]).activity;
    }

    return (
        <div className="Parent row bg-dark text-light">
            <div className="col-md-12">
                <h1 className="display-1 d-flex justify-content-center">Parent</h1>
                <div className="d-flex justify-content-center">
                    <button onClick={buttonHandler} className="btn btn-lg rounded-pill btn-light text-dark m-3">ACTIVATE!</button>
                </div>
                <hr></hr>
                <p className="d-flex justify-content-center"><i>{childGiverNumber != null && childGiverNumber !== -1 ? 'Random number received from ChildGiver:' : null}</i></p>
                <h3 className="d-flex justify-content-center"><i>{childGiverNumber != null && childGiverNumber !== -1 ? childGiverNumber : null}</i></h3>
                <ChildReceiver parentResult={parentValue} childGiverValue={childGiverNumber} />
                <ChildGiver giveNumberToParent={giveNumberToParent} />
                <ChildHooker />
            </div>
        </div>
    )
}

export default Parent;