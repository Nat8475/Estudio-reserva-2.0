const Discord = require("discord.js");
const ms = require("ms");
 
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Você não possui a permissão de `Gerenciar Cargos` para executar este comando**",
      color: "#ff0000"
    }})
  }
if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
  return message.channel.send({embed: {
    description: "**❌ Eu não possuo a permissão de `Gerenciar Cargos` para executar este comando**",
    color: "#ff0000"
  }})
}
  let role = message.guild.roles.cache.find(ch => ch.name === "muted")
  if(!role) {
    let criarrole = message.guild.roles.create({data: { name: "muted", permissions: []}})
    return message.channel.send({embed: {
      description: "**❌ Não foi possível encontrar o cargo `muted` por isso criei um para você**",
      color: "#ff0000"
    }})
  }
  let member = message.mentions.members.first()
  if(!member) {
    return message.channel.send({embed: {
      description: "**❌ Não foi possível encontrar o user mencionado**",
      color: "#ff0000"
    }})
  }
  let user = message.mentions.users.first()
  if(member.roles.highest.position >= message.member.roles.highest.position) {
    return message.channel.send({embed: {
      description: "**❌ Você não pode mutar este usuario**",
      color: "#ff0000"
    }})
  }
  if(member.id === message.author.id) {
    return message.channel.send({embed: {
      description: "**❌ Você não pode se mutar**",
      color: "#ff0000"
    }})
  }
 
  let tempo = args[1]
  if(!tempo) {
    return message.channel.send({embed: {
      description: "**❌ Você não especificou o tempo\n> `h = horas, m = minutos, s = segundos`",
      color: "#ff0000"
    }})
  }
  let motivo = args.slice(2).join(" ")
  if(!motivo) {
    return message.channel.send({embed: {
      description: "**❌ Não especificou um motivo**",
      color: "#ff0000"
    }})
} 
member.roles.add(role.id)
 let comotivo = new Discord.MessageEmbed()
 .setTitle("⛔ Mute Member") 
 .addField("Mutado", `\`${user.tag}\``)
 .addField("Mutado por", `\`${message.author.tag}\``)
 .addField("Tempo", `\`${tempo}\``)
 .addField("Motivo", `\`${motivo}\``)
 .setColor("#ff0000")
 .setFooter("Mute efetuado", message.author.displayAvatarURL())
 .setTimestamp()
 .setThumbnail(user.displayAvatarURL())
message.channel.send(comotivo)
 
setTimeout(function() {
  member.roles.remove(role.id)
  let unmute = new Discord.MessageEmbed()
  .setTitle("<:disturb:801455794238652468> Unmute Automático")
  .addField("Desmutado", `\`${user.tag}\``)
  .addField("Desmutado por", `\`${client.user.tag}\``)
  .addField("Motivo", "\`Tempo de mute esgotado\`")
  .setThumbnail(user.displayAvatarURL())
  .setFooter("Unmute efetuado", client.user.displayAvatarURL())
  .setTimestamp()
  .setColor("#ff0000")
 
  message.channel.send(unmute)
}, ms(tempo))
}