import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

var baseUrl;
process.env.NODE_ENV==="development"?baseUrl="http://localhost:8888":baseUrl="https://usama-bootcamp-virtual-lolly.netlify.app"
export const client = new ApolloClient({
    link: new HttpLink({
      uri: `${baseUrl}/.netlify/functions/virtual_lolly`,
      fetch,
    }),
    cache: new InMemoryCache()
  });