import { Controller, Post, Body, Get, Put, Delete,Param, ParseIntPipe, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';
import { UserGuard } from './user.guard';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param("id",ParseIntPipe) id:number ) {
        return this.service.getUser(id);
    }

    @Get("")
    @UseGuards(new UserGuard)
    findAll() {
        return this.service.getUsers();
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}