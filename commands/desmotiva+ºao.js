const Discord = require("discord.js");

module.exports = {
    name: "desmotivaçao",
    aliases: ["desmotivaçao"],
    description: "Como para se desmotivar",
    usage: 'j!desmotivaçao',
    category: 'diversao',

  run: async (client, message, args) => {
    message.delete();
    var lista = [       '',      ];

    var aleatorio = lista[Math.floor(Math.random() * lista.length)];

     const embed = new Discord.MessageEmbed()
        .setTitle(`Frases para te desmotivar :ab_ok:`)
        .setColor('#6400b6')
        .setDescription('Desmotivado? legal :D')
        .setImage(aleatorio)
       message.channel.send(embed);
}
}