import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import BasicForm from './Components/BasicForm';
import LoadingButton from './Components/LoadingButten';
import ShowData from './Components/ShowData';


function App() {
  return (
    <div className="container">
      <BasicForm/>
      <LoadingButton />
      <ShowData/>
     
    </div>
  );
}

export default App;
