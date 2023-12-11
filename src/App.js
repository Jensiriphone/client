import './App.css';
import PatientList from './components/PatientList';
import ScheduleList from './components/ScheduleList';
import patientData from './patientData';

function App() {
  return (
    <div>
      <h1>Nurse Shift Planner</h1>
      <div>
        <h2>Patients:</h2>
      </div>
      <PatientList patientData={patientData} />

      <h2>Schedule</h2>
      <ScheduleList patientData={patientData}/>
    </div>
  );
}

export default App;
