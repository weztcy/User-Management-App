import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { UserContext } from "../context/UserContext";
import { Form, Button, Card } from "react-bootstrap";

const AddUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const { users, setUsers } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      email,
      address: {
        city,
      },
      phone,
      website,
    };

    // Update context
    setUsers([...users, newUser]);

    // Update Redux store
    dispatch(addUser(newUser));

    // Reset form fields
    setName("");
    setEmail("");
    setCity("");
    setPhone("");
    setWebsite("");
  };

  return (
    <Card className="my-3 add-user-form">
      <Card.Body>
        <Card.Title
          primary
          style={{ color: "#0d6efd", textAlign: "center", fontSize: "30px" }}
        >
          Add Data User
        </Card.Title>
        <Form
          onSubmit={handleSubmit}
          style={{ color: "black", marginTop: "10px" }}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formWebsite">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            style={{ marginTop: "10px", width: "100%" }}
          >
            Add User
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddUserForm;
