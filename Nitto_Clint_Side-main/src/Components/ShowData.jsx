import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function ShowData() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    customerData();
  }, []);

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
  return (
    <Table striped bordered hover variant="danger">
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
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
