const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let likes = db.fetch(`like_${user.id}`);
  if(likes === null) like = 0;
  const embed = new Discord.MessageEmbed()
  .setTitle(':sparkling_heart: Likes!')
  .setDescription(`${user} tem ${likes} likes!`)
  .setColor('BLACK')
  message.channel.send(embed)
}