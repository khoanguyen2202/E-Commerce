const jwt = require("jsonwebtoken");

const generalAcessToken = (payload) => {
  const accessToken = jwt.sign(
    {
      payload,
    },
    "access_token",
    { expiresIn: "1h" }
  );
  return accessToken;
};

const generalRefreshToken = (payload) => {
  const accessToken = jwt.sign(
    {
      payload,
    },
    "refresh_token",
    { expiresIn: "365d" }
  );
  return accessToken;
};

module.exports = {
  generalAcessToken,
  generalRefreshToken,
};
