import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Client from './layouts/client';
import TestPage from './pages/test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Client/>}>
          <Route indexed element={<Client/>} />
          <Route path='/intro' element={<TestPage/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
