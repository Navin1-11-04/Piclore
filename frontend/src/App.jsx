import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
