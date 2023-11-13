import './App.css';
import './pages/style.css'

//routes
import { Routes, Route } from 'react-router-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Hero from './pages/hero';

function App() {
  return (
    <div className="App">
      <Hero/>
    </div>
  );
};

export default App;
