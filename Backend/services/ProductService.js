const {postgresClient} = require("./ConnectionService");
const logger = require("../logs/ProductLogger");

 const addProduct = async (req, res,fileName) => {
    try{

    const text = "Insert INTO products (product_name, category_id, product_title, product_image) VALUES ($1, $2, $3,$4) RETURNING * "

    const values =  [req.body.product_name, req.body.category_id, req.body.product_title, fileName]

    const result = await postgresClient.query(text,values)

    // LOG   
    await logger.log({
        level:"info",
        message: result
   })
  
    return result

}
catch(error){
    console.log(error);
   return res
    .status(400)
    .send(`Başarısız ekleme işlemi 
    product_name 3 ten fazla harf almalıdır
    ve ürün açıklaması 50 den uzun olmalıdır`)
}
}

const _getAllProducts = async (req, res) => {
    try{
        const text = "SELECT * FROM products"
    
        const result = await postgresClient.query(text)

        return result.rows
    
    }
    catch(err){
        console.log(error);
        res.status(400).send("BAŞARISIZ")
    }
}

const _getProductById = async (req, res) => {
    try{
        const text = `select * from products where id=${req.params.id}`
    
        const result = await postgresClient.query(text)

        return result.rows
    
    }
    catch(error){
        console.log(error);
        res.status(400).send("BAŞARISIZ")
    }
    
}

const _deleteById = async (req, res) => {
    try{

        const text = `DELETE FROM products WHERE id=${req.params.id}`
    
        const result = await postgresClient.query(text)
        console.log(result.rows)
        return result.rows
    
    }
    catch(error){
        console.log(error);
        res.status(400).send("BAŞARISIZ")
    }
    
}

const _updateById = async (req, res) => {
    try{

        const text = `UPDATE products
        SET product_name = $1,
         category_id = $2,
        product_title = $3
        WHERE id= $4 RETURNING *`

        const data = [req.body.product_name,
            req.body.category_id,
            req.body.product_title,
            req.params.id]

        const result = await postgresClient.query(text,data)
        console.log("Update process successful ")
        return result.rows[0]
    
    }
    catch(error){
        console.log(error);
        res.status(400).send("error")
    }
} 

const _addProductPhoto = async (req,filename) => {
    try{
        const text = `UPDATE products
        SET product_image =$1
        WHERE id= $2 RETURNING *`
    
        const data = [
            filename,
            req.params.id]
    
        return result = await postgresClient.query(text,data)
    }
   catch(err){
       console.log(err)
   }
}
    
module.exports = {
    addProduct,
    _getAllProducts,
    _getProductById,
    _deleteById,
    _updateById,
    _addProductPhoto,
}