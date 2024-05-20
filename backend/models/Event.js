const moment = require("moment");
const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please write a title for your event"]},
    date: { type: Date},
    time: { type: Date},
    duration: { type: String},
    describe: { type: String},
    sessionNotes: { type: String}
})


module.exports = mongoose.model("Event", EventSchema)