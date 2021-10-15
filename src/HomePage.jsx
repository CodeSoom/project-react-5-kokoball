import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <List>
        <Item><Link to="/about">인테리어시공</Link></Item>
        <Item><Link to="/login">커뮤니티</Link></Item>
        <Item><Link to="/xxx">ㅇ</Link></Item>
      </List>
    </div>
  );
}
