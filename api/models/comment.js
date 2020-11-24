let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    username: {type: Schema.Types.ObjectId, ref: 'User'},
    content: 'string', 
    date: 'string',
    post: {type: Schema.Types.ObjectId, ref: 'Post'}
})

commentSchema
.virtual('url')
.get(function() {
    return '/blogs/comment/' + this._id
})
module.exports = mongoose.model('Comment', commentSchema)