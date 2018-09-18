import * as mongoose from 'mongoose';
import { IProduct } from '../interfaces/products';

export interface IProductModel extends IProduct, mongoose.Document {}

const ProductsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: String,
    price: Number,
    title: String,
    description: String,
    gender: String
});

ProductsSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    next();
});

export const Product: mongoose.Model<IProductModel> = mongoose.model<IProductModel>('Products', ProductsSchema);