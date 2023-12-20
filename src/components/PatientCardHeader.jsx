import React from "react";

function PatientCardHeader({info}) {
    return <div>
        {/* <h1>Patient Card Header</h1> */}
        <p><strong>Room:</strong> {info.room}</p>
        <p><strong>Name:</strong> {info.lastName}, {info.firstName} | <strong>Gender:</strong> {info.gender} | <strong>Age:</strong> {info.age} | <strong>NHI:</strong> {info.nhi}</p> 
    </div>

}

export default PatientCardHeader;