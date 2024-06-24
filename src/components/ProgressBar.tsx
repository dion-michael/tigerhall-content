import { Box } from '@chakra-ui/react';
import React from 'react'

type Props = {
  percentage: number;
}

function ProgressBar({ percentage = 0 }: Props) {
  return (
    <Box>
      <Box position="absolute" bg="grey.500" bottom="-2" height={2} width="100%">{' '}</Box>
      <Box bg="brand.secondary" position="absolute" height={2} bottom="-2" width={`${percentage}%`}>{' '}</Box>
    </Box>
  )
}

export default ProgressBar;
