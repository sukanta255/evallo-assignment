const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const eventRoute = require("./routes/eventRoute")


dotenv.config();
const cors = require("cors");


 
mongoose.connect(process.env.MONGO_URL)
.then(_=> console.log("db connection successful"))
.catch(err=> console.log("db connection fail"))




app.use(express.json({limit: '50mb'}));
app.use(cors()) 
app.use("/api/events", eventRoute)



app.listen(process.env.PORT||8080, _=> console.log("backend server is running on port: "+ process.env.PORT))