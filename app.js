const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors  = require('cors')
const session = require('express-session');
require('dotenv').config();
const indexfile = require("./router/index.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", indexfile);


const dbURI = `mongodb://localhost:27017/`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(1717);
    console.log("MongoDB connected...Welcome You are live Now !!!!!!!!!!");
  })
  .catch((err) => console.log(err));
