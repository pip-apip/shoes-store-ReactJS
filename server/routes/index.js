const express = require("express");
const router = express.Router();
const BookController = require("../controllers/ShoesController");

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.get("/shoes", BookController.getAll);
router.get("/shoes/:id", BookController.getById);
router.post("/shoes", BookController.add);
router.put("/shoes/:id", BookController.update);
router.delete("/shoes/:id", BookController.delete);

module.exports = router;
