const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    itemType: {
        type: String,
        enum: ['spicy', 'sweet'],
        default: 'spicy'
    },
    spicyLevel: {
        type: String,
        enum: ['less', 'regular', 'extra'],
        default: 'regular'
    },
    vegNonVeg: {
        type: String,
        enum: ['veg', 'non-veg'],
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;