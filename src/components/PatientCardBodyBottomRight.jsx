import React from "react";

function PatientCardBodyBottomRight({ notes }) {
    return (
        <div>
            {/* <h1>Patient Card Body Bottom Right</h1> */}
            <p>
                <strong>Notes:</strong>
                <ul>
                    {notes.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
            </div>
    )
}

export default PatientCardBodyBottomRight;