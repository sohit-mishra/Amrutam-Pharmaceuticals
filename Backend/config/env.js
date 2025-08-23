require("dotenv").config();

const env = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test',
  FRONTED_URL: process.env.FRONTED_URL || 'http://localhost:5173',
};

module.exports = env;
