//Express App
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

const { createProductController } = require("./controllers/createProductController");
mongoose.set('strictQuery', false);
mongoose.connect('Link of database here')
.then(() => app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
})).catch(() => console.log("database connection error"))

// Cors
const cors = require('cors');
app.use(cors());

//Front To Back
app.use(express.json());

app.post("/products", createProductController);

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mongoose:test@cluster0.ir5gjii.mongodb.net/shopping_cart?retryWrites=true&w=majority')
.then(() => app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
})).catch(() => console.log("database connection error"))