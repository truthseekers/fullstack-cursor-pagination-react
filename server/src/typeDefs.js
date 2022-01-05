const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String
  }
  type Query {
    hello: String!
    todos: [Todo]!
  }
`;

module.exports = {
  typeDefs,
};
