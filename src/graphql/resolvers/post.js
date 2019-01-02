export default {
  Post: {
    comments: async (parent, args, { Comments }) => {
      const output = await Comments.where('post_id', parent.id).fetchAll();

      return output && output.serialize();
    },
  },
  Query: {
    async getPosts(parent, args, { Posts }) {
      const output = await Posts.fetchAll();

      return output && output.serialize();
    },
  },
};
