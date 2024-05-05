const Product = require("../models/ProductModel");
const bcrypt = require("bcrypt");

const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;
    try {
        const checkUser = await User.findOne({
          email: email,
        });
        if (checkUser !== null) {
          resolve({
            status: "OK",
            message: "The email is already exist.",
          });
        }
        const hash = bcrypt.hashSync(password, 10);
        console.log(hash);
        const createdUser = await User.create({
          name,
          email,
          password: hash,
          phone,
        });
        if (createdUser) {
          resolve({
            status: "OK",
            message: "SUCCESS.",
            data: createdUser,
          });
        }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createProduct,
};
