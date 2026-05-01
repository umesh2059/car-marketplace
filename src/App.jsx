import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import Login from './pages/Login';
import Register from './pages/Register';
function App(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cars' element={<Cars />}/>
      <Route path='/cars/:id' element={<CarDetails/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Register'element={<Register/>}/>
    </Routes>
  );
}
export default App;