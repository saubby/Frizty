const { AuthenticatorError, UserInputError } = require('apollo-server-express');
const Post = require('../../models/Post');
const checkAuth = require('../../util/checkAuth');

module.exports = {
    Mutation: {
        async createComment(_, { postId, body }, context) {
            const { username } = checkAuth(context);
            if (body.trim() === '') {
                throw new UserInputError('Empty comment', {
                    errors: {
                        body: 'comment body must not be empty',
                    },
                });
            }
            const post = await Post.findById(postId);
            if (post) {
                post.comments.unshift({
                    body, username, createdAt: new Date().toISOString(),
                });
                await post.save();
                return post;
            }
            throw new UserInputError('Post not founded');
        },
        async deleteComment(_, { postId, commentId }, context) {
            const { username } = checkAuth(context);
            const post = await Post.findById(postId);
            if (post) {
                const commentIndex = post.comments.findIndex((c) => c.id === commentId);

                if (post.comments[commentIndex].username === username) {
                    post.comments.splice(commentIndex, 1);
                    await post.save();
                    return post;
                }
                throw new AuthenticatorError('Action not allowed');
            }
            throw new UserInputError('post not found');
        },
    },
};