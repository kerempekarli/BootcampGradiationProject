const express = require("express")
const {validate} = require("../middlewares/validate")
const Validations = require("../validations/UserValidation")
const {  register,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById,
    resetPassword,
    login, } = require("../controllers/UserController")

const router = express.Router()
// validate(Validations.loginValidation) EKLENCEK
router.get("/getall", getAllUsers)  
router.route("/register").post(register)
router.get("/:id", getUserById)
router.delete("/:id", deleteUserById)
router.route("/:id").put(updateUserById)
router.route("/login").post(login)
router.route("/reset-password").post(validate(Validations.resetPasswordValidation),resetPassword)

module.exports = router