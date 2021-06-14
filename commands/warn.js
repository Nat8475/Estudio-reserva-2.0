const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Você precisa da permissão de `Gerenciar Cargos` para executar este comano",
    color: "BLACK"
  }})
  
  let member = message.mentions.users.first() 
  if(!member) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Você deve mencionar um usuário a ser Avisado**",
    color: "BLACK"
  }})
  
  if(member.id === message.author.id) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Não podes dar warn em você mesmo**",
    color: "BLACK"
  }})
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) return message.channel.send({embed: {
    description: "<a:Sirene:810572998037733397> | **Você precisa setar um motivo para avisar o usuario**",
    color: "BLACK"
  }})
  
  const aviso = new Discord.MessageEmbed()
  .setTitle("<a:Sirene:810572998037733397> Aviso Membro")
   .addField("<:Users_2:810574844818227230> Avisado", `\`${member.tag}\``)
  .addField("<:policia:821112503491887187> Avisado por", `\`${message.author.tag}\``)
  .addField("<:pasta:821113151382487080> Motivo", `\`${motivo}\``)
  .setTimestamp()
  .setFooter(`Aviso Efetuado`, message.author.displayAvatarURL())
  .setColor("BLACK")
  message.channel.send(aviso)
  
  db.add(`warnsCount_${message.guild.id}-${member.id}`, 1)
  
  let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
  
  const embed2 = new Discord.MessageEmbed()
  .setAuthor("Aviso Membro", member.displayAvatarURL())
  .addField("<:Users_2:810574844818227230> Avisado", `\`${member.tag}\``)
  .addField("<:policia:821112503491887187> Avisado por", `\`${message.author.tag}\``)
  .addField("<:pasta:821113151382487080> Motivo", `\`${motivo}\``)
  .setColor("BLACK")
  .setTimestamp()
  channel.send(embed2)
  
}

