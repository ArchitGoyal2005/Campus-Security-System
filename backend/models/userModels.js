import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "a user must have a name"],
  },
  email: {
    type: String,
    required: [true, "a user must have a emial"],
    unique: true,
    lowecase: true,
    validator: [validator.isEmail, "please provide a valid email adress"],
  },
  password: {
    type: String,
    required: [true, "a user must have a password"],
    minlenght: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, `A user must confirm password`],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: `passwards are not the same!!`,
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
