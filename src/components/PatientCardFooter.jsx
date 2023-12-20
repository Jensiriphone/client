import React from "react";
import AddObsButton from "./AddObsButton";
import AddNoteButton from "./AddNoteButton";

function PatientCardFooter() {
    return (
    <div className="card-footer">
        {/* <h1>Patient Card Footer</h1> */}
        <AddObsButton />
        <AddNoteButton />
    </div>)
}

export default PatientCardFooter;