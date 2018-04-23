import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/user';

export interface IUserModel extends IUser, mongoose.Document {}

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    createdAt: Date,
    login: String,
    password: String,
    firstName : String,
    lastName : String
});
UserSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    this.createdAt = new Date();
    next();
});

export const User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('User', UserSchema);