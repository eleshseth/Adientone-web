import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  positionInterested: {
    type: String,
    required: true,
    trim: true,
  },
  aboutYourself: {
    type: String,
    required: true,
    trim: true,
  },
  resume: {
    type: String, // File path for uploaded resume
    required: false,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'interview', 'rejected', 'hired'],
    default: 'pending',
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('JobApplication', jobApplicationSchema);
