import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Category from './views/Category';

function App() {
  return (
    <div className="App bg-black overflow-hidden  font-Poppins">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
    </div>
  );
}

export default App;
