import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.ul({
  display: 'inline-block',
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  margin: '1em',
  '& a': {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    '&:hover': {
      color: '#35c5f0',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <List>
        <Item><Link to="/">인테리어시공</Link></Item>
        <Item><Link to="/community">커뮤니티</Link></Item>
        <Item><Link to="/xxx"><input type="text" placeholder="전문가 검색" /></Link></Item>
        <Item><Link to="/login">로그인</Link></Item>
        <Item><Link to="/join">회원가입</Link></Item>
        <Item><Link to="/write"><button type="button">글쓰기</button></Link></Item>
      </List>
    </Container>
  );
}
