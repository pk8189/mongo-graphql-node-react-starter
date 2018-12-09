import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class Posts extends Component {
  render() {
    return (
      <React.Fragment>
      <Query
      query={gql`
        {
          users {
            id
            name
            email
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        console.log(data)
        return data.users.map((user) => (
          <div key={user.id}>
            <p>{`${user.name}: ${user.email}`}</p>
          </div>
        ));
      }}
    </Query>
      </React.Fragment>
    );
  }
}

export default Posts;
