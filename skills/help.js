//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Help? Sério? google.com meu amigo. Agora para de pedir ajuda e vai pra academia. Frango. \n"
        bot.reply(message, text);
    });
}
