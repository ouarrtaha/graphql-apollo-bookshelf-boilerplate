import { Comments } from '@/models/Comments';
import { bookshelf } from '@/db/connection';

export const Posts = bookshelf.Model.extend({
  tableName: 'posts',
  comments: () => this.hasMany(Comments, 'id', 'post_id'),
});

export default {
  Posts,
};
