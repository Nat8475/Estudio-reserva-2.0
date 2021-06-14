const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Você precisa da permissão de `Administrador` para executar este comando**",
    color: "BLACK"
  }})
  
  let member = message.mentions.users.first()
  if(!member) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Não mencionou um usuario para remover as warns**",
    colot: "BLACK"
  }})
  

  let warns = await db.get(`warnsCount_${message.guild.id}-${member.id}`)
  
  if(!args[1]) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Dê uma quantia de warns a ser removida**",
    color: "BLACK"
  }})
  
  if(message.content.includes(" -")) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397>| **Você não pode retirar uma quantia negativa de warns**",
    color: "BLACK"
  }})
  
  if(member.id === message.author.id) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Não podes retirar warns de você mesmo!**",
    color: "BLACK"
  }})
  
  
  if(warns < args[1]) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Não podes retirar warns que o user não possui**",
    color: "BLACK"
  }})
  
  const rwarns = new MessageEmbed()
  .setTitle("<a:Sirene:810572998037733397> Remove Aviso")
  .setColor("BLACK")
  .setFooter(`Aviso Removido Efetuado`, message.author.displayAvatarURL())
  .addField("<:Users_2:810574844818227230> Removido de", `\`${member.tag}\``)
  .addField("<:policia:821112503491887187> Removido por", `\`${message.author.tag}\``)
  .addField("<:prancheta:821113194697326652> Quantia", `\`${args[1]}\``)
  message.channel.send(rwarns)
  
  db.subtract(`warnsCount_${message.guild.id}-${member.id}`, args[1])
  
}
