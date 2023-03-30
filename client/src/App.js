import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BasicForm from './Components/BasicForm';
import Navber from './Components/Navber';
import ShowData from './Components/ShowData';
import ShowData2 from './Components/ShowData2';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navber/>
          <Routes>
          
            <Route exact path='/' Component={BasicForm}/>
            <Route exact path='/ShowData' Component={ShowData}/>
            <Route exact path='/edit-customer/:id' Component={ShowData2}/>

          </Routes>
      
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
