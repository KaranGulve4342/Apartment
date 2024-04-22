const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Harshada615*",
  database: "apartment",
  insecureAuth: true,
};

module.exports = config;
