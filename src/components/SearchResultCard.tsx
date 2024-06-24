import { TimeIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, CardFooter, Flex, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import getCompletedPercentage from '../helpers/getCompletedPercentage';
import { getPodcastDuration } from '../helpers/secondsToMinutes';
import ProgressBar from './ProgressBar';
import parseImageUrl from '../helpers/parseImageUrl';
import { IoMdHeadset } from 'react-icons/io';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

interface Props extends React.PropsWithChildren {
  cardData: any
}

const SearchResultCard: React.FC<Props> = ({ cardData }) => {
  return (
    <Card w="sm" p={0} mb={6} bg={'white'}>
      <CardBody p={0}>
        <Box position={'relative'}>
          <Image h={120} fit="cover" width={'100%'} src={parseImageUrl(cardData.image.uri)} alt={cardData.name} borderTopRadius={'lg'} />
          <Box bgColor="white" color={'black'} fontWeight={'bold'} position={'absolute'} top={0} px={3} py={1} borderBottomRightRadius={'lg'} borderTopLeftRadius={'lg'}>
            <Flex alignItems={'center'} gap={2}>
              <TimeIcon color={'brand.secondary'} />
              <span>{`${getCompletedPercentage(cardData.timeSpentOnByUsers, cardData.length)}% Completed`}</span>
            </Flex>
          </Box>
          <Box position={"absolute"} bottom="2" left="2" translateY="100%">
            <IconButton aria-label='audio icon' icon={<IoMdHeadset />} variant="solid" bgColor={'brand.secondary'} colorScheme='brand' isRound={true} color="white" />
          </Box>
          <Box position="absolute" right="2" bottom="2">
            <Stack alignItems={'center'} px={3} py={1} borderRadius={'xl'} direction={'row'} bgColor="blackAlpha.800">
              <TimeIcon color={'white'} />
              <span>{getPodcastDuration(cardData.length)}</span>
            </Stack>
          </Box>
          <ProgressBar percentage={getCompletedPercentage(cardData.timeSpentOnByUsers, cardData.length)} />
        </Box>
        <Stack mt='6' spacing='3' px={4}>
          <Text color="grey.800" textTransform="uppercase">Communicating as a leader</Text>
          <Heading as="h2" textTransform="capitalize" fontWeight="900" color="black">{cardData.name}</Heading>
          {cardData.hostedBy && (
            <Box>
              <Text color={'grey.800'}>
                {`${cardData.hostedBy[0].firstName} ${cardData.hostedBy[0].lastName}`}
              </Text>
              {cardData.hostedBy[0].company && (
                <Text color={'grey.700'} fontWeight={800} mt={0}>
                  {cardData.hostedBy[0].company}
                </Text>
              )}
            </Box>
          )}
        </Stack>
      </CardBody>
      <CardFooter>
        <Stack direction="row" justifyContent={'right'} width={'100%'}>
          <IconButton icon={<CiShare2 />} aria-label='bookmark' color="brand.secondary" fontSize={'2rem'} />
          <IconButton icon={<CiBookmark />} aria-label='bookmark' color="brand.secondary" fontSize={'2rem'} />
        </Stack>
      </CardFooter>
    </Card>
  )
}

export default SearchResultCard