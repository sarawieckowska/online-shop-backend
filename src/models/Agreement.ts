import * as mongoose from 'mongoose';
import { IAgreement } from '../interfaces/agreement';

export interface IAgreementModel extends IAgreement, mongoose.Document {}

const AgreementSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    paragraph: Array,
    name: String
});

AgreementSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    this.createdAt = new Date();
    next();
});

export const Agreement: mongoose.Model<IAgreementModel> = mongoose.model<IAgreementModel>('Agreement', AgreementSchema);