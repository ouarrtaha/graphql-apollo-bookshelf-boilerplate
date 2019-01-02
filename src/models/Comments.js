import { bookshelf } from '@/db/connection';

export const Comments = bookshelf.Model.extend({
  tableName: 'comments',
});


export default {
  Comments,
};
