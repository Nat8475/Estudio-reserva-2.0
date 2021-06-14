const Discord = require("discord.js");
const { MessageEmbed } = require ("discord.js"); 
const fs = require("fs");
const ms = require("ms");

module.exports =  {
  name: "rename",
  category: "Moderação",
  description: "Change name a people",
  usage: "rename <@name> <newname>",

run : (client, message, args) => {
  let newname = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("<a:Sirene:810572998037733397> **| Você não tem permissão para usar este comando! **");
  if (!user) return message.channel.send('<a:Sirene:810572998037733397> **| Fale um nickname por favor!**').catch(console.error);
  if (user === message.author.id) return message.channel.send('I can\' let you do that, self-harm is bad🤦');
 message.guild.member(user).setNickname(newname).catch(console.error);
 
  const embed = new MessageEmbed()
 .setTitle ("Alteração de nome!")
 .setColor ("BLACK")
 .setDescription (`<a:Certo:811281368705007676>** | Nome do ${user} alterado com sucesso ${newname}!**`)
 .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
 .setTimestamp()
 
message.channel.send(embed);
}
  };