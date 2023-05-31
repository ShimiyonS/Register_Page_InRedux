import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import { Register } from './Components/register/Register';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
