import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";
import mhsPhoto from "../assets/mhs.jpg";

import CustomCard from "../components/CustomCard";

const Home = () => {
  return (
    <div className="container mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 style={{ color: "white" }}>Welcome to My App!!</h1>
            <br />
            <CustomCard
              title="Yohanes Dimas Pratama"
              textNIM="A11.2021.13254"
              textKampus="Universitas Dian Nuswantoro"
              imageSrc={mhsPhoto}
              style={{ margin: "auto" }}
            />
            {/* <Button variant="primary" className="me-2">
              Get Started
            </Button>
            <Button variant="outline-secondary">Learn More</Button> */}
          </Col>
          <Col md={6} className="mt-4 mt-md-0">
            <Card>
              <Card.Img variant="top" src={heroImage} alt="Hero Image" />
              <Card.Body>
                <Card.Title className="text-center">
                  What is User Management App?
                </Card.Title>
                <br />
                <Card.Text className="text-center mx-5">
                  This application is designed to provide an intuitive and
                  enjoyable experience in user data management. Using React and
                  React Bootstrap technology, this application not only makes it
                  easier for users to add user data, but also provides an
                  interactive experience in displaying user information
                  efficiently and attractively.
                </Card.Text>
                <br />
                <div className="text-end">
                  {" "}
                  {/* Menggunakan class 'text-end' di sini */}
                  <Button
                    as={Link}
                    to="/users"
                    variant="info"
                    className="float-end"
                  >
                    Lihat Data Pengguna
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
