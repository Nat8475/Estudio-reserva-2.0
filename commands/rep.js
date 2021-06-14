const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let autor = message.author;



  let user = message.mentions.users.first() || client.users.cache.get(args[0]);

  if (!user) {
return message.inlineReply(`${autor}, Você precisa mencionar alguém para enviar uma Reputação.`);
}

if(user.id == autor.id){
        return message.inlineReply(`${autor}, Você não pode enviar uma Reputação, para você mesmo.`);
    };

    if(user.bot){
      return message.inlineReply(`${autor}, Você não pode enviar Reputações para um Bot.`)
    }



  let sorte = Math.floor(Math.random() * 2) + 1;
    let amount = sorte;

    db.add(`like_${user.id}`, amount);
    db.set(`likes_${user.id}`, Date.now());




    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username,message.author.avatarURL())
  .setTitle('Reputação')
  .setDescription(`Você enviou ${amount} uma Reputação para ${user}!`)
  .setColor('BLACK')
  .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
  message.inlineReply(embed)

}