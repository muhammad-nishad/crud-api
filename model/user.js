const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    gender: {
        type: String,
        required: [true, 'gender is required']
    },
    dob: {
        type: String,
        required: [true, 'dob is required']
    },
    city: {
        type: String,
        required: [true, 'city is required']
    },
    state: {
        type: String,
        required: [true, 'state is required']
    },
    pincode: {
        type: String,
        required: [true, 'pincode is required']
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }


})
module.exports = mongoose.model('user', userModel)