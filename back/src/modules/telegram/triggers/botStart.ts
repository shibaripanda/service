
export const botStart = async (bot: any, service: any) => {
    try{
        bot.start(async (ctx: any) => {
            ctx.reply('hello')
        })
    }
    catch(error){
    }
}
