import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { hostname } from "os";

@Injectable()
export class BookMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log("This is class based middleware for book module");
        let date=new Date().toString();
        console.log(req.protocol+"://"+req.get("host")+""+req.originalUrl+"\n"+req.method+"\nDate"+date+"");
        next();
    }

}