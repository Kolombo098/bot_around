import { config } from 'dotenv';
config(); // Инициализация переменных окружения

import { Telegraf } from "telegraf"
const token = process.env.BOT_TOKEN;

if (!token) {
    throw new Error('BOT_TOKEN is not defined');
}

const bot: any = new Telegraf(token);

export default bot;
