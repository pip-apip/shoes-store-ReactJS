const ShoesModel = require("../models/Shoes");

class ShoesController {
  static async getAll(req, res) {
    try {
      const shoes = await ShoesModel.find();
      res.status(200).json({ status: "success", data: shoes });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const shoes = await ShoesModel.findById(id);
      res.status(200).json({ status: "success", data: shoes });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }

  static async add(req, res) {
    try {
      const shoesPayload = {
        nama: req.body.nama,
        kategori: req.body.kategori,
        foto: req.body.foto,
        harga: req.body.harga,
      };
      const shoes = await ShoesModel.create(shoesPayload);
      res.status(201).json({ status: "success", data: shoes });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const shoesId = req.params.id;
      const shoesPayload = {
        nama: req.body.nama,
        kategori: req.body.kategori,
        foto: req.body.foto,
        harga: req.body.harga,
      };
      const shoes = await ShoesModel.findByIdAndUpdate(shoesId, shoesPayload, {
        new: true,
      });
      res.status(200).json({ status: "success", data: shoes });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }

  static async delete(req, res) {
    try {
      const shoesId = req.params.id;
      await ShoesModel.findByIdAndDelete(shoesId);
      res.status(200).json({ status: "success" });
    } catch (error) {
      res.status(500).json({ status: "fail", error: error });
    }
  }
}

module.exports = ShoesController;
