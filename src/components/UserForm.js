import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin:100px
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function UserForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
  });

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const result = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(result.data.data);
      };
      fetchUser();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`https://reqres.in/api/users/${id}`, {name:user.first_name,job:user.last_name});
    } else {
      await axios.post('https://reqres.in/api/users', user);
    }
    navigate('/users');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="first_name" value={user.first_name} onChange={handleChange} placeholder="First Name" required />
      <Input name="last_name" value={user.last_name} onChange={handleChange} placeholder="Last Name" required />
      <Button type="submit">{id ? 'Update' : 'Create'} User</Button>
    </Form>
  );
}

export default UserForm;
