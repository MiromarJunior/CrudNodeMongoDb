require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const cors = require('cors');
app.use(express.json());


app.use(cors());
app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
  
  app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 5000')
  })

app.use(express.urlencoded({
    extended : true,
}));


const empresaRouter = require("./route/empresaRouter");
app.use("/", empresaRouter);




const DB_USER = process.env.DB_USER;
const DB_PASSOWORD = encodeURIComponent(process.env.DB_PASSWORD);
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSOWORD}@cluster0.yh9xs.mongodb.net/nodedb?retryWrites=true&w=majority`
    
)
.then(() => {
    console.log("Conectado ao banco");
    
   
  })
  .catch((error) => console.log(error));
