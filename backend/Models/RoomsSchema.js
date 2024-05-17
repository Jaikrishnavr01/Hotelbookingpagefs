const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({

    roomType: String,
    roomNumber: Number,
    roomStatus: String,
    roomGuestName: String,
    roomGuestEmail: String,
    roomGuestPhone: String,
    roomCapacity: String,
    roomNights: String,
    roomCheckIn: String,
    roomCheckOut: String,
    roomPrice: Number
})

module.exports = mongoose.model("rooms", RoomSchema)