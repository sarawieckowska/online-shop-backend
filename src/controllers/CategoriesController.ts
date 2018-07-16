import { Get, Controller, Res } from '@nestjs/common';
import { Categories } from '../models/Categories';
import {Profile} from '../enums/messages';

@Controller('categories')
export class CategoriesController {

    @Get('/list')
    getCategories(@Res() res) {
        const callback = (err, docs) => {
            if (!docs.length) {
                return res.status(403).send({message: Profile.notFound});
            }
            res.status(201).send(docs);
        };
        Categories.find({}).exec(callback);
    }

}