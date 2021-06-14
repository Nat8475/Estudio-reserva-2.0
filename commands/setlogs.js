const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(`:ce2_errado: **|** Oops! ${message.author}, Você não tem a permissão \`ADMINISTRADOR\` portanto não posso executa esse comando para você.`);
  if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.inlineReply(`:ce2_errado: **|** **Oops!** Eu não tenho a permissão \ADMINISTRADOR\``);

let canal = message.mentions.channels.first();

if(!canal) {
return message.channel.send("você precisa mencionar um canal")
}

await db.set(`logs_${message.guild.id}`, canal.id)
message.channel.send(`**canal de logs setado para:** ${canal}`)
}
