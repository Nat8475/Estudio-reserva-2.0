const { unsubscribe } = require('superagent')

module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js')
 const superagent = require('superagent')

const uuser = message.mentions.users.first() || bot.users.cache.get(args[0])

if(!uuser) return message.reply("Mencione alguém por favor")

 superagent.get('https://nekos.life/api/v2/img/hug')
 .end((err, response) => {
     const embed = new Discord.MessageEmbed()
     .setTitle('Um abraço bem apertado!')
     .setColor('BLACK')
     .setDescription(`${message.author} Abraçou ${uuser} :3 | Own X3`)
     .setImage(response.body.url)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
     
     message.channel.send(embed).then(async (msg) => {
         await msg.react("❤️")
         const filtro = (reaction, user) => ['❤️'].includes(reaction.emoji.name) && user.id === uuser.id
              const coletor = msg.createReactionCollector(filtro)

              coletor.on("collect", r => {
                switch (r.emoji.name) {
                    case '❤️':
                        msg.reactions.removeAll()
                        const embed2 = new Discord.MessageEmbed()
                        .setTitle("Abraço retribuido!")
                        .setDescription(`${message.author} foi abraçado novamente por ${uuser}`)
                        .setImage(response.body.url)
                        .setColor("BLACK")
                        
                        msg.edit(embed2)
                }
              })
     })
 })
}