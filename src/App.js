import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import { Register } from './Components/register/Register';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <>
    <div className="background">
      <div className="container">
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
         
      </div>
      </div>
    </>
  );
}

export default App;
