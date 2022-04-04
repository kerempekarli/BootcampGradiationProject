const express = require("express");
const config = require("./config")
const helmet = require("helmet")
const productRoute = require("./routes/ProductRouter")
const categoryRoute = require("./routes/CategoryRouter")
const userRoute = require("./routes/UserRouter")
const events = require("./scripts/events")
const path = require("path")
const fileUpload = require("express-fileupload")

const {
  postgresClient
} = require("./services/ConnectionService")



events()
config()

const app = express()
app.use(helmet())
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.use(fileUpload())
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.listen(process.env.APP_PORT, () => {

  console.log("Sunucu ayağa kalktı!");
  app.use("/uploads", express.static(path.join(__dirname,"/uploads/products/alp-daglari-gezilecek-yerler.jpg"))) // Dinamik yapılacak ileride
  app.use("/products", productRoute)
  app.use("/categories", categoryRoute)
  app.use("/users", userRoute)  

  postgresClient.connect(err => {
    if (err) {
      console.log("connection error", err.stack);
    } else {
      console.log("Database bağlantısı başarılı")
    }
})
});