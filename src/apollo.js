import ApolloClient from 'apollo-boost';

const graphiqlServer = '4200';

export default new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});
