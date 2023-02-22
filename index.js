const { ApolloServer } = require('apollo-server-express');
const db = require("./config/connection");
const { PubSub }  = require(`@google-cloud/pubsub`);
const pubsub = new PubSub();

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers')

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
});

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    });
});