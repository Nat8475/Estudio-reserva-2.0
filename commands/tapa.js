module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js')
    const superagent = require('superagent')

   const uuser = message.mentions.users.first() || bot.users.cache.get(args[0])

   if(!uuser) return message.reply("Mencione alguém por favor")

   if(uuser.id === bot.user.id) {
    superagent.get('https://nekos.life/api/v2/img/slap')
    .end((err, response) => {
        const embedA = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle(`Toma Otário(a)`)
        .setDescription(`${bot.user} Deu um tapa bem merecido em ${message.author}`)
        .setImage(response.body.url)
        .setFooter(`Solicitado pelo(a) idiota do ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        return message.channel.send(embedA)
      })
   } else {

    superagent.get('https://nekos.life/api/v2/img/slap')
    .end((err, response) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Toma Otário(a)`)
        .setColor('BLACK')
        .setDescription(`${message.author} Deu um tapa em ${uuser}`)
        .setImage(response.body.url)
        .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(embed)
    })
   }
}