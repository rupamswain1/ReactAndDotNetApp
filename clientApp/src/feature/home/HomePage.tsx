import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const HomePage = () => {
  return (
    <Container style={{ marginTop: '7em' }}>
      <h1>HomePage</h1>
      <h3>
        Click Here to Go to <Link to="/activities">Activities</Link>
      </h3>
    </Container>
  );
};

export default HomePage;