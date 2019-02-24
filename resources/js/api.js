import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link';
import { RetryLink } from "apollo-link-retry";
import { onError } from "apollo-link-error";
import { setContext } from 'apollo-link-context';

// HTTP connexion to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: '/graphi/api/backend',
  headers: {
    'X-CSRF-TOKEN': window.config.csrf
  }
})

const authLink = setContext((_, { headers }) => {
  const token = window.config.csrf;
  return {
    headers: {
      ...headers,
      'X-CSRF-TOKEN': token ? token : '',
    }
  }
});


// Cache implementation
const cache = new InMemoryCache()

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

let failcsrf = new ApolloLink((operation, forward) => {
  return forward(operation).map((data) => {
    return data;
  });
})

const linkCsrf = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    if(networkError.statusCode == 419) {
      window.config.csrf = networkError.response.headers.get('newone');
    }
  }
});

const link = ApolloLink.from([
  new RetryLink(),
  linkCsrf,
  failcsrf,
  authLink.concat(httpLink),
]);

// Create the apollo client
const apolloClient = new ApolloClient({
  link: link,
  cache,
  defaultOptions: defaultOptions,
})

export default apolloClient

export {
  apolloClient as apiClient
}