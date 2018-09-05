import * as mongoose from 'mongoose';
import { IProducts } from '../interfaces/products';

export interface IProductsModel extends IProducts, mongoose.Document {}

const ProductsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    price: Number,
    title: String,
    description: String,
    gender: String
});

ProductsSchema.pre('save', function(next) {
    this._id = new mongoose.Types.ObjectId();
    next();
});

export const Product: mongoose.Model<IProductsModel> = mongoose.model<IProductsModel>('Products', ProductsSchema);