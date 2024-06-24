import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.tigerhall.net/v2/',
  cache: new InMemoryCache(),
});

const TigerhallApolloProvider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default TigerhallApolloProvider;