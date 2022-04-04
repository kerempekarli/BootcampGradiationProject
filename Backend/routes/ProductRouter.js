const {validate} = require("../middlewares/validate")
const validations = require("../validations/ProductValidation")
const express = require("express")
const {
    add,
    getAllProducts,
    getProductById,
    deleteById,
    updateById,
    uploadPhoto,
    getProductBySearchInput
} = require("../controllers/ProductController")
const authenticateToken = require("../middlewares/authanticate")


const router = express.Router()

// ROUTES


// AUTHENTİCATİONLARI EKLEYECEĞİM. FRONTEND TARAFINI DENEMEK İÇİN GEÇİCİ OLARAK KALDIRDIM.

router.route("/getall").get(getAllProducts)
router.route("/add").post(add)          // AuthenticateToken eklenecek 
router.get("/:id", getProductById)     // AuthenticateToken eklenecek 
router.delete("/:id",authenticateToken, deleteById)
router.route("/:id").put(authenticateToken, validate(validations.addValidation), updateById)
router.route("/:id/uploadphoto").post(uploadPhoto)  // AuthenticateToken eklenecek 
router.route("/search",getProductBySearchInput)     // ELASTICSEARCH 

module.exports = router
