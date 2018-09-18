import { Post, Controller, Res, Body } from '@nestjs/common';
import { User } from '../models/User';
import { Profile } from '../enums/messages';
import * as bcrypt from 'bcrypt-nodejs';

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
                return res.status(403).send({message: Profile.notFound});
            }
            bcrypt.compare(body.password, docs[0]._doc.password, (err, result) => {
                if (!result) {
                    return res.status(403).send({message: Profile.incorrectPassword});
                }
                res.status(202).send({
                    createdAt: docs[0].createdAt,
                    email: docs[0].email,
                    _id: docs[0]._id
                });
            });
        };
        User.find({email: body.email}).exec(callback);
    }
}