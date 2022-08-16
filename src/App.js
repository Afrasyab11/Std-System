import {  Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Employee from './components/Edit';
import Home from './components/Home';
import Delete from './components/Delete';
import Create from './components/Create';
import Form from './components/Form';

function App() {
  return (
    <>
      
        <Nav />

        <Routes>
         
          <Route path='/' element={< Home />} />
          <Route path='/Edit-Emp' element={< Employee  />} />
          <Route path='/Delete' element={< Delete />} />
          <Route path='/Create' element={< Create />} />
          <Route path='/Form' element={< Form />} />
          
        </Routes>
      
    </>
  );
}

export default App;
