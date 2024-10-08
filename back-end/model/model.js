const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password:{
        type: String,
        required: [true, 'password field is required']
    },
    date : {
        type: Date,
        default : Date.now
    }
});

const contactSchema = new Schema({
    _id: { 
        type: Schema.Types.ObjectId, auto: true 
    },
    name : {
        type: String,
        required: [true, 'name field is required']
    },
    phone : {
        type: String,
        required: [true, 'phone_no field is required']
    },
    email : {
        type: String,
        required: [true, 'email field is required']
    },
    address : {
        type: String,
        required: [true, 'address field is required']
    }

})

const userContacts = new Schema({
    contacts: [contactSchema] // Array to store contacts
  });

const User = mongoose.model('users',UserSchema);
const Contact = mongoose.model('contacts',userContacts);

module.exports = {
    User,
    Contact
};