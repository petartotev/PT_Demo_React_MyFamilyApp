import './ChildGiver.css';

function ChildGiver({giveNumberToParent}) {
    var childNumber = 0;

    function setRandomValueToChildNumber() {
        childNumber = Math.round(Math.random() * 100);
        return childNumber;
    }

    return (
        <div className="ChildGiver">
            <h2>ChildGiver</h2>
            <button onClick={() => giveNumberToParent(setRandomValueToChildNumber())}>GENERATE NUMBER</button>
            <br></br>
            <br></br>
        </div>
    )
}

export default ChildGiver;