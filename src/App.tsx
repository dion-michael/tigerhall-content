import { Box, ChakraProvider, Code } from '@chakra-ui/react';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import theme from './theme';

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
    <ChakraProvider theme={theme}>
      <Box as='section' display="flex" alignItems="center" justifyContent="center">
        <Code maxWidth={400} bg="brand.main" color="error" p="6">{loading ? 'loading...' : JSON.stringify(data, null, 2)}</Code>
      </Box>
    </ChakraProvider>
  );
}

export default App;
