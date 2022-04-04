
const { INTERNAL_SERVER_ERROR } = require("http-status")
const httpStatus = require("http-status")
const path = require("path")



const updateProductImage = (req,res) => {
     //! 1- RESİM KONTROLÜ-------------------------------------------------------------

        if(!req?.files?.product_image){
       
            return res.status(httpStatus.BAD_REQUEST)
            .send({error: "Bu işlemi yapmak için fotoğraf dosyası göndermelisiniz"})
     
        }
        else{
            const extension = path.extname(req.files.product_image.name) 
            const fileName = `${req.files.product_image.name}${Date.now()}${extension}`
            //const folderPath = path.join(__dirname, "../../uploads/products",fileName)
            const path1 = "../../../GradiationProjectFrontend/gradiation-project-vue/src/assets/photos"
            const folderPath = path.join(path1,fileName)
             req.files.product_image.mv(folderPath, function(err){
                if(err){
                   return res.status(500).send({error:err})                    
                }  
                
            })
            return fileName
        }
}

module.exports = {
    updateProductImage
}
