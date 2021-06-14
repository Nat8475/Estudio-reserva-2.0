const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  
  let member = message.mentions.users.first() || message.author;
  
 let warns = await db.get(`warnsCount_${message.guild.id}-${member.id}`) || 0;
  

  const avisos = new Discord.MessageEmbed()
  .setAuthor(`📢 Avisos Membros`, message.guild.iconURL({dynamic: true}))
  .setDescription(`<:anuncio:815610282562158622> **${message.author} Possui \`${warns}\` Avisos**`)
  .setColor("BLACK")
  .setThumbnail(member.displayAvatarURL({dynamic: true}))
  .setFooter(`Author do Comando ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send(avisos)
}