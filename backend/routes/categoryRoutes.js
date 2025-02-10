const express = require("express")
const { addCategory, listCategories, singleCategory, removeCategory } = require("../controllers/categoryController")
const upload = require("../config/multer")
const  categoryRouter= express.Router()

categoryRouter.post("/add", upload.single("image"), addCategory);
categoryRouter.get("/list", listCategories);
categoryRouter.get("/:id", singleCategory);
categoryRouter.delete("/:id", removeCategory);

module.exports = categoryRouter;