const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByRestaurantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

// CREATE FOOD
router.post("/create", authMiddleware, createFoodController);

// GET ALL FOOD
router.get("/getAll", getAllFoodsController);

// GET SINGLE FOOD
router.get("/get/:id", authMiddleware, getSingleFoodController);

// GET BY RESTAURANT ID
router.get(
  "/getByRestaurant/:id",
  authMiddleware,
  getFoodByRestaurantController
);

// UPDATE FOOD BY ID
router.put("/update/:id", authMiddleware, updateFoodController);

// DELETE FOOD BY ID
router.delete("/delete/:id", authMiddleware, deleteFoodController);

// PLACE ORDER
router.post("/placeorder", authMiddleware, placeOrderController);

// ORDER STATUS
router.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController
);

module.exports = router;
