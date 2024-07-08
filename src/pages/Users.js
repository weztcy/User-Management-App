import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";
import {
  setUsers,
  deleteUser,
  editUser as editUserAction,
} from "../redux/actions";
import AddUserForm from "../components/AddUserForm";
import {
  Container,
  Row,
  Col,
  Modal,
  Form,
  Button,
  Pagination,
  Card,
} from "react-bootstrap";

const Users = () => {
  const { users } = useContext(UserContext);
  const dispatch = useDispatch();
  const reduxUsers = useSelector((state) => state.users);
  const [editUser, setEditUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    dispatch(setUsers(users));
  }, [users, dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleEditUser = (user) => {
    setEditUser(user);
  };

  const handleCloseEditModal = () => {
    setEditUser(null);
  };

  const handleSaveEditedUser = () => {
    dispatch(editUserAction(editUser));
    handleCloseEditModal();
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = reduxUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(reduxUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Container>
      <Row style={{ marginTop: "100px" }}>
        <Col md={4}>
          <AddUserForm />
        </Col>
        <Col md={8}>
          <Row>
            <h1
              style={{ color: "white", textAlign: "center", fontSize: "30px" }}
            >
              List Data User
            </h1>
            {currentUsers.map((user) => (
              <Col key={user.id} sm={12} md={6} lg={4}>
                <UserCard
                  user={user}
                  onDelete={handleDeleteUser}
                  onEdit={handleEditUser}
                />
              </Col>
            ))}
          </Row>
          <Pagination className="justify-content-center mt-2">
            <Pagination.Prev
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              style={{ marginRight: "10px" }}
            >
              Sebelumnya
            </Pagination.Prev>
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              style={{ marginLeft: "10px" }}
            >
              Selanjutnya
            </Pagination.Next>
          </Pagination>
        </Col>
      </Row>

      <Modal show={!!editUser} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={editUser?.name || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={editUser?.email || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={editUser?.address.city || ""}
                onChange={(e) =>
                  setEditUser({
                    ...editUser,
                    address: { ...editUser.address, city: e.target.value },
                  })
                }
                required
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSaveEditedUser}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Users;
