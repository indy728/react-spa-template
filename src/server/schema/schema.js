const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');
const axios = require('axios');

const testJSONUrl = 'https://jsonplaceholder.typicode.com/todos/';

const axiosGet = (param) => {
  const options = {
    method: 'get',
    url: `/${param}`,
    baseURL: testJSONUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  return axios(options)
    .then((res) => res.data)
    .catch((er) => {
      console.log('[schema] er: ;', er);
      throw (er);
    });
};

const TestType = new GraphQLObjectType({
  name: 'Test',
  fields: {
    userId: {
      type: GraphQLInt,
      resolve: (result) => result.userId,
    },
    id: {
      type: GraphQLInt,
      resolve: (result) => result.id,
    },
    title: {
      type: GraphQLString,
      resolve: (result) => result.title,
    },
    completed: {
      type: GraphQLBoolean,
      resolve: (result) => result.completed,
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getIds: {
      type: TestType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => axiosGet(args.id), // "root" is almost never used
    },
  },
});

const TestSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = TestSchema;
