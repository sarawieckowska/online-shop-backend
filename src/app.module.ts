import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CorsMiddleware } from './cors.controller';

@Module({
  imports: [],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(CorsMiddleware).forRoutes(
          {
              path: '/', method: RequestMethod.GET,
          },
      );
  }
}
