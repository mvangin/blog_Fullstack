let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let postSchema = new Schema({
    username: {type: Schema.Types.ObjectId, ref: 'User'},
    title: 'string', 
    content: 'string',
    date: 'string',
    published: {type:'boolean', default:false},
    comment: {type: Schema.Types.ObjectId, ref: 'Comment'}


})


module.exports = mongoose.model('Post', postSchema)