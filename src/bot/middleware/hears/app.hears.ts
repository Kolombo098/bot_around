import { Context } from "telegraf";
import bot from "../../connections/token.connection"


bot.hears("hi",async (ctx: Context) => ctx.reply("Hello"));