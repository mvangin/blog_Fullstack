let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: 'string',
    password: 'string', 
    admin: {type:'boolean', default:false}

})

module.exports = mongoose.model('User', userSchema)