import './ChildReceiver.css';

function ChildReceiver({parentResult}) {
    return (
        <div className="ChildReceiver" class="row bg-primary text-light m-3">
            <div class="col-md-12 m-3">
                <h2 class="display-4 d-flex justify-content-center">ChildReceiver</h2>
                <p class="d-flex justify-content-center"><i>{parentResult != null ? 'Activity received from Parent:' : null}</i></p>
                <h3 class=" d-flex justify-content-center"><i>{parentResult}{parentResult != null ? '!' : null}</i></h3>
            </div>
        </div>
    )
}

export default ChildReceiver;
