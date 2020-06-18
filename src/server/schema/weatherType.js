const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const WeatherDetails = new GraphQLObjectType({
  name: 'WeatherDetails',
  fields: {
    head: {
      type: GraphQLString,
      resolve: (result) => result.main,
    },
    description: {
      type: GraphQLString,
      resolve: (result) => result.description,
    },
    icon: {
      type: GraphQLString,
      resolve: (result) => result.icon,
    },
  },
});

const TempDetails = new GraphQLObjectType({
  name: 'TempDetails',
  fields: {
    temp: {
      type: GraphQLString,
      resolve: (result) => result.temp,
    },
    feels_like: {
      type: GraphQLString,
      resolve: (result) => result.feels_like,
    },
    humidity: {
      type: GraphQLString,
      resolve: (result) => result.humidity,
    },
  },
});

const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  fields: {
    weather: {
      type: GraphQLList(WeatherDetails),
      resolve: (result) => result.weather,
    },
    temp: {
      type: TempDetails,
      resolve: (result) => result.main,
    },
    city: {
      type: GraphQLString,
      resolve: (result) => result.name,
    },
  },
});

module.exports = WeatherType;
