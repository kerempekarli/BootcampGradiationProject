const {_register,
    _getAllUsers,
    _getUserById,
    _deleteUserById,
    _updateUserById,
    _login,_resetPassword} = require("../services/UserService")
const {passwordToHash, generateAccessToken,generateRefreshToken } = require("../scripts/utils/helper")
const eventEmitter = require("../scripts/events/eventEmitter")
const httpStatus = require("http-status")
const uuid = require("uuid")

    const register = async (req, res) => {
          req.body.password = await passwordToHash(req.body.password)
          const result = await _register(req,res)
          res.status(201).send(result)
    }

    const getAllUsers = async (req, res) => {
       const result =  await _getAllUsers(req,res)
       res.status(200).send(result)
    }

    const getUserById = async (req, res) => {
        const result =  await _getUserById(req,res)
        res.status(200).send(result)

    }

    const deleteUserById = async (req, res) => {
        const result =  await _deleteUserById(req,res)
        res.status(200).send(result)
    }

    const updateUserById = async (req, res) => {

        req.body.password = await passwordToHash(req.body.password)
        const result =  await _updateUserById(req,res)
        res.status(200).send(result)
    }

    const login = async (req,res) => {
        try{
        req.body.password = passwordToHash(req.body.password)

        const result = await _login(req,res)

        if(result.rowCount == 0) return res.status(400).send("Email yada parola yanlış") 
        else{
        const user = result.rows[0]

        data = {
                ...user,
                tokens :{
                    access_token : generateAccessToken(user),
                    refresh_token : generateRefreshToken(user)
                }
        }

       return res.status(200).send(data)
            }
        }
        catch(err){
            return res.status(400).send(err)
        }
    }
        
    const resetPassword = async(req,res) => {

        const new_password = await uuid.v4()?.split("-")[0] || new Date().getTime()
        req.password = new_password
        const result = await _resetPassword(req,res)
        
        eventEmitter.emit("send_email",{
            to:req.body.email,
            subject:"Reset password",
            html:`According your request , your password were reset
             <br> Giriş yaptıktan sonra şifrenizi değiştirmeyi unutmayın</br>
             <h4>${new_password}</h4>`
        })

        res.status(httpStatus.OK).send({
            message: "Şifre sıfırlama için kayıtlı eposta adresinize geçici şifreniz gönderildi"
        })
    }

module.exports = {
    register,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById,
    login, 
    resetPassword

}