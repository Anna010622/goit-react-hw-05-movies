import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-bottom: 15px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  transition: font-size 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    color: #22c33a;
    font-size: 18px;
  }
`;
