import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1440px;
  }
`;

export const Main = styled.main`
  padding: 0 20px;
`;
