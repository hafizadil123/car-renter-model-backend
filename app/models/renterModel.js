/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const renterSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      nationalId: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['admin', 'car-rental-company', 'end-user'],
        default: 'end-user',
      },
      password: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: Date,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      isBlackListed: {
        type: Boolean,
        default: false,
      },
      email: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    });

const Renter = mongoose.model('renter', renterSchema);
export default Renter;
