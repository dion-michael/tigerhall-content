import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import { SearchIcon } from '@chakra-ui/icons';

const PODCAST_QUERY = gql`{
  contentCards(filter: {limit: 20, keywords: "", types: [PODCAST]}) {
    edges {
      ... on Podcast {
        name
        image {
          uri
        }
        categories {
          name
        }
        participants {
          firstName
          lastName
          jobTitle
          company
        }
      }
    }
  }
}`;

function App() {

  const { data, loading } = useQuery(PODCAST_QUERY);

  return (
    <Box as='section' display="flex" alignItems="center" justifyContent="center">
      <Box maxW={400} width={"100%"} p={12} border="1px solid black">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input focusBorderColor='brand.secondary' type='text' placeholder='search' />
        </InputGroup>
        {loading ? 'loading...' : JSON.stringify(data, null, 2)}
      </Box>
    </Box>
  );
}

export default App;
