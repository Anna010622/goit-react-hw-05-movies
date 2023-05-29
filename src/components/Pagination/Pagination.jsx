import Stack from '@mui/material/Stack';
import { StyledPagination } from './Pagination.styled';
import { PropTypes } from 'prop-types';

export default function PaginationRanges({ totalPages, onButtonClick, page }) {
  const handleChange = (event, value) => {
    onButtonClick(value);
  };

  return (
    <Stack spacing={2}>
      <StyledPagination
        count={totalPages}
        defaultPage={page}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}

PaginationRanges.propTypes = {
  totalPages: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
