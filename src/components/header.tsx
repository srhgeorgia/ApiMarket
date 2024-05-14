'use client';

import styled from 'styled-components';

const HeaderContainer = styled.nav`
  background-color: #0f52ba;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Title = styled.h1`
  margin: 0;
`;

const CartIcon = styled.span`
  font-size: 24px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>MKS sistemas</Title>
      <CartIcon>🛒</CartIcon>
    </HeaderContainer>
  );
}
