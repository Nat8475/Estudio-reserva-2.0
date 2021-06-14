const Discord = require('discord.js')//puxando o bagulho do discord

module.exports.run = async (bot, message, args) => {//exportando o comando como reverter
  try {
    if(!args[0]) {
      return message.channel.send("Fala algo miséria")  
    }
    let str = args.join(' ')
    let msg = str.split('').reverse().join('')
    message.channel.send(msg)
  } catch(e) {
    message.channel.send("Ocorreu um erro! "+e)
  }
}