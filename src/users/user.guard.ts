import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class UserGuard implements CanActivate{

    public key:string="JHGFD#$%GHJHGVCVBNJHGFD";// addded a key for checking of valid users
    canActivate(context: ExecutionContext): boolean {
        const ctx=context.switchToHttp();
        const request=ctx.getRequest<Request>();
        console.log("This is a guard for a Users");
        
        if(request.header("key") == undefined) return false;
        return request.header("key")=== this.key;
    }

}