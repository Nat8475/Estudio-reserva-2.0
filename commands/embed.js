const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
  let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 })
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você não esta autorizado a utilizar esse comando. Você precisa ter a permissao de **Gerenciar Mensagens**!"
    );
  //const sayTitle = args.join1(' ');
  //message.delete().catch(O_o => {});
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  
  const embed = new Discord.MessageEmbed()
  //.setAuthor(`${message.author.tag}`)
  //.setTitle(`${sayTitle}`)
  .setThumbnail(message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 }))
  .setDescription(`${sayMessage}`)
  .setColor("BLACK")
  message.channel.send(embed);
};