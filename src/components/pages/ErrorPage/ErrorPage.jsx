import { ErrorWrapper, ErrorTitle, Text, Button } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oops!</ErrorTitle>
      <Text>404 - page not found</Text>
      <Button to={'/'}> Go to homepage</Button>
    </ErrorWrapper>
  );
};

export default ErrorPage;
