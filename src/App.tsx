import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import { useQuery } from '@apollo/client';
import SearchBar from './components/SearchBar';
import { PODCAST_QUERY } from './lib/queries';
import useDebounce from './hooks/useDebounce';
import SearchResultCard from './components/SearchResultCard';
import LoadingCard from './components/LoadingCard';

function App() {
  const { data, loading, refetch } = useQuery(PODCAST_QUERY, {
    variables: {
      keywords: ''
    }
  });

  const debouncedFetch = useDebounce((v: string) => {
    refetch({ keywords: v });
  }, 300);

  console.log({ xxx: JSON.stringify(data, null, 2) })

  return (
    <Box as='section' display="flex" alignItems="center" justifyContent="center">
      <Box maxW={400} width={"100%"} p={12}>
        <SearchBar onChange={e => debouncedFetch(e.target.value)} loading={loading} />
        <Flex alignItems="center" justifyContent="center" flexDir="column" paddingY={6}>
          {loading && [...Array(3)].map((x, i) => <LoadingCard key={i} />)}
          {data && data.contentCards.edges.map((data: any) => {
            // console.log({ data })
            return <SearchResultCard cardData={data} key={data.id} />
          })}
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
