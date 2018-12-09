import ApolloClient from "apollo-boost";
import gql from "graphql-tag";


export const client = new ApolloClient();


client
  .query({
    query: gql`
      {
        users {
          id
          name
          email
        }
      }
    `
  })
  .then(result => console.log(result));