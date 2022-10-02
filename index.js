const { Telegraf, Markup } = require('telegraf')
const text = require ('./const')
const course = require ('./parser')

require ('dotenv'). config()


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Sup ${ctx.message.from.first_name ? ctx.message.from.first_name : 'meow'})`))
bot.help((ctx) => ctx.reply(text.commands))
bot.on('sticker', (ctx) => ctx.reply(course.course))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('status', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Chouse what we will do ^___^</b>', Markup.inlineKeyboard(
      [
        Markup.button.callback('Tinkoff bank', 'btn__tf'),
        Markup.button.callback('Solar staf', 'btn__colar'),
        Markup.button.callback('week', 'btn__week')
      ]
    ))
  }
  catch (e){
    ctx.reply('sorry, my creater retard')
  }
})
bot.action('btn__tf', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.reply('Now u can sell out euro: ' + course.course + '₽')
  }
  catch (e) {
    ctx.reply('sorry, my creater retard')
  }
})

bot.action('btn__week', async (ctx) => {
  try {
    await ctx.answerCbQuery()
    await ctx.reply('dude, dont foget pick https://docs.google.com/forms/d/e/1FAIpQLSfpJIKy4o-YRwuRRMdOZMLfVCaYewKwWIo4gt7tI0xNcmNhRw/viewform', {
      disable_web_page_preview: true
    })
    await ctx.replyWithHTML('Also i can remind the weekend', Markup.inlineKeyboard(
      [
        Markup.button.callback('Add', 'btn__sub'),
        Markup.button.callback('No', 'btn__unsub')
      ]
    ))
    bot.action('btn__unsub', (ctx) => {
       ctx.answerCbQuery()
       ctx.reply('okey retard')
    })
  }
  catch (e) {
    ctx.reply('sorry, my creater retard')
  }
})
bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

