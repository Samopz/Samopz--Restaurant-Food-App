const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createRestaurant,
  getAllRestaurantController,
  getRestaurantByIdController,
  deleteRestaurantController,
} = require("../controllers/restaurantController");

const router = express.Router();

//routes
// CREATE RESTAURANT || POST
router.post("/create", authMiddleware, createRestaurant);

// GET ALL RESTAURANTS || GET
router.get("/getAll", getAllRestaurantController);

// GET RESTAURANT BY ID || GET
router.get("/get/:id", getRestaurantByIdController);

// DELETE RESTAURANT || DELETE
router.delete("/delete/:id", authMiddleware, deleteRestaurantController)

module.exports = router;
