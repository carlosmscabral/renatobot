//
// Command: help
//
module.exports = function (controller) {

    controller.hears([/^help$/], 'direct_message,direct_mention', function (bot, message) {
        var text = "Ajuda? Sério? google.com meu amigo. E para de pedir ajuda e vai pra academia. Frango!"
        bot.reply(message, text);
    });
}
