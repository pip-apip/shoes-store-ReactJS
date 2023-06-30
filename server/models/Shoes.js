const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShoesSchema = new Schema(
  {
    nama: { type: String, required: true },
    kategori: { type: String, required: true },
    foto: { type: String, required: true },
    harga: { type: Number, required: true },
  },
  { collection: "shoes" }
);

module.exports = mongoose.model("SepatuModel", ShoesSchema);
