let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: 'string',
    password: 'string', 

})

module.exports = mongoose.model('User', userSchema)