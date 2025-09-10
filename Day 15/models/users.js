const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    resetTokenPassword: {
        type: String,
        default:null
    },
    resetTokenPasswordExpired: {
        type: Date,
    },
    otp: {
        type: String,
        default:null
    },
    otpExpaired: {
        type: Date,
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
