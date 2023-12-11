import React from "react";
import ScheduleCard from "./ScheduleCard";

const ScheduleList = ({patientData}) => {
    return (
        <div>
            {patientData.map((patient, index) => (
                <ScheduleCard key={index} tasks={patient} />
            ))}
        </div>
    );
};

export default ScheduleList;