const { gql } = require('apollo-server-express');

module.exports = gql`
type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likecount: Int!
    commentCount: Int!
}
type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
}
type Like {
    id: ID!
    createdAt: String!
    username: String!
}
type User {
    id: ID!
    email: String!
    token: String!
    createdAt: String!
    username: String!
}
input RegisterInput {
    username:  String!
    password: String!
    confirmPassword: String!
    email: String!
}
type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
}
type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, Password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
}
type Subscription {
    newPost: Post!
}`;