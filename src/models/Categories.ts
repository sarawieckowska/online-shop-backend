import * as mongoose from 'mongoose';
import { ICategories } from '../interfaces/categories';

export interface ICategoriesModel extends ICategories, mongoose.Document {}

const CategoriesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});

CategoriesSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    next();
});

export const Category: mongoose.Model<ICategoriesModel> = mongoose.model<ICategoriesModel>('Categories', CategoriesSchema);