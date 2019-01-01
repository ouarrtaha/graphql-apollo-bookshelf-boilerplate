export default {
    Post: {
        comments: async (parent, args, {Comments}, info) => {
            const output = await Comments.where('post_id', parent.id).fetchAll()

            console.log('-->Post.comments output')
            console.log(output && output.serialize())
            return output && output.serialize()
        }
    },
    Query: {
        async getPosts(parent, args, {Posts}, info) {
            const output = await Posts.fetchAll()

            console.log('-->getPosts output')
            console.log(output && output.serialize())
            return output && output.serialize()
        }
    }
}
