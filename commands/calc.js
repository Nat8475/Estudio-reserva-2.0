const math = require('mathjs');
const Discord = require("discord.js");

module.exports = {
    name: "calc",
    aliases: ["calc"],
    description: "Comando para calcular",
    usage: 'e!calc',
    category: 'diversao',

  run: async (client, message, args) => {

        if(!args[0]) return message.channel.send('Por favor, escreva uma questão');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Por favor, escreva uma questão válida')
        }

        const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle('Calculando sua Questão')
        .addField('Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Resposta', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}