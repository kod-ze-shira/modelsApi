const mongoose = require("mongoose");
const customerSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    address: {
        type: String
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /^$|^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    }
})
module.exports=mongoose.model('Customer',customerSchema)