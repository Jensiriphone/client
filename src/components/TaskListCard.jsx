import React from "react";

function TaskListCard({ time, tasks, patientInfo }) {

    return (
        <div className="task-list-card">
            <p><strong>{time}</strong></p>
            <ul>
                {Object.entries(tasks).map(([patientId, patientTasks], index) => (
                    <li key={index}>
                        <strong>{patientId}</strong>
                        <ul>
                            {patientTasks.map((task, subIndex) => (
                                <li key={subIndex}>
                                    {Object.keys(task)[0]}: {task[Object.keys(task)[0]]}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskListCard;
