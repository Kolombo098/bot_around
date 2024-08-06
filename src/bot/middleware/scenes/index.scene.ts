const { Scenes, session } = require("telegraf");
const bot = require("../../connections/token.connection");

const findJobScene = require("./findJob.scene");
const vacanciesScene = require("./vacancies.scene");
const adsScene = require("./ads.scene");
const contactTheEmployerScene = require("./contactTheEmployer.scene");
const faqScene = require("./faq.scene");

const stage = new Scenes.Stage([findJobScene, vacanciesScene, adsScene, faqScene, contactTheEmployerScene]);

bot.use(session());
bot.use(stage.middleware());

module.exports = stage;
