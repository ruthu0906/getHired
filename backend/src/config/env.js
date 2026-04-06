// Central place to read and validate environment variables
const requiredVars = ["MONGO_URI", "JWT_SECRET", "PORT"];

requiredVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.warn(`Warning: environment variable ${varName} is not set`);
  }
});

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || "development",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
};
