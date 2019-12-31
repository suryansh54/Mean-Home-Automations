const { gql } = require('apollo-server-express');

module.exports  = gql`
  type Query {
    hello: String!
    devices: [Device!]!
  }
  type Device {
    id: ID!
    UserID: String
    DeviceName: String
  }
  type Mutation {
    createDevice(UserID: String, DeviceName: String!): Device!
  }
`;