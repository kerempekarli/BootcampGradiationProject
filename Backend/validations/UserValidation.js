const Joi = require("joi");

const loginValidation = Joi.object({
    password: Joi.string().required().min(4).max(15),
    email: Joi.string().email().required().min(8)
})

const resetPasswordValidation = Joi.object({
    email: Joi.string().email().required().min(8)
})

module.exports = {
    loginValidation,
    resetPasswordValidation
}