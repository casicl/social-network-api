//schema only 
//use mongoose's ObjectId data type
//default value is set to new ObjectId
//how to date, timestamp, use a getter method to format timestamp
//this will not be a model, but used as the reaction field's subdocument schema in the thought model\

const {Schema} = require("mongoose");

const reactionSchema = new Schema(
    {
        
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,

    },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },

        username: {
            type: String,
            required: true,
        },
//TODO if find a way to format date in thoughts, use here also (getter method to format timestamp)
        createdAt: {
            type: Date,
            default: Date.now,

        },

    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
);
module.exports = reactionSchema;
    
