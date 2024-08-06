import bot from '../../connections/token.connection'

bot.action(['findJob'], (ctx: any) => ctx.scene.enter("findJobWizard"));
// bot.action(['vacancies'], ctx => ctx.scene.enter("vacanciesWizard"));
// bot.action(['ads'], ctx => ctx.scene.enter("adsWizard"));
// bot.action(['contactTheEmployer'], ctx => ctx.scene.enter("contactTheEmployerWizard"));
// bot.action(['faq'], ctx => ctx.scene.enter("faqWizard"));