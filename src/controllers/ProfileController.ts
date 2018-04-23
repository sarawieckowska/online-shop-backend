import { Post, Controller, Res, Body } from '@nestjs/common';
import {User} from '../models/User';
import {Profile} from '../enums/messages';

@Controller('user')
export class ProfileController {

    @Post('/create')
    createUser(@Res() res, @Body() body) {
        const user = new User(body);
        user.save();
        res.status(201).send();
    }

    @Post('/login')
    login(@Res() res, @Body() body) {
        const callback = (err, docs) => {
            if (!docs.length) {
                return res.status(403).send({message: Profile.notFound);
            }
            if (body.password !== docs[0]._doc.password) {
                return res.status(403).send({message: Profile.incorrectPassword});
            }
            console.log(err);
            console.log(body);
            console.log(docs);
            res.status(202).send();
        };
        User.find({login: body.login}).exec(callback);
    }
}