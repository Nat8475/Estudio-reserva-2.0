const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});

  const embed = new Discord.MessageEmbed()
  .setTitle("Aqui esta seu cafezinho")
  .setDescription(`${message.author} voce pediu um cafe e aqui esta ele!`)
  .setColor('#FFB6C1')
  .setImage('https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg?w=1155&h=1541')
  message.channel.send(embed);
  }

