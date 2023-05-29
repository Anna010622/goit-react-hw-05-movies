import { DebounceInput } from 'react-debounce-input';
import { BiSearch } from 'react-icons/bi';

import styled from 'styled-components';

export const InputWrapper = styled.label`
  position: relative;
`;

export const Input = styled(DebounceInput)`
  margin-bottom: 15px;
  width: 100%;
  padding: 10px;
  border: 2px solid #22c33a;
  border-radius: 5px;
  font-size: 20px;
`;

export const Icon = styled(BiSearch)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  width: 20px;
  height: 20px;
  color: #22c33a;
`;
