import { Get, Post, Controller, Res } from '@nestjs/common';
import { Agreement } from '../models/Agreement';
import { Profile } from '../enums/messages';

@Controller('agreement')
export class AgreementController {

    @Get('/list')
    createAgreement(@Res() res, @Body() body) {
        const agreement = new Agreement(body);
        agreement.save();
        res.status(201).send();
    }

    @Post('/login')
    login(@Res() res, @Body() body) {
        const callback = (err, docs) => {
            if (!docs.length) {
                return res.status(403).send({message: Profile.notFound});
            });
        };
        Agreement.find({login: body.login}).exec(callback);
    };
}