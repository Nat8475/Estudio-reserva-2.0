const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    nome: "casamento",
    description: "Comando para ver as informações do Casamento.",

    async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor("black")
        .setDescription("OI")

        return message.inlineReply(embed)

    }
}