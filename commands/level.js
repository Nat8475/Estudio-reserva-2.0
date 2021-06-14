const db = require('quick.db')
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { 
      return message.channel.send("eu tenho levels infinitos")
    }
    
    if(user.bot) {
      return message.channel.send("Bots Não podem ter levels")
    }
    
    let embed = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setAuthor(message.author.username,message.author.avatarURL())
    .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    .setDescription(`<:levelup:839461399578411055> | Level: \`${db.fetch(`level.${message.author.id}`) || "0"}\` \n <:xp:839461093839863818> | XP: \`${db.fetch(`xp.${message.author.id}`) || "0"}\``)
    message.inlineReply(embed)
    
  }