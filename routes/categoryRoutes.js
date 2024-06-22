const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
} = require("../controllers/categoryController");

const router = express.Router();

//routes
// CREATE CATEGORY
router.post("/create", authMiddleware, createCatController);

// GET ALL CAT
router.get("/getAll", getAllCatController);

// UPDATE CAT
router.put("/update/:id", authMiddleware, updateCatController);

// DELETE CAT
router.delete("/delete/:id", authMiddleware, deleteCatController);

module.exports = router;
