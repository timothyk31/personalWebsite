import './App.css';
import Navbar from './components/navbar';
import { Route, BrowserRouter as Router , Routes} from 'react-router-dom';
import Home from './pages/home.js';
import Experience from './pages/experience.js';
import Projects from './pages/project';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
