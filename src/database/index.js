require("dotenv").config();
const environment = process.env;
const Sequelize = require("sequelize");
const UserModel = require("../user/user.model");

const sequelize = new Sequelize(
  environment.DB_NAME,
  environment.DB_USER,
  environment.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

const models = {
  UserModel: UserModel.init(sequelize, Sequelize)
};

const db = {
  ...models,
  sequelize
};

module.exports = db;
