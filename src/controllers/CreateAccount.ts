import { Post, Controller, Res, Body } from '@nestjs/common';
import {User} from '../models/User';

const user = new User({
    login: 'login',
    password: 'password',
    email: 'email@google.com'
});

user.save((err) => {
    if (err) {
        console.log(err);
    }
    console.log('saved');
});
@Controller('user/create')
export class CreateAccount {
    @Post()

    createUser(@Res() res, @Body() body) {
        console.log(body);
        console.log(typeof body);

        res.status(201).send('created');
    }
}