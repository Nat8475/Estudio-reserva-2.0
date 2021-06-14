exports.run = async (client, message, args, level) => {
  try {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You not have permission")
    if (!args[1]) return message.reply('Você precisa me dar o tipo de canal!')
    if (!args[0]) return message.reply('Você precisa me dar o nome do canal!!')

    message.channel.send('Canal criado com sucesso!').then(() => {
      message.guild.channels.create(args[1], {type:args[0]}, []).catch((err) => {
        message.channel.send('Existe um erro!!')
      })
    })
  } catch (err) {
    message.channel.send('Ocorreu um erro inesperado!!!' + err).catch()
  }
}
exports.help = {
         name: "createchannel",
         description: "moderation",
         usage: ".createchannel <tipo> <nome>",
         example: ".createchannel text general",
};

exports.conf = {
          aliases: ["cnc","chanmake","cchannel"],
          cooldown: 5
};