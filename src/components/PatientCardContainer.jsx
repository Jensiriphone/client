import "../styles/PatientCardContainer.css";
import React from "react";
import PatientCard from "./PatientCard";
import patientInfo from "../data/patientInfo";
import patientDiagnosis from "../data/patientDiagnosis";
import patientHistory from "../data/patientHistory";
import patientPlan from "../data/patientPlan";
import patientNotes from "../data/patientNotes";
import patientObs from "../data/patientObs";



function PatientCardContainer() {
    return (
    <div className="patient-card-container">
        {Object.keys(patientInfo).map((patientId) => (
            <div key={patientId}>
                <PatientCard
                key={patientId}
                patientId={patientId}
                info={patientInfo[patientId]}
                diagnosis={patientDiagnosis[patientId]}
                history={patientHistory[patientId]}
                plan={patientPlan[patientId]}
                obs={patientObs[patientId]}
                notes={patientNotes[patientId]}
            />
            </div>
        ))}
    </div>
    );
}

export default PatientCardContainer;