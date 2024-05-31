
export const botChatMember = async (bot: any, service: any) => {
    try{
        bot.on('my_chat_member', async (ctx: any) => {
            // ctx.reply('hello')
        })
    }
    catch(error){
    }
}
