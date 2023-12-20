import React from "react";

function PatientCardBodyBottomLeft({ obs }) {
    return (
        <div>
            {/* <h1>Patient Card Body Bottom Left</h1> */}
            <p>
                <strong>Obs:</strong>
                <ul>
                    {/* for each item in the obs array, a list item is created. */}
                    {obs.map((item, index) => (
                        <li key={index}>
                            {/* Within each list item, another mapping is done over the KEYS of the object.  */}
                            {Object.keys(item).map((key) => (
                                <span key={key}>
                                    <strong>{key}:</strong> {item[key]}
                                    {/* {index < Object.keys(item).length - 1 && ", "} */}
                                </span>
                            ))}
                        </li>
                    ))}
                </ul>
            </p>
        </div>
    )
}

export default PatientCardBodyBottomLeft;