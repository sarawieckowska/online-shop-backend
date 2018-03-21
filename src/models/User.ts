import * as mongoose from 'mongoose';
import {IUser} from '../interfaces/user';

export interface IUserModel extends IUser, mongoose.Document {}

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: Number,
    email: String,
    createdAt: Date,
    login: String,
    password: String,
    firstName : String,
    lastName : String
});
UserSchema.pre('save', function(next) {
    const now = new Date();
    this._id = new mongoose.Types.ObjectId();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

export const User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('User', UserSchema);