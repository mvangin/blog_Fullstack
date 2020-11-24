let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let postSchema = new Schema({
    username: {type: Schema.Types.ObjectId, ref: 'User'},
    title: 'string', 
    content: 'string',
    date: 'string',
    published: 'boolean', 

})

postSchema
.virtual('url')
.get(function () {
  return '/blogs/' + this._id;
});

module.exports = mongoose.model('Post', postSchema)