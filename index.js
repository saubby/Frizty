const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const db = require("./config/connection");
// const typeDefs = gql`
//     type Query{
//         sayHi: String!
//     }
// `;

// const resolvers = {
//     Querry: {
//         sayHi: () => 'Hello World!'
//     }
// };
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

db.once("open", () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    });
});