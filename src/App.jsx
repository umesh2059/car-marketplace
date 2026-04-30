import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
function App(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cars' element={<Cars />}/>
      <Route path='/cars/:id' element={<CarDetails/>}/>
    </Routes>
  );
}
export default App;