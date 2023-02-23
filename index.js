const { ApolloServer } = require('apollo-server-express');
const db = require("./config/connection");
const { PubSub }  = require(`@google-cloud/pubsub`);
const pubsub = new PubSub();
const express = require('express');

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers')
const app = express();
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
});
const routes = require("./client/src/App");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    });
});