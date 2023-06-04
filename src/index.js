import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import App from './App';

const client = new ApolloClient({
  uri: 'http://your-graphql-api-endpoint', // Replace with your GraphQL API endpoint
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>
);


