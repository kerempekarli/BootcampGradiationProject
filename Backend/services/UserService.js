const {postgresClient} = require("./ConnectionService");
const logger = require("../logs/ProductLogger");
const uuid = require("uuid") // Giving us unique id

const _register = async (req, res) => {
    try{
    
    console.log(req.body)
    const text = "Insert INTO users (fullname, email, password, role) VALUES ($1, $2, $3, $4) RETURNING * "

    const values =  [req.body.fullname, req.body.email, req.body.password, req.body.role ]

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
    res
    .status(400)
    .send(`Kayıt işlemi başarısız`)
    }
}

const _getAllUsers = async (req, res) => {
    try{
        const text = "SELECT * FROM users"
    
        const result = await postgresClient.query(text)
        console.log(result.rows)
        return result.rows
    
    }
    catch(err){
        console.log(error);
        res.status(400).send("BAŞARISIZ")
    }
}

const _getUserById = async (req, res) => {

    try{

        const text = `select * from users where id=${req.params.id}`
    
        const result = await postgresClient.query(text)

        return result.rows

    }

    catch(error){
        console.log(error);
        res.status(400).send("BAŞARISIZ")
    }
    
}

const _deleteUserById = async (req, res) => {
    try{

        const text = `DELETE FROM users WHERE id=${req.params.id}`
    
        const result = await postgresClient.query(text)
        console.log(result.rows)
        return result.rows
    
    }
    catch(error){
        console.log(error);
        res.status(400).send("BAŞARISIZ")
    }
    
}

const _updateUserById = async (req, res) => {
    try{

        const text = `UPDATE users
        SET fullname = $1
        email = $2
        password = $3
        role = $4
        WHERE id= $5 RETURNING *`

        const data = [

            req.body.fullname,
            req.body.email,
            req.body.password,
            req.body.role,
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

const _login = async(req,res) => {
    const text = `SELECT * FROM users WHERE email=$1 AND password=$2`
    const data = [req.body.email,req.body.password]
    try{
    const result = await postgresClient.query(text,data)
    console.log(result)
    return result
    }
    catch(err){
        return res.status(400).send(err)
    }
}

const _resetPassword = async(req,res) => {

    const text = `UPDATE users
    SET password=$1
    WHERE email= $2 RETURNING *`

    const data = [
        req.password,
        req.body.email,
    ]
    const result = await postgresClient.query(text,data)

    return result;

}

module.exports = {
    _register ,
    _getAllUsers,
    _getUserById,
    _deleteUserById,
    _updateUserById,
    _login,
    _resetPassword
}