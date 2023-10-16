const express = require("express");
const HomeController = require("../../controllers/home.controller");

const home = express.Router();

const homeController = new HomeController

homeRouter.get('/', homeController.indexHome);
 
module.exports = home;
