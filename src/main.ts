import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { UserGuard } from './users/user.guard';

function globalMiddleWareOne(req:Request,res:Response,next:NextFunction){
  console.log("This is the global middleware one !!!");
  next();
}

function globalMiddleWareTwo(req:Request,res:Response,next:NextFunction){
  console.log("This is the global middleware two !!!");
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  // app.use(globalMiddleWareTwo);
  // app.useGlobalGuards(new UserGuard);//for global declaration of guards
  await app.listen(3000);
}
bootstrap(); 
