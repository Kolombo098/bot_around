import { Context } from "telegraf";
import bot from "../../connections/token.connection"


bot.hears("hi",async (ctx) => ctx.reply("Hello"));