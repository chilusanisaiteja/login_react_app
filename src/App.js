import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
