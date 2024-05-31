import { Injectable } from '@nestjs/common';
import { CompsService } from 'src/comps/comps.service';
import { startBots } from 'src/modules/telegram/startBots';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AppService {

    constructor(private userService: UsersService,
                private compService: CompsService){}

    async onApplicationBootstrap() {
        startBots({compService: this.compService, userService: this.userService})
    }
}
