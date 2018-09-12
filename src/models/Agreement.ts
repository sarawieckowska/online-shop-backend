import * as mongoose from 'mongoose';
import { IAgreement } from '../interfaces/agreement';

export interface IAgreementModel extends IAgreement, mongoose.Document {}

const AgreementSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    title: String,
    paragraph: String,
    paragraph1: String,
    paragraph2: String,
    list: String,
    list1: String,
    list2: String,
    list3: String,
    list4: String,
    list5: String
});

AgreementSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    this.createdAt = new Date();
    next();
});

export const Agreement: mongoose.Model<IAgreementModel> = mongoose.model<IAgreementModel>('Agreement', AgreementSchema);