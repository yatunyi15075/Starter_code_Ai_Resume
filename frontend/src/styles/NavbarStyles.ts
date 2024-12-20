
// src/styles/NavbarStyles.ts
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #333;
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(200, 200, 200, 0.7); /* Thin fading light grey line */
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const Logo = styled.div`
  img {
    height: 50px; /* Adjust the height as needed */
    width: auto;
  }
`;

export const MenuLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    &:hover {
      color: #007bff;
    }
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background: none;
    border: none;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      color: #007bff;
    }
  }
`;