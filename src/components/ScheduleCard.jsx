import React from "react";
import Card from "react-bootstrap/Card";

const ScheduleCard = ({ patient }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>0700</Card.Title>
                {Array.isArray(patient.tasks) ? (
                <ul>
                {patient.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
                </ul>
                ) : (<p>{patient.tasks}</p>
                )}
            </Card.Body>
        </Card>
    )
}

export default ScheduleCard;