let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: 'string',
    displayName: 'string',
    password: 'string', 
    admin: {type:'boolean', default:false},
    marketing: {type:'boolean', default:false}

})

module.exports = mongoose.model('User', userSchema)