// const mongoose =require('mongoose')
const mongoose = require('mongoose')
const { Schema } = mongoose;

// const O/
// const Order
// const OrderScj
// 
const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        // required:
        required: true,
    },
});
// module.exports = mongoose.model('orderData', OrderSchema)
module.exports = mongoose.model('order', OrderSchema)