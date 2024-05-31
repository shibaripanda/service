
export const botCallback = async (bot: any, service: any) => {
    try{
        bot.on('callback_query', async (ctx: any) => {
            ctx.reply('hello')
        })
    }
    catch(error){
    }
}
