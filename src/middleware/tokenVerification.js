
const jwt = require('jsonwebtoken');
const { createError } = require('../common/Util');
const config = require('../../env.secrets.json')

const generateToken = () => {
    const payload = {
      createdAt: Date.now(),
    };
  
    const options = {
      expiresIn: '5m'
    };
  
    const token = jwt.sign(payload, config.apiKey, options);
    return token;
  };

const tokenVerification = (req, res, next) => {
  const apiKey = req.headers['api-key'];

  try {
    if (!apiKey) {
        throw createError(403, 'Forbidden');;
    }
    const newToken = generateToken();

    jwt.verify(newToken, apiKey, (err, decoded) => {
      if (err) {
        throw createError(401, 'Unauthorized');;
    }
    req.user = decoded;
    next();
 });

} catch (error) {
    return res.status(error.status).json({ error })
}
};

module.exports = {
    tokenVerification,
    generateToken
}