import React from 'react';

import {
  Switch, Route, Link,
} from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
});
const Title = styled.div({
  fontSize: '2em',
  margin: 0,
  padding: '.4em 0',
});

const Header = styled.header({
  backgroundColor: 'white',
  borderBottom: '1px solid #EEEEEE',
  '& h1': {
    fontSize: '1.5em',
    margin: 0,
    padding: '1em .5em',

  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function App() {
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">오늘의집</Link>
        </h1>
        <Route exact path="/" component={HomePage} />
      </Header>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}
