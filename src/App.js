import Login from './Components/Login/login'
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
