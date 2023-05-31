import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const ErrorTitle = styled.h1`
  font-size: 100px;
  font-weight: 800;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const Button = styled(Link)`
  padding: 10px;
  border-radius: 5px;
  background-color: #22c33a;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #17a22c;
  }
`;
