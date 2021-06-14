const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Você precisa da permissão de `Banir Membros` para executar este comando**",
      color: "BLACK"
    }})
  }
  if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Eu preciso da permissão de `Banir Membros` para executar este comando**",
      color: "BLACK"
    }})
  }
  
  let target = message.mentions.users.first()
  if(!target) {
    return message.channel.send({embed: {
      description: "**❌ User não encontrado ou não mencionado!**",
      color: "BLACK"
    }})
  }
  if(target.bannable) {
    return message.channel.send({embed: {
      description: "**❌ Você não pode banir este usuario**",
      color: "BLACK"
    }})
  }
  if(target.id === message.author.id) {
    return message.channel.send({embed: {
      description: "❌ **Você não pode se banir**",
      color: "BLACK"
    }})
  }
  let motivo = args.join(" ").slice(22)
  if(!motivo) {
    return message.channel.send({embed: {
      description: "**❌ Não especificou um motivo**",
      color: "BLACK"
    }}
  }
  
  let ban = new MessageEmbed()
  .setTitle("⛔ Usuario Banido", message.guild.iconURL())
  .addField("Usuario", `\`${target.tag}\``)
  .addField("Banido por", `\`${message.author.tag}\``)
  .addField("Motivo", `\`${motivo}\``)
  .setColor("BLACK")
  .setThumbnail(target.displayAvatarURL())
  .setTimestamp()
  .setFooter(`Banimento Efetuado`, message.author.displayAvatarURL())
  message.channel.send(ban)
  
  message.guild.member(target.id).ban(target)
  
  let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
if(!channel) {
  return
} else {
const modl = new MessageEmbed()
.setAuthor("Ban Member", message.guild.iconURL())
.addField("Banido", `\`${target.tag}\``)
.addField("<:policia:821112116009500705> Banido por", `\`${message.author.tag}\``)

.addField("Motivo", `\`${motivo}\``)
.setTimestamp()
.setColor("BLACK")
channel.send(modl)
}
  
}