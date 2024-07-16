import React from "react";
import { Card, Button } from "react-bootstrap";
import "./UserCard.css";

const UserCard = ({ user, onDelete, onEdit }) => {
  if (!user) {
    return null;
  }

  const handleEditClick = () => {
    onEdit(user);
  };

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>
          <strong>City:</strong> {user.address.city}
          <br />
          <strong>Phone:</strong> {user.phone}
          <br />
          <strong>Website:</strong> {user.website}
        </Card.Text>
        <div className="button-container">
          <Button
            className="edit-button"
            variant="primary"
            onClick={handleEditClick}
          >
            Edit
          </Button>
          <Button
            className="delete-button"
            variant="danger"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
