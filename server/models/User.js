import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {
    type: Number,   
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

export default mongoose.model('User', userSchema);