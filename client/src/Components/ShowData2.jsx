import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowData() {
  const navigate = useNavigate();

  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formDesignation, setFormDesignation] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formInfo, setFormInfo] = useState("");
  const [formInterestLebel, setFormInterestLebel] = useState("");
  const [newUser, setNewUser] = useState("");

  const { id } = useParams();
  console.log(id, "id");

  useEffect(() => {
    customerData();
  }, []);

  const customerData = async () => {
    const data = await fetch("http://192.168.0.110:5000/customer/" + id, {
      method: "GET",
      body: JSON.stringify(),
    });
    const oneCustomer = await data.json();
    //console.log(allCustomer)
    setFormName(oneCustomer.name);
    setFormPhone(oneCustomer.phone);
    setFormEmail(oneCustomer.email);
    setFormDesignation(oneCustomer.designation);
    setFormCompany(oneCustomer.company);
    setFormInfo(oneCustomer.info);
    setFormInterestLebel(oneCustomer.interest);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(formName);
    console.log(formPhone);
    console.log(formEmail);
    console.log(formDesignation);
    console.log(formCompany);
    console.log(formInfo);
    console.log(formInterestLebel);

    try {
      const formData = new FormData();
      formData.append("formName", formName);
      formData.append("formPhone", formPhone);
      formData.append("formEmail", formEmail);
      formData.append("formDesignation", formDesignation);
      formData.append("formCompany", formCompany);
      formData.append("formInfo", formInfo);
      formData.append("formInterestLebel", formInterestLebel);
      formData.append("photo", newUser.photo);

      const result = await axios.post(
        "http://192.168.0.110:5000/customer/" + id,
        formData
      );
      console.log(result.data);
      setFormName("");
      setFormPhone("");
      setFormEmail("");
      setFormDesignation("");
      setFormCompany("");
      setFormInfo("");
      setFormInterestLebel("");

      console.log("Success");
    } catch (err) {
      console.log(err);
    }
    navigate("/ShowData");
  }

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="row justify-content-center">
          <div className="col-4">
            <h1>Customer Form</h1>
          </div>
        </div>

        <Card>
          <Row className="my-3 mx-auto">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                placeholder="Enter customer name"
                onChange={(e) => setFormName(e.target.value)}
                value={formName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                placeholder="Enter Phone number"
                onChange={(e) => setFormPhone(e.target.value)}
                value={formPhone}
              />
            </Form.Group>
          </Row>

          <Row className="my-3 mx-auto">
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setFormEmail(e.target.value)}
                value={formEmail}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control
                placeholder="Enter Designation"
                onChange={(e) => setFormDesignation(e.target.value)}
                value={formDesignation}
              />
            </Form.Group>
          </Row>

          <Row className="my-3 mx-auto">
            <Form.Group as={Col} controlId="formCompany">
              <Form.Label>Company:</Form.Label>
              <Form.Control
                placeholder="Enter company name"
                onChange={(e) => setFormCompany(e.target.value)}
                value={formCompany}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formInfo">
              <Form.Label>Information:</Form.Label>
              <Form.Control
                placeholder="Enter customer information"
                onChange={(e) => setFormInfo(e.target.value)}
                value={formInfo}
              />
            </Form.Group>
          </Row>

          <Row className="my-3 mx-auto">
            <Form.Group as={Col} controlId="photo">
              <Form.Label>Visiting Card Upload</Form.Label>
              <Form.Control
                type="file"
                accept=".img, .jpg, .jpeg"
                onChange={(e) => handlePhoto(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formInterestLebel">
              <Form.Label>Interest Lebel</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setFormInterestLebel(e.target.value)}
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

        <div className="row justify-content-center my-3">
          <div className="col col-lg-2">
            <Button type="submit" variant="outline-primary">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
