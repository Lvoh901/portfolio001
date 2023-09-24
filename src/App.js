import './App.css';
import './pages/style.css'

//routes
import { Routes, Route } from 'react-router-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Navbar from './pages/navigation';
import Hero from './pages/hero';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Hero />} />;
        <Route path="/about" exact element={<About />} />;
        <Route path="/contact" exact element={<Contact />} />;
      </Routes>
    </div>
  );
}

export default App;
