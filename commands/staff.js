const Discord = require("discord.js");

module.exports = {
    name: "Staff",
    aliases: ["equipe"],
    cooldow: 10,

    async run(client, message, args) {

        const embed = new Discord.MessageEmbed()
        
        .setTitle("<:Staff:810572995734143023> | Administração do Servidor.")
        .setDescription(`${message.author}, Segue nossa atual equipe abaixo:\n⠀⠀⠀⠀⠀⠀⠀⠀`)
        .addFields(
            {
                name: "Reis:",
                value: "Malaguty95.\nDanielC22.\nHeitorFra7.\nMalaguty24.\n⠀⠀⠀⠀⠀⠀⠀⠀"
            },
            {
                name: "Duque:",
                value: "nat14\n⠀⠀⠀⠀⠀⠀⠀⠀"
            },
            {
                name: "Staff:",
                value: "Nenhum\n⠀⠀⠀⠀⠀⠀⠀⠀"
            },
            {
                name: "Suporte:",
                value: "Nenhum"
            }
        )
        .setColor("BLACK")

        message.inlineReply(embed)
    }
}