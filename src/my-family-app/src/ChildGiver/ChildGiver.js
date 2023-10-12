import './ChildGiver.css';
import GrandchildTest from '../GrandchildTest/GrandchildTest.js';

function ChildGiver({giveNumberToParent}) {
    var childNumber = 0;

    function setRandomValueToChildNumber() {
        childNumber = Math.round(Math.random() * 100);
        return childNumber;
    }

    return (
        <div className="ChildGiver" class="row bg-info text-light m-3">
            <div class="col-md-12">
                <h2 class="display-4 d-flex justify-content-center">ChildGiver</h2>
                <div class="d-flex justify-content-center">
                    <button onClick={() => giveNumberToParent(setRandomValueToChildNumber())} class="btn btn-lg rounded-pill btn-light text-info ">GENERATE NUMBER</button>
                </div>
                <GrandchildTest />
            </div>
        </div>
    )
}

export default ChildGiver;