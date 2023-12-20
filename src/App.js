import './App.css';
import PatientCardContainer from './components/PatientCardContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskListContainer from './components/TaskListContainer';

function App() {
  return (
    <div>
      <h1>Nurse Shift Planner</h1>
        <h2>Patients:</h2>
      <PatientCardContainer></PatientCardContainer>

      <h2>Schedule:</h2>
      {/* <p>Tasks here.</p> */}
      <TaskListContainer />
    </div>
  );
}

export default App;
