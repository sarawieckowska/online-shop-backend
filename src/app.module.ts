import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CreateAccount } from './controllers/CreateAccount';
import { CorsMiddleware } from './controllers/Cors';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');
@Module({
  imports: [],
  controllers: [CreateAccount],
  components: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(CorsMiddleware).forRoutes( { path: '*', method: RequestMethod.ALL }, );
  }
}
