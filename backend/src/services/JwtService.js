const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generalAcessToken = (payload) => {
  const accessToken = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "30s" }
  );
  return accessToken;
};

const generalRefreshToken = (payload) => {
  const refreshToken = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );
  return refreshToken;
};

const refreshTokenJwtService = (token) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("token", token);
      jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
          resolve({
            status: "ERROR",
            message: "The authentication.",
          });
        }
        const { payload } = user;
        const access_token = await generalAcessToken({
          id: payload?.id,
          isAdmin: payload?.isAdmin,
        });
        console.log("access_token", access_token);
        resolve({
          status: "OK",
          message: "SUCCESS.",
          access_token,
        });
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  generalAcessToken,
  generalRefreshToken,
  refreshTokenJwtService,
};
