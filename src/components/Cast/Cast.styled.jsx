import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  padding-bottom: 16px;
`;

export const Item = styled.li`
  border: 1px solid #22c33a;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  text-align: center;
  padding-bottom: 5px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-bottom: 5px;
  flex-grow: 1;
  object-fit: cover;
`;
