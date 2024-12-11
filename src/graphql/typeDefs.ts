// types.ts
import { gql } from 'graphql-tag';

export interface User {
    id: string;
    name: string;
    email: string;
    age: number;
}

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int!
    }

    type Query {
        users: [User!]!
        user(id: String!): User
    }
`;