require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.use(express.urlencoded({
    extended : true,
}));
app.use(express.json());

const empresaRouter = require("./route/empresaRouter");
app.use("/", empresaRouter);


const DB_USER = process.env.DB_USER;
const DB_PASSOWORD = encodeURIComponent(process.env.DB_PASSWORD);
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSOWORD}@cluster0.yh9xs.mongodb.net/nodedb?retryWrites=true&w=majority`
    
)
.then(() => {
    console.log("Conectado ao banco");
    app.listen(port);
   
  })
  .catch((error) => console.log(error));
