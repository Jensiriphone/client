import React from "react";

function PatientCardBodyTopLeft({ diagnosis, history }) {
    return (
        <div>
            {/* <h1>Patient Card Body Top Left</h1> */}
            <p>
                <strong>Diagnosis:</strong>
                <ul>
                    {diagnosis.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>

            <p>
                <strong>Medical History:</strong>
                <ul>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

export default PatientCardBodyTopLeft;