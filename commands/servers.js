const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "guilds",
  description: "View all guilds the bot is in",
  category: "owner",
  botOwnersOnly: true,
 
  run: (client, message) => {
    if(message.author.id !== "624399506011717632")  return message.reply('Você não e meu desenvolvedor -___-')
    message.delete().catch(O_o => {});
    const guilds = client.guilds.cache;
    let avatar = message.author.displayAvatarURL({format: 'png'});

    const embed = new MessageEmbed()
      .setThumbnail(avatar)
      .setTitle(`Servidores que estou`)
      .setColor("BLACK")
      .setFooter(message.author.tag);

    let description = "";
    guilds.forEach((guild) => {
      description += `**${guild.name}**\nId: ${guild.id}\n\n\n`;
    });

    embed.setDescription(description);

    message.author.send({ embed });

    const embed2 = new MessageEmbed()
    .setTitle('Lista enviada em sua dm.')
    .setDescription('Minha lista de Servidores foi enviada em sua dm.')
    .setColor('BLACK')

    message.channel.send(embed2)
  },
};