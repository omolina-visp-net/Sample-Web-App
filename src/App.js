import React from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

import './App.css';
import Main from "./routes/Main";

const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
    <ApolloProvider client={client}>
        <Main />
    </ApolloProvider>
);

export default App;
