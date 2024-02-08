import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UsersWrapper = styled.div`
  padding: 20px;
`;

const UserRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f9f9f9;
  margin-bottom: 5px;
  border-radius: 4px;
  margin-top:20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.edit {
    background-color: #ffc107;
    color: white;
  }

  &.delete {
    background-color: #dc3545;
    color: white;
  }
`;

function Users() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const fetchUsers = async () => {
    const result = await axios.get('https://reqres.in/api/users');
    setUsers(result.data.data);
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {

    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (isConfirmed) {
      try {
        await axios.delete(`https://reqres.in/api/users/${userId}`);
        fetchUsers();
      } catch (error) {
        console.error("Failed to delete the user:", error);
        alert("There was an error deleting the user.");
      }
    }
  };


  return (
    <UsersWrapper>
      <h2>Users</h2>
      <Link to="/users/add">Add User</Link>&nbsp;&nbsp;
      <Link to="/dashboard">DashBoard</Link>
      {users.map((user) => (
        <UserRow key={user.id}>
          <span>{user.first_name} {user.last_name}</span>
          <div>
            <Link to={`/users/edit/${user.id}`}>
              <Button className="edit">Edit</Button>
            </Link>
            <Button className="delete" onClick={() => deleteUser(user.id)}>Delete</Button>
         
          </div>
        </UserRow>
      ))}
    </UsersWrapper>
  );
}

export default Users;
