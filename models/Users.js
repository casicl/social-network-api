//look into mongoose email matching validation for email, regex?
//array of _id for user thoughts referencing thoughts model???
//array of _id referencing user model?????
//virtual for friendcount that retrieves length of user's friends array on query
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  // var validateEmail = function(email) {
  //     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     return re.test(email)
  // };
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      // validate: [validateEmail, "Please provide a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual("friendCount")

  .get(function () {
    return this.friends.length;
  });
const User = model("User", userSchema);

module.exports = User;
