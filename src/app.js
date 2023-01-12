//Express App
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

const { getProductsController } = require('./controllers/getProductsController');
const { createProductController } = require("./controllers/createProductController");
const { registerController } = require('./controllers/registerController');
const { loginController } = require('./controllers/loginController');
const { getProductController } = require('./controllers/getProductController');
const { updateProductController } = require('./controllers/updateProductController');

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
app.post("/register", registerController);
app.post("/login", loginController);




app.get("/products", getProductsController);
app.get("/products/:productId", getProductController);



app.patch("/products/:productId", updateProductController);



mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mongoose:test@cluster0.ir5gjii.mongodb.net/shopping_cart?retryWrites=true&w=majority')
.then(() => app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
})).catch(() => console.log("database connection error"))