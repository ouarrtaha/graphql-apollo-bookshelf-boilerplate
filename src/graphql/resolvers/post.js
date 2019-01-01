export default {
  Query: {
    getPosts (parent, args, context, info) {
      return [
        {
          id: 1,
          title: 'Post1',
          content: 'Sample Content',
          negatifVotes: 3,
          positifVotes: 5
        },
        {
          id: 2,
          title: 'Post2',
          content: 'Sample Content',
          negatifVotes: 4,
          positifVotes: 6
        },
        {
          id: 3,
          title: 'Post3',
          content: 'Sample Content',
          negatifVotes: 6,
          positifVotes: 2
        }
      ]
    }
  }
}
