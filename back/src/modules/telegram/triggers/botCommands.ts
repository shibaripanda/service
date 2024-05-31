
export const botCommands = async (bot: any, service: any) => {
    try{
        bot.command([], async (ctx: any) => {
            ctx.reply('hello')
        })
    }
    catch(error){
    }
}
