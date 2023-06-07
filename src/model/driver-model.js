const mongoose = require('mongoose');


const driverSchema = mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true},
    pic: { type: String, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" },
    mobile: { type: String, require: true },
    license: {type: String, require: true},
    address: { type: String, require: true },
}, {timestamps: true})

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;