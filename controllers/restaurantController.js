const restaurantModel = require("../models/restaurantModel");

// CREATE RESTAURANT
const createRestaurant = async (req, res) => {
  try {
    // create restaurant
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    // validation
    if (!title || !coords) {
      return res.status(400).send({
        success: false,
        message: "Please provide a title and coords",
      });
    }
    // create restaurant
    const newRestaurant = new restaurantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    // save restaurant
    const restaurant = await newRestaurant.save();
    // response
    res.status(201).send({
      success: true,
      message: "New Restaurant Created Successfully",
      restaurant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Restaurant API",
      error,
    });
  }
};

// GET ALL RESTAURANTS
const getAllRestaurantController = async (req, res) => {
  try {
    // get all restaurants
    const restaurants = await restaurantModel.find({});
    if (!restaurants) {
      return res.status(404).send({
        success: false,
        message: "No Restaurants Found",
      });
    }
    // response
    res.status(200).send({
      success: true,
      totalCount: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get All Restaurants API",
      error,
    });
  }
};

// GET RESTAURANT BY ID
const getRestaurantByIdController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(400).send({
        success: false,
        message: "Please provide a restaurant id",
      });
    }
    // get restaurant by id
    const restaurant = await restaurantModel.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "No Restaurant Found",
      });
    }
    // response
    res.status(200).send({
      success: true,
      restaurant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get Restaurant By Id API",
      error,
    });
  }
};

const deleteRestaurantController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(404).send({
        success: false,
        message: "No Restaurant Found, Please Provide Restaurant ID",
      });
    }
    await restaurantModel.findByIdAndDelete(restaurantId);
    res.status(200).send({
      success: true,
      message: "Restaurant Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: "false",
      message: "Error delete Restaurant API",
      error,
    });
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurantController,
  getRestaurantByIdController,
  deleteRestaurantController,
};
