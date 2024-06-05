import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain 3 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain 3 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "phone must contain exact 10 digit"],
    maxLength: [10, "phone must contain exact 10 digit"],
  },
  message: {
    type: String,
    required: true,
    minLength: [10, "message must contain at least 10 characters"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
