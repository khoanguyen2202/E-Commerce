const ProductService = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
    const { name, image, type, price, countInStock, rating, description } =
      req.body;
    console.log("req.body", req.body);
    if (!name || !image || !type || !price || !countInStock || !rating) {
      return res.status(200).json({
        status: "ERROR",
        message: "The input is required",
      });
    }

    const respone = await ProductService.createProduct(req.body);
    return res.status(200).json(respone);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createProduct,
};
