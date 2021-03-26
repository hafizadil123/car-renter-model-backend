import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const rentalCompanySchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'renter',
      },
      registrationDate: Date,
      endOfRegistrationDate: Date,
    },
    {
      timestamps: true,
    });

const RentalCompany = mongoose.model('RentalCompany', rentalCompanySchema);
export default RentalCompany;
