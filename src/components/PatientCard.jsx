import React from "react";
import Card from 'react-bootstrap/Card';

const PatientCard = ({ patient }) => {
    return (
        <div className="patient-list-container">
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Room: {patient.room} | {patient.lastName}, {patient.firstName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Age: {patient.age} | Gender: {patient.gender} | NHI: {patient.nhi}
                    </Card.Subtitle>
                    <Card.Text>
                        Diagnosis: {patient.diagnosis}<br></br>
                        Medical Hx:
                        {Array.isArray(patient.medicalHistory) ? (
                            <ul>
                                {patient.medicalHistory.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (<p>{patient.medicalHistory}</p>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PatientCard;