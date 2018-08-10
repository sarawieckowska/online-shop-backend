import { Get, Controller, Res, Req } from '@nestjs/common';
import { Agreement } from '../models/Agreement';
import { Profile } from '../enums/messages';

@Controller('agreement')
export class AgreementController {

    @Get('/list')
    getAgreements(@Res() res, @Req() request) {
        const callback = (err, docs) => {
            console.log(request);
            /*
              const user = new Items({name: 'a shoe', price: 'expensive', category: ''});
             user.save();*/

            // TODO filter results with category name
            if (!docs.length) {
                return res.status(403).send({message: Profile.notFound});
            }
            res.status(201).send(docs);
        };
        Agreement.find({}).exec(callback);
    }
}