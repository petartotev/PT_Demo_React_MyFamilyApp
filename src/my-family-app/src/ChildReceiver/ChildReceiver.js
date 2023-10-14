import './ChildReceiver.css';

function ChildReceiver({parentResult,childGiverValue}) {
    return (
        <div className="ChildReceiver row bg-primary text-light m-3">
            <div className="col-md-12">
                <h4 className="display-4 d-flex justify-content-center">ChildReceiver</h4>
                <p className="d-flex justify-content-center"><i>{parentResult != null ? 'Activity received from Parent:' : null}</i></p>
                <h3 className="d-flex justify-content-center"><i>{parentResult}{parentResult != null ? '!' : null}</i></h3>
                <hr></hr>
                <p className="d-flex justify-content-center"><i>{childGiverValue != null && childGiverValue !== -1 ? 'Random number received from ChildGiver:' : null}</i></p>
                <h3 className="d-flex justify-content-center"><i>{childGiverValue != null && childGiverValue !== -1 ? childGiverValue : null}</i></h3>
            </div>
        </div>
    )
}

export default ChildReceiver;
