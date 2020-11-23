let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let messageSchema = new Schema({
    username: {type: Schema.Types.ObjectId, ref: 'User'},
    title: 'string', 
    content: 'string',
    date: 'string',
    published: 'boolean' 

})

module.exports = mongoose.model('User', messageSchema)