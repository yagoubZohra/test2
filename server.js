const express = require('express');

const mongoose = require('mongoose');
const userRoutes =require('./routes/userRouter');

const app = express();

app.use(express.json());



//database connection
const dbURI = 'mongodb+srv://zohrayagoub:zohrayagoubnouna@cluster0.bpgyx1a.mongodb.net/node-auth?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, })
  .then((result) => app.listen(5000,()=>{
    console.log("SERVER IS RUNNING ON PORT 5000")
}) )
  .catch((err) => console.log(err));

// routes

app.use(userRoutes);

