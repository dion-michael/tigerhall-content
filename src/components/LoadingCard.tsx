import { Box, Card, CardBody, CardFooter, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import React from 'react'

const LoadingCard: React.FC = () => {
  return (
    <Card w="sm" p={0} mb={6} bg={'white'}>
      <CardBody p={0}>
        <Box position={'relative'}>
          <Skeleton h={120} />
        </Box>
        <Stack mt='6' spacing='3' px={4}>
          <SkeletonText noOfLines={1} width={'40%'} />
          <Skeleton height={'3rem'} width={'90%'} />
          <SkeletonText noOfLines={2} width="50%" />
        </Stack>
      </CardBody>
      <CardFooter>
        <Stack direction="row" justifyContent={'right'} width={'100%'}>
          <SkeletonCircle size="10" />
          <SkeletonCircle size="10" />
        </Stack>
      </CardFooter>
    </Card>
  )
}

export default LoadingCard