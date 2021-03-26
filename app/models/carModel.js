import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const carSchema = new Schema(
    {
      companyId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'RentalCompany',
      },
      image: {
        type: String,
        required: true,
      },
      carPlate: {
        type: String,
        required: true,
        unique: true,
      },
      carModel: {
        type: Number,
        required: true,
      },

      ownedBy: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      totalMieage: {
        type: Number,
        required: true,
      },
      status: {
        type: Boolean,
        required: true,
      },
      benefits: [String],
      registrationDate: Date,
      endOfRegistrationDate: Date,
    },
    {
      timestamps: true,
    });

const Car = mongoose.model('Car', carSchema);
export default Car;
