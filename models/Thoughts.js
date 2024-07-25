//how to get date, set value to current timestamp, use getter method to format timestamp on query
//how to array in reactions, nested documents created with reaction schema???
//create virtual called reactionCount somehow?


const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reactions")


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
            default: Date.now,
            timestamps: true,
            

        },

        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],

        }, 
        {
        toJSON: {
            getters: true,
        },
        }
    
);

const Thought = model("Thought", thoughtSchema)
module.exports = Thought;