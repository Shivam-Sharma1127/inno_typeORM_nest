import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class BookGuard implements CanActivate{

    public bookName:string="merchant of venice";// addded a key for checking of valid Book
    public password:string="shylock";// addded a key for checking of valid Book

    canActivate(context: ExecutionContext): boolean {
        const ctx=context.switchToHttp();
        const request=ctx.getRequest<Request>();
        console.log("This is a guard for a book");
        
        if(request.header("bookName") == undefined && request.header("password") == undefined) return false;
        return request.header("bookName")===this.bookName && 
        request.header("password")===this.password ;
    }

}