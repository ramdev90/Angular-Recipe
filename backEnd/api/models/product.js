const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    imagePath: { type: String, required: true },
    description: { type: String, required: true },
    // productPrice: { type: String, required: true },
    // productQty: { type: String, required: true },
    // sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", Product);


//need to add
// public ingredients: Ingredient[];
