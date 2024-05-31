import { Telegraf } from 'telegraf'
import { botStart } from './triggers/botStart'
import { botMessage } from './triggers/botMessage'
import { botCallback } from './triggers/botCallback'
import { botChatMember } from './triggers/botChatMember'
import { botCommands } from './triggers/botCommands'

export const startBots = async (service: any) => {

    try{
        // console.log(await service.compService.getAllBots())
        // for(let i of await service.compService.getAllBots()){
            const bot = new Telegraf(process.env.BOT_TOKEN)
            await botStart(bot, service)
            await botMessage(bot, service)
            await botCallback(bot, service)
            await botChatMember(bot, service)
            await botCommands(bot, service)
            bot.launch({
                allowedUpdates: ['chat_member', 'callback_query', 'message', 'channel_post', 'my_chat_member'],
                dropPendingUpdates: true
            })
            .catch(async () => {
                console.log('не запустился бот')
                // await service.compService.dellBotToken(i)
                // console.log('токен удалён')
            })
            process.once('SIGINT', () => bot.stop('SIGINT'))
            process.once('SIGTERM', () => bot.stop('SIGTERM'))
        // }
    }
    catch(e){
        console.log('startBots\n' + e)
    }

}