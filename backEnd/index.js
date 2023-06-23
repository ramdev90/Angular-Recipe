const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require('mongoose');


const { MongoClient, ServerApiVersion } = require("mongodb");

const productRoutes = require("./api/routes/product");
require("dotenv").config();

// const middlewares = require('./middlewares');
// const api = require('./api');

const uri = process.env.MONGOURI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

mongoose.connect(process.env.MONGOURI)
  .then(() => console.log('Connected!'));

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

// app.use('/api/v1', api);

// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);

app.use("/", productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

module.exports = app;
