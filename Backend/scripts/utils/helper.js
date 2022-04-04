const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken")

const passwordToHash = (password) => {
    return CryptoJS.HmacSHA1(password,process.env.PASSWORD_SALT).toString();

}
const generateAccessToken = (user) => {
    return JWT.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY,{expiresIn:"1w"})
}
const generateRefreshToken = (user) => {
    return JWT.sign(user, process.env.REFRESH_TOKEN_SECRET_KEY)

}
module.exports = {
    passwordToHash,
    generateAccessToken,
    generateRefreshToken
}