import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassWord
) {
  const encryptedPas = await bcrypt.compare(candidatePassword, userPassWord);
  console.log(encryptedPas);
  return encryptedPas;
};
const User = mongoose.model("User", userSchema);

export default User;
