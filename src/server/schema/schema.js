const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const axios = require('axios');
const TestType = require('./testType.js');
const WeatherType = require('./weatherType.js');

require('dotenv').config();

const testJSONUrl = 'https://jsonplaceholder.typicode.com/';

const openWeatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherUrl = (zipcode) => `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${openWeatherAPIKey}&units=imperial`;

const testGet = (params) => {
  const endpoint = `/${params.join('/')}`;

  const options = {
    method: 'get',
    url: endpoint,
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

const weatherGet = (zipcode) => {
  const wurl = weatherUrl(zipcode);

  const options = {
    method: 'get',
    url: wurl,
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


const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getIds: {
      type: TestType,
      args: {
        params: { type: GraphQLList(GraphQLString) },
      },
      resolve: (root, args) => testGet(args.params), // "root" is almost never used
    },
    getWeather: {
      type: WeatherType,
      args: {
        zipcode: { type: GraphQLString },
      },
      resolve: (root, args) => weatherGet(args.zipcode), // "root" is almost never used
    },
  },
});

const TestSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = TestSchema;
