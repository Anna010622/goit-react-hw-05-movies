import styled from 'styled-components';

export const ReviewsList = styled.ul`
  & :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ReviewsItem = styled.li`
  & :not(:last-child) {
    margin-bottom: 7px;
  }
`;
