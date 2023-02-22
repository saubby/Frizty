const postResolvers = require('./posts');
const usersResolvers = require('./users');
const commentResolvers = require('./comments');

module.exports = {
    Post: {
        likeCount: (parent) => parent.likes.lenght,
        commentCount: (parent) => parent.comments.lenght,
    },
    Query: {
        ...postResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentResolvers.Mutation,
    },
    Subscription: {
        ...postResolvers.Subscription,
    },
};