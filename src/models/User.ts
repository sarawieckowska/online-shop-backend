import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/user';
import * as bcrypt from 'bcrypt-nodejs';

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
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    this.createdAt = new Date();
    next();
});

export const User: mongoose.Model<IUserModel> = mongoose.model<IUserModel>('User', UserSchema);