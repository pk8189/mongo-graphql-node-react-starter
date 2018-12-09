import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/router';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});
console.log(client)

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<ReactRouter/>
		</Router>
	</ApolloProvider>
  ,
document.getElementById('root'));

