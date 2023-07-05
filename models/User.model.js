const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],

      unique: true,
      lowercase: true,
      trim: true,
    },

    profilePhoto: {
      type: String,
      required: false,
      imageUrl: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."],
    },

    picture: [{ type: Schema.Types.ObjectId, pictureSchema: "Picture" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
