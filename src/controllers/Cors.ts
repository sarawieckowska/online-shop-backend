import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as cors from 'cors';

@Middleware()
export class CorsMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware {
        return cors();
    }
}
