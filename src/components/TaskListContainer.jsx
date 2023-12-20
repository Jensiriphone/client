import "../styles/TaskList.css";
import React from "react";
import TaskListCard from "./TaskListCard";
import patientTasks from "../data/patientTasks";

function TaskListContainer() {
    const times = ["0700",
        "0800",
        "0900",
        "1000",
        "1100",
        "1200",
        "1300",
        "1400",
        "1500",
    ];

    return (
        <div className="task-list-container">
            {times.map((time) => (
                <TaskListCard
                    key={time}
                    time={time}
                    tasks={getTasksForTime(time)}
                />
            ))}
        </div>);
}

function getTasksForTime(time) {
    const tasksForTime = {};
    Object.entries(patientTasks).forEach(([patientId, tasks]) => {
        tasks.forEach((task) => {
            if (Object.keys(task)[0] === time) {
                if (!tasksForTime[patientId]) {
                    tasksForTime[patientId] = [];
                }
                tasksForTime[patientId].push(task);
            }
        });
    });
    return tasksForTime;
}

export default TaskListContainer;