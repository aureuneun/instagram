import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Post {
    id: Int!
    title: String!
    content: String
  }

  type Query {
    posts: [Post]
    post(id: Int!): Post
  }

  type Mutation {
    addPost(title: String!, content: String): Post
    updatePost(id: Int!, title: String, content: String): Boolean
    removePost(id: Int!): Boolean
  }
`;

export default typeDefs;
