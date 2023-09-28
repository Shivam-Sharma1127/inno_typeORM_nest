import { Module, NestModule,MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity/user.entity';
import { UserMiddleWare } from './user.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
  exports:[]
})

export class UsersModule implements NestModule{ 
  configure(consumer:MiddlewareConsumer){
    consumer.apply(UserMiddleWare).forRoutes("users")
  }
}