import './ChildReceiver.css';

function ChildReceiver({parentResult}) {
    return (
        <div className="ChildReceiver">
            <h2>ChildReceiver</h2>
            <p><i>{parentResult != null ? 'Activity received by ChildReceiver from Parent:' : null}</i></p>
            <h3><i>{parentResult}{parentResult != null ? '!' : null}</i></h3>
            <br></br>
        </div>
    )
}

export default ChildReceiver;
