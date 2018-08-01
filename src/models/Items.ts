import * as mongoose from 'mongoose';
import { IItems } from '../interfaces/items';

export interface IItemsModel extends IItems, mongoose.Document {}

const ItemsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    category: String,
    price: String
});

ItemsSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    next();
});

export const Items: mongoose.Model<IItemsModel> = mongoose.model<IItemsModel>('Items', ItemsSchema);