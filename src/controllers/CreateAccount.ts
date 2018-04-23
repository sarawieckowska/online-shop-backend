import { Post, Controller, Res, Body } from '@nestjs/common';
import {User} from '../models/User';

@Controller('user')
export class CreateAccount {

    @Post('/create')
    createUser(@Res() res, @Body() body) {
        const user = new User(body);
        user.save();
        res.status(201).send();
    }

    @Post('/login')
    login(@Res() res, @Body() body) {
        console.log(body);
        res.status(201).send();
    }
}