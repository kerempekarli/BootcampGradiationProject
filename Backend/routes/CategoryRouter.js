const express = require("express")
const {
    addCategory,
    getAllCategories,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById
} = require("../controllers/CategoryController")
const router = express.Router()

// ROUTES

router.route("/getall").get(getAllCategories)
router.post("/add", addCategory)
router.get("/:id", getCategoryById)
router.delete("/:id", deleteCategoryById)
router.put("/:id", updateCategoryById)

module.exports = router