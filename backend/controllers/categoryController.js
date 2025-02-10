const Category = require("../models/categoryModel");

//  Add a New Category
const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const imageFile = req.file;

        if (!name) {
            return res.status(400).json({ success: false, message: "Category name is required" });
        }

        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Category image is required" });
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${imageFile.filename}`;

        const newCategory = new Category({ name, image: imageUrl });

        await newCategory.save();
        res.status(201).json({ success: true, message: "Category created", category: newCategory });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// List All Categories
const listCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json({ success: true, categories });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get Single Category by ID
const singleCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.json({ success: true, category });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a Category
const removeCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        res.json({ success: true, message: "Category deleted", deletedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { addCategory, listCategories, singleCategory, removeCategory };
