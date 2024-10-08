import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
