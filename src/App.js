
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';


function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/login' element={ <Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
