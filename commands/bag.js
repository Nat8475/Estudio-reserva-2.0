const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let items = await db.fetch(message.author.id);
        if(items === null) items = "Você ainda nao comprou nada, digite e!store"

        const Embed = new Discord.MessageEmbed()
        .setTitle(`<:database:819286621933404181> sua bag!`)
        .setColor('BLACK')
        .addField('Seu inventário.', items)

        message.channel.send(`${message.author}`, Embed);
}