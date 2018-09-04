import { Get, Controller, Res } from '@nestjs/common';
import { Product } from '../models/Products';
import { Profile } from '../enums/messages';

@Controller('products')
export class ProductsController {

    @Get('/list')
    getProducts(@Res() res) {
        const callback = (err, docs) => {
            if (!docs.length) {
                return res.status(403).send({message: Profile.notFound});
            }
            res.status(201).send(docs);
        };
        Product.find({}).exec(callback);
    }

}