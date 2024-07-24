//how to get date
//how to array in reactions, nested documents created with reaction schema???
//create virtual called reactionCount somehow?

const { Schema, model } = require("mongoose");



const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },

        createdAt: {
            type: Date,
            

        },

        username: {
            type: String,
            required: true,
        },

        reactions: {

        }
    }
)

module.exports = thoughtText;