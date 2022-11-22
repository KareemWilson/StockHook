import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';
import Details from './Pages/Details';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:symbol" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
