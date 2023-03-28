import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ShowData() {
  const [customer, setCustomer] = useState([]);
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    customerData();
  }, [refresh]);

  const customerData = async () => {
    const data = await fetch("http://localhost:5000/data", {
      method: "GET",
      body: JSON.stringify(),
    });
    const allCustomer = await data.json();
    //console.log(allCustomer)
    setCustomer(allCustomer.allData);
  };
  console.log(customer);
  
  async function handleDelete(id){
    await fetch('http://localhost:5000/customer/' + id, {
      method: "DELETE"
    })
    setRefresh(!refresh)
  }

  if(customer.length == 0) {
    return <h1>No Data...</h1>
  }
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Customer List</h1>
        </div>
      </div>

      <Table striped bordered hover variant="danger" className="mt-4">
        {/* {()=> (
                customer.length() > 0 ? 
                null
                : 
                (<thead>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Designation</td>
                        <td>Company</td>
                        <td>Information</td>
                        <td>Interest Level</td>
                        <td>Image</td>
                        
                    </tr>
                </thead>)
            )}   */}

        <thead>
          <tr>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Designation</td>
            <td>Company</td>
            <td>Information</td>
            <td>Interest Level</td>
            <td>Image</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {customer.map((val, index) => (
            <tr key={index}>
              <td>{val.name}</td>
              <td>{val.phone}</td>
              <td>{val.email}</td>
              <td>{val.designation}</td>
              <td>{val.company}</td>
              <td>{val.info}</td>
              <td>{val.interest}</td>
              <td>
                <img
                  height={60}
                  width={120}
                  src={"http://localhost:5000/image/" + val.image}
                  alt=""
                />
              </td>
              <td>
                {" "}
                <Link to={'/edit-customer/'+val._id}>
                  <Button variant="outline-primary">Edit</Button>
                </Link>
              </td>
              <td>
                <Button onClick={(e) => handleDelete(val._id)} variant="outline-danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
