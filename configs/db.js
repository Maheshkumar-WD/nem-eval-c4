const mongoose = require("mongoose");
require("dotenv").config();
let MONGO_URL = process.env.MONGODB_URL
const connection = mongoose.connect(MONGO_URL);

module.exports = {connection};