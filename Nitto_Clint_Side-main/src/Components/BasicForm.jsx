import { useState } from 'react';
import axios from 'axios'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function BasicForm() {


  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formDesignation, setFormDesignation] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formInfo, setFormInfo] = useState("");
  const [formInterestLebel, setFormInterestLebel] = useState("");
  const [newUser, setNewUser] = useState("");


  async function handleSubmit(e) {
    
    e.preventDefault();

    console.log(formName);
    console.log(formPhone);
    console.log(formEmail);
    console.log(formDesignation);
    console.log(formCompany);
    console.log(formInfo);
    console.log(formInterestLebel)
    
    try {

      const formData = new FormData();
        formData.append('formName', formName)
        formData.append('formPhone', formPhone)
        formData.append('formEmail', formEmail)
        formData.append('formDesignation', formDesignation)
        formData.append('formCompany', formCompany)
        formData.append('formInfo', formInfo)
        formData.append('formInterestLebel', formInterestLebel)
        formData.append('photo', newUser.photo)
        
        const result = await axios.post('http://localhost:5000/post', formData)
        console.log(result.data)

        setFormName("");
        setFormPhone("");
        setFormEmail("");
        setFormDesignation("");
        setFormCompany("");
        setFormInfo("");
        setFormInterestLebel("")
        console.log('Success'); 
    
      } catch (err) {
      console.log(err);
    }
  }

  const handlePhoto=(e)=> {
    setNewUser({...newUser, photo: e.target.files[0]})
  }
  

  return (
      <Form onSubmit={(e)=> handleSubmit(e)} >
      <div className='row justify-content-center'>
        <div className='col-4'>
          <h1>Customer List</h1>
        </div>
      </div>

      <Card>

        <Row className="my-3 mx-auto">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder="Enter customer name" 
              onChange={(e)=> setFormName(e.target.value)}
              value={formName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control placeholder="Enter Phone number" 
              onChange={(e)=> setFormPhone(e.target.value)}
              value={formPhone}
            />
          </Form.Group>
        </Row>

        <Row className="my-3 mx-auto">
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' placeholder="Enter email" 
              onChange={(e)=> setFormEmail(e.target.value)}
              value={formEmail}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control placeholder="Enter Designation" 
              onChange={(e)=> setFormDesignation(e.target.value)}
              value={formDesignation}
            />
          </Form.Group>
        </Row>

        
        <Row className="my-3 mx-auto">
          <Form.Group as={Col} controlId="formCompany">
            <Form.Label>Company:</Form.Label>
            <Form.Control placeholder="Enter company name" 
              onChange={(e)=> setFormCompany(e.target.value)}
              value={formCompany}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formInfo">
            <Form.Label>Information:</Form.Label>
            <Form.Control placeholder="Enter customer information" 
              onChange={(e)=> setFormInfo(e.target.value)}
              value={formInfo}
            />
          </Form.Group>
        </Row>

        <Row className="my-3 mx-auto">
          <Form.Group as={Col} controlId="photo">
            <Form.Label>Visiting Card Upload</Form.Label>
            <Form.Control type='file' 
              accept='.img, .jpg, .jpeg'
              onChange={(e)=> handlePhoto(e)}
            />
          </Form.Group>
          
          <Form.Group as={Col} controlId="formInterestLebel">
              <Form.Label>Interest Lebel</Form.Label>
              <Form.Select aria-label="Default select example"
                onChange={(e)=> setFormInterestLebel(e.target.value)}
                value={formInterestLebel} 

              >
                  <option>Select Interest Level</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                </Form.Select>
            </Form.Group>
        </Row>

      </Card>

      <div className='row justify-content-center my-3'>
        <div className='col col-lg-2'>
          <Button  type='submit' variant='outline-primary'>Submit</Button>
        </div>
      </div>
    </Form>

  )
}

