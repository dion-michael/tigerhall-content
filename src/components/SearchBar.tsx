import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react'

interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const SearchBar: React.FC<Props> = (props) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input {...props} focusBorderColor='brand.secondary' type='text' placeholder='search' />
    </InputGroup>
  )
}

export default SearchBar;