import { Get, Controller, Res, Req } from '@nestjs/common';
import { Product } from '../models/Product';
import { Profile } from '../enums/messages';

@Controller('product')
export class ProductController {

    @Get('/list')
    getProduct(@Res() res, @Req() request) {
        const callback = (err, docs) => {
            console.log(request);
            const user = new Product({price: '£20,99', title: 'Blouse', paragraph: 'something', photo: 'something'});
            user.save();
            if (!docs.length) {
                return res.status(403).send({message: Profile.notFound});
            }
            res.status(201).send(docs);
        };
        Product.find({}).exec(callback);
    }
}