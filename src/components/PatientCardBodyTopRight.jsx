import React from "react";

function PatientCardBodyTopRight({ plan }) {
    return (
        <div>
            {/* <h1>Patient Card Body Top Right</h1> */}
            <p>
                <strong>Plan:</strong>
                <ul>
                    {plan.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </p>
            </div>
    )
}

export default PatientCardBodyTopRight;