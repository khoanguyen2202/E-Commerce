const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generalAcessToken, generalRefreshToken } = require("./JwtService");
const jwt = require("jsonwebtoken");


const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;
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

const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin;
    try {
      const checkUser = await User.findOne({
        email: email,
      });

      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined.",
        });
      }
      const comparePassword = bcrypt.compareSync(password, checkUser.password);
      if (!comparePassword) {
        resolve({
          status: "OK",
          message: "The Password is incorrect.",
        });
      }

      const accessToken = await generalAcessToken({
        id: checkUser._id,
        isAdmin: checkUser.isAdmin,
      });

      const refreshToken = await generalRefreshToken({
        id: checkUser._id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        status: "OK",
        message: "SUCCESS.",
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });
      console.log("checkUser", checkUser);

      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined.",
        });
      }

      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
      console.log("updatedUser", updatedUser);

      resolve({
        status: "OK",
        message: "SUCCESS.",
        data: updatedUser,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({ _id: id });

      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined.",
        });
      }

      const deletedUser = await User.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete user success.",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUsers = await User.find();

      resolve({
        status: "OK",
        message: "SUCCESS.",
        data: allUsers,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetailUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ _id: id });

      if (user === null) {
        resolve({
          status: "OK",
          message: "The user is not defined.",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS.",
        data: user,
      });
    } catch (error) {
      reject(error);
    }
  });
};


module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailUser,
 
};
