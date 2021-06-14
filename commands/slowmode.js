const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**❌ Você não possui a permissão de `Gerenciar Canais` para executar este comando**",
    color: "BLACK"
  }})
  if(!message.guild.me.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**❌ Eu não possuo a permissão de `Gerenciar Canais` para executar este comando**",
    color: "BLACK"
  }})
  
if(!args[0]) return message.channel.send({embed: {
  description: "**❌ Dê um numero valido**",
  color: "BLACK"
}})
if(args[0] > 2480) return message.channel.send({embed: {
  description: "**❌ Você só pode setar um numero de `0 a 2480`**",
  color: "BLACK"
}})
if(message.content.includes(" -")) return message.channel.send({embed: {
  description: "**❌ Você não pode usar quantias negativas!**",
  color: "BLACK"
}})
  
  message.channel.setRateLimitPerUser(args[0])
  
  const rate = new Discord.MessageEmbed()
  .setDescription(`**⏳ Cooldown do chat alterado para \`${args[0]}\` Segundos**`)
  .setColor(`BLACK`)
  .setFooter(`Author do comando ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(rate)
}