
export const botMessage = async (bot: any, service: any) => {
    try{
        bot.on('message', async (ctx: any) => {
            const camps = await service.userService.getAllUsers()
            ctx.reply(camps[0].email)
        })
    }
    catch(error){
    }
}
