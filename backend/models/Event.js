const moment = require("moment");
const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please write a title for your event"]},
    date: { type: Date, required: [true, "Please write a date for your event"]},
    time: { type: Date, required: [true, "Please write a time for your event"]},
    duration: { type: String, required: [true, "Please write a duration for your event"]},
    describe: { type: String, required: [true, "Please write a describe for your event"]},
    participants: [{ type: String, required: [true, "Please write a participants for your event"] }],
    sessionNotes: { type: String, required: [true, "Please write a sessionNotes for your event"]}
})


module.exports = mongoose.model("Event", EventSchema)