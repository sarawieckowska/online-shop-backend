import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(): object {
    return {
        user: 'user',
        token: 'token',
    };
  }
}
