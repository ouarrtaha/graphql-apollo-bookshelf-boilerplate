export default {
  Query: {
    getArticles (obj, args, context, info) {
      return [
        {
          id: 1,
          title: 'Article1',
          content: 'Sample Content',
          negatifVotes: 3,
          positifVotes: 5
        },
        {
          id: 2,
          title: 'Article2',
          content: 'Sample Content',
          negatifVotes: 4,
          positifVotes: 6
        },
        {
          id: 3,
          title: 'Article3',
          content: 'Sample Content',
          negatifVotes: 6,
          positifVotes: 2
        }
      ]
    }
  }
}
