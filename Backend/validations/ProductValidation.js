const Joi = require("joi")
const { add } = require("nodemon/lib/rules")

const addValidation = Joi.object({

    product_name : Joi.string().required().min(3),
    category_id : Joi.number().required(),
    product_title : Joi.string().required().min(50).max(1000)

})
       
module.exports =  {
    addValidation,
    
}