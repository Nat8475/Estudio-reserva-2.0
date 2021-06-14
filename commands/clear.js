const Discord = require("discord.js");
const db = require("quick.db")
 
exports.run = async (bot, message, args) => {
    let user = message.author.username
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "🚨 | Você não tem permissão para limpar mensagens, sorry."
    );
    
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.reply(
        "🚨 | forneça um número de até **99 mensagens** a serem excluídas."
      );
 
  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched); {
      let embed = new Discord.MessageEmbed()
      .setDescription(`Foram limpas ${args[0]} mensagens.`)
      .setColor('BLACK')
      .setTitle('**♻️ O chat foi Limpo.**')
      .setThumbnail('https://imgur.com/Qxc4Lcr.gif')
      .setFooter(`• Faxineiro: ${message.author.username}`, message.author.displayAvatarURL({format: "png"}));
      await message.channel.send(embed).then(msg => msg.delete({timeout: 5000}))
  }

  let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))

const modl = new Discord.MessageEmbed()
.setAuthor("Clear Channel", message.guild.iconURL())
.addField("Canal", `\`${message.channel.name}\``)
.addField("Limpo por", `\`${message.author.tag}\``)
.addField("Quantia", `\`${args[0]}\``)
.setTimestamp()
.setColor("BLACK")
channel.send(modl)
};