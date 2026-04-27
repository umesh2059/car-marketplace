import { Routes, Route } from 'react-router-dom';


function App(){
  return (
    <Routes>
      <Route path='/' element={<h1 className='text-4xl text-center mt-20'>Car marketplace</h1>}/>
    </Routes>
  );
}
export default App;