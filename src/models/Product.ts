import * as mongoose from 'mongoose';
import { IProduct } from '../interfaces/Product';

export interface IProductModel extends IProduct, mongoose.Document {}

const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    price: String,
    title: String,
    paragraph: String,
    photo: String
});

ProductSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    this.createdAt = new Date();
    next();
});

export const Product: mongoose.Model<IProductModel> = mongoose.model<IProductModel>('Product', ProductSchema);