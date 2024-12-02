const Item = require('../models/item');
const Category = require('../models/category');
const path = require('path');

// Create Item
exports.createItem = async (req, res) => {
    try {
        const { name, ingredients, price, discount, category, itemType, spicyLevel, vegNonVeg } = req.body;
        const image = req.file.path ? req.file.path : null;
        const imageUrl = image ? `${req.protocol}://${req.get('host')}/${image}` : null;

        if (!name || !ingredients || !price || !category || !itemType || !vegNonVeg || !image) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const item = new Item({ name, ingredients, price, discount, category, itemType, spicyLevel, vegNonVeg, image: imageUrl });

        await item.save();
        res.status(201).json(item);
    } catch (error) {
        console.error("Error in createItem:", error);
        res.status(500).json({ message: 'Error creating item', error: error.message });
    }
};

// Get All Items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find().populate('category');
        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Update Item
exports.updateItem = async (req, res) => {
    try {
        const { name, ingredients, price, discount, category, itemType, spicyLevel, vegNonVeg } = req.body;
        const image = req.file ? req.file.path : null;
        const imageUrl = image ? `${req.protocol}://${req.get('host')}/${image}` : null;

        const updatedData = { name, ingredients, price, discount, category, itemType, spicyLevel, vegNonVeg };
        if (image) updatedData.image = imageUrl;

        const item = await Item.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// Delete Item
exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
