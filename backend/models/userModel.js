import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "a user must have a name"],
    },
    email: {
      type: String,
      lowecase: true,
    },
    password: {
      type: String,
      required: [true, "a user must have a password"],
      minlenght: 8,
      select: true,
    },
    mobileNumber: {
      type: Number,
      required: [true, "A user must have a Mobile No."],
      unique: true,
      length: 10,
    },
    passwordConfirm: {
      type: String,
      required: [true, `A user must confirm password`],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: `passwords are not the same!!`,
      },
    },
    passwordChangedAt: Date,
    roles: {
      type: String,
      required: [true, "The role of the user must be defined"],
      default: "visitor",
      enum: ["visitor", "guard", "admin", "student", "teacher", "employee"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.pre("save", async function (next) {
  //check if password is modified
  if (!this.isModified("password")) return next();
  //hash password
  this.password = await bcrypt.hash(this.password, 12);
  //remove confirm pass
  this.passwordConfirm = undefined;
});

userSchema.pre("save", function (next) {
  //do only if password is modified
  if (!this.isModified("password") || !this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;
  //subtract 1000 bcoz there could be a time diff between jwt generation and password saving
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassWord
) {
  const encryptedPas = await bcrypt.compare(candidatePassword, userPassWord);
  return encryptedPas;
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return changedTimeStamp > JWTTimeStamp;
  }
  return false;
};

const User = mongoose.model("User", userSchema);

export default User;
