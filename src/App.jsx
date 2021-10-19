import React from 'react';

import {
  Switch, Route, Link,
} from 'react-router-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';

import TitleMenuPage from './TitleMenuPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
  lineHeight: 1,
});
const Title = styled.span({
  fontSize: '2em',
  fontWeight: 'bold',
  margin: '6px 10px 0',
  padding: '14px 6px',
});

const Header = styled.header({
  display: 'flex',
  backgroundColor: 'white',
  borderBottom: '1px solid #EEEEEE',
  maxWidth: '1256px',
  padding: '10px 60px',
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
        <Link to="/"><Title>오늘의집</Title></Link>
        <Route path="/" component={TitleMenuPage} />
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}
