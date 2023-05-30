import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  padding: 20px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 767.98px) {
    flex-wrap: wrap;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 255px;
  height: 356px;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 767.98px) {
    min-width: 100%;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Button = styled(Link)`
  display: inline-block;
  margin-bottom: 15px;
  padding: 7px;
  border-radius: 5px;
  font-weight: 600;
  background: linear-gradient(
    0deg,
    rgba(34, 195, 58, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: white;
  }
`;

export const InformationTitle = styled.h2`
  margin-bottom: 15px;
`;

export const InformationList = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  font-weight: 600;
`;
export const InformationLink = styled(Link)`
  color: #22c33a;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: #148f26;
  }
`;
