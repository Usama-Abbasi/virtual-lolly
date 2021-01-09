import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


export const client = new ApolloClient({
    link: new HttpLink({
      uri: '/.netlify/functions/virtual_lolly',
      fetch,
    }),
    cache: new InMemoryCache()
  });