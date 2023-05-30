import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  padding: 20px;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background: linear-gradient(
    0deg,
    rgba(34, 195, 58, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  border-radius: 5px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const HeaderNavLink = styled(NavLink)`
  padding: 7px;
  border-radius: 5px;
  transition: color 250ms linear;
  font-size: 18px;

  &.active {
    color: #ffffff;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  &:hover,
  &:focus {
    color: #ffffff;
  }
`;
