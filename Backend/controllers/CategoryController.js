const {
    _addCategory,
    _getall,
    _getCategoryById,
    _deleteCategoryById,
    _updateCategoryById
} =
require("../services/CategoryService")


const addCategory = async (req, res) => {
    const result = await _addCategory(req,res);
    res.status(201).send(result)    
}

const getAllCategories = async (req, res) => {
    const result = await _getall()
    res.status(200).send(result)
}

const getCategoryById = async (req, res) => {
    const result = await _getCategoryById(req)
    res.status(200).send(result)
}

const deleteCategoryById = async (req, res) => {
    const result = await _deleteCategoryById(req)
    res.status(200).send("Succesfully deleted")

}

const updateCategoryById = async (req, res) => {
    
    const result = await _updateCategoryById(req)

    res.status(200).send("Successfuly updated")
}

module.exports = {
    addCategory,
    getAllCategories,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById

}