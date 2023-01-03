//Express App
const express = require('express')
const app = express()
const port = 3000
//Mongoose
const mongoose = require('mongoose');
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

//Schemas
const kittySchema = new mongoose.Schema({
  name: String
});

//Models
const Kitten = mongoose.model('Kitten', kittySchema);



app.get('/xxx', async (req, res) => {
  const instance = new Kitten({
    name: 'aaa'
  });
  await instance.save();

  instance.save(function (err) {
    // Nothing
  });
  res.send("Hello Pagpougga!")
});

