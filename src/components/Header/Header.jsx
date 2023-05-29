import { HeaderWrapper, HeaderNav, HeaderNavLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        <HeaderNavLink to="/movies">Movies</HeaderNavLink>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
