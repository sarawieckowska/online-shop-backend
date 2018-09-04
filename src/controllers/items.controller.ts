import { Get, Controller, Res, Req } from '@nestjs/common';
import { Items } from '../models/Items';
import { Profile } from '../enums/messages';

@Controller('items')
export class ItemsController {

    @Get('/list')
    getProducts(@Res() res, @Req() request) {
        const callback = (err, docs) => {
            console.log(request);

            /*const user = new Items({name: 'shirt', price: '£5,99', category: 'Tops & T-Shirts'});
            user.save();*/

            // TODO filter results with category name
            if (!docs.length) {
                return res.status(403).send({message: Profile.notFound});
            }
            res.status(201).send(docs);
        };
        Items.find({}).exec(callback);
    }
}