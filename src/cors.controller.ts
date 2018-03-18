import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class CorsMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Origin', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
            res.header('Access-Control-Allow-Origin', 'PUT,POST,GET,DELETE,OPTIONS');
            res.header('X-Powered-By', '3.2.1');
            res.header('Content-Type', 'application/json;charset=utf-8');
            next();
        };
    }
}
