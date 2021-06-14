const db = require('quick.db')
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: "setsuggestions",
    description: "Set the suggestions channel in order to use the suggestions command!",
    aliases: ['sugchan', 'suggestionschannel'],
    usage: "[p]setsuggestions <Channel Mention, ID>",
    category: "configuration",
    run: async(bot, message, args)=>{
        var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name === `${args[0]}`)
        if(!message.member.permissions.has("MANAGE_CHANNELS")){
            return message.channel.send(":no_entry_sign: | Você não tem permissão para usar este comando!")
        }
        if(!args[0]) {
            return message.channel.send(":no_entry_sign: | PorFavor, mencione um canal ou use um ID válido.")

        }channel.createWebhook(bot.user.username, bot.user.displayAvatarURL())
        await db.set(`suggestchan_${message.guild.id}`, channel.id)
        
        message.channel.send(`✅ | Sucesso, canal de sugestões definido em  <#${channel.id}>`)
        var embed = new MessageEmbed()
            .setTitle("Sugestão setada.")
            .setDescription("As sugestões serão enviadas para este canal a partir de agora.")
            .setFooter(`Use, m.suges!`)
            .setColor(`GREEN`)
            .setTimestamp()
        channel.send(embed)
    }
} 