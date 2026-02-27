require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.json());

// DB Connection
async function dbConnection(){
  try{
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected");
  }catch(error){
     console.log(error);
  }
}
dbConnection();
app.use("/api", productRoutes);

app.listen(PORT, (req, res) => {
  console.log(`the server is running in port ${PORT} `);
});