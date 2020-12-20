let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    displayName: 'string',
    post: {type: Schema.Types.ObjectId, ref: 'Post'},
    content: 'string', 
    date: 'string',
})

module.exports = mongoose.model('Comment', commentSchema)