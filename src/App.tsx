import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RoutesComponent from './pages/Routes';


function App() {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
