import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const Li = styled.li`
a{
    color:white  
}
color:white;`;

const Sidebar = styled.div`
  width: 200px;
  background: #333;
  color: white;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Header = styled.header`
  background: #eee;
  padding: 10px;
  text-align: center;
  margin-bottom:20px;

`;

const Main = styled.main`
padding:20px;
`

const Dashboard = () => {
  return (
    <Layout>
      <Sidebar>
        <nav>
          <ul>
            <Li><Link to="/users">Users</Link></Li>
          </ul>
        </nav>
      </Sidebar>
      <Content>
        <Header>User Management System</Header>
        <Main>
          Welcome to the Dashboard! Use the sidebar to navigate.
        </Main>
      </Content>
    </Layout>
  );
};

export default Dashboard;
