import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  gender: String,
  name: {
    title: String,
    first: String,
    last: String
  },
  location: {
    street: {
      number: Number,
      name: String
    },
    city: String,
    state: String,
    country: String
  },
  email: String,
  phone: String,
  picture: {
    large: String,
    medium: String,
    thumbnail: String
  },
  dob: {
    date: Date,
    age: Number
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema); 