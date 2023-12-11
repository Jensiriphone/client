import React from "react";
import PatientCard from "./PatientCard";

const PatientList = ({ patientData }) => {
    return (
        <div>
            {patientData.map((patient, index) => (
                <PatientCard key={index} patient={patient} />
            ))}
        </div>
    );
};

export default PatientList;