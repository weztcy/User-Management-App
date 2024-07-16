import React from "react";
import Card from "react-bootstrap/Card";

function CustomCard({ title, textNIM, textKampus, imageSrc }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title className="text-center" style={{ fontSize: "23px" }}>
          {title}
        </Card.Title>
        <br />
        <Card.Text className="text-center" style={{ fontSize: "16px" }}>
          {textNIM}
        </Card.Text>
        <Card.Text
          className="text-center"
          style={{ fontSize: "16px", marginTop: "-10px" }}
        >
          {textKampus}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
