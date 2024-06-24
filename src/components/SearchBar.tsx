import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Spinner } from '@chakra-ui/react';
import React from 'react'

interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  loading?: boolean;
}

const SearchBar: React.FC<Props> = ({ loading, ...props }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        {loading ? <Spinner /> : <SearchIcon color="gray.300" />}
      </InputLeftElement>
      <Input {...props} focusBorderColor='brand.secondary' type='text' placeholder='search' />
    </InputGroup>
  )
}

export default SearchBar;