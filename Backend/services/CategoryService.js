
const { postgresClient} = require("./ConnectionService");

const _addCategory = async (req, res) => {  
    try {
        const text = "Insert INTO categories (category_name) VALUES ($1) RETURNING *"

        const values = [req.body.category_name]

        const result = await postgresClient.query(text, values)
        console.log(result.rows)
         

        return result.rows
         
    } catch (error) {
        console.log(error)
    }
}

const _getall = async (req, res) => {
    try {
        const text = "SELECT * FROM categories"

        const result = await postgresClient.query(text)
        console.log(result.rows)
        return result.rows

    } catch (err) {
        console.log(err)
    }
}

const _getCategoryById = async (req, res) => {
    try {

        const text = `select * from categories where id=${req.params.id}`

        const result = await postgresClient.query(text)

        return result.rows

    } catch (error) {
        console.log(error)
    }
}

const _deleteCategoryById = async (req, res) => {
    try {

        const text = `DELETE FROM categories WHERE id=${req.params.id}`

        const result = await postgresClient.query(text)
        console.log(result.rows)
        return result.rows

    } catch (error) {
        console.log(error)
    }
}

const _updateCategoryById = async (req, res) => {
    try {

        const text = `UPDATE categories
        SET category_name = $1
        WHERE id= $2`

        const data = [
            req.body.category_name,
            req.params.id
        ]

        const result = await postgresClient.query(text, data)

        return result

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    _addCategory,
    _getall,
    _getCategoryById,
    _deleteCategoryById,
    _updateCategoryById
}