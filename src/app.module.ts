import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { ProfileController } from './controllers/ProfileController';
import { CorsMiddleware } from './controllers/Cors';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');
@Module({
  imports: [],
  controllers: [ProfileController],
  components: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(CorsMiddleware).forRoutes( { path: '*', method: RequestMethod.ALL }, );
  }
}
