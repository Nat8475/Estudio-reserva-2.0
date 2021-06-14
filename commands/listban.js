const Discord = require('discord.js')

exports.run = async (bot, message) => { 
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("VOCÊ NÃO É ADM!")


    try {
      let output = '';
        let i = 0

               const embed = new Discord.MessageEmbed()
               .setTitle('Lista de banimentos!')
               .setDescription('Você quer receber a lista de bans? Reaja com ✅ para confirmar o envio. \nReaja com ⛔ para cancelar o envio.')
               .setColor('BLACK')
         
        message.channel.send(embed)
              .then(async (msg) => {
          await msg.react("✅")
          await msg.react("⛔")
            const embed = new Discord.MessageEmbed()
            const filtro = (reaction, user) => ['✅', '⛔'].includes(reaction.emoji.name) && user.id === message.author.id
              const coletor = msg.createReactionCollector(filtro)
              
              coletor.on("collect", r => {
                
                switch (r.emoji.name) {
                  case '✅':
                    
                    msg.reactions.removeAll()
                    message.guild.fetchBans().then(async (bans) => {
                      const embed = new Discord.MessageEmbed()
                      .setTitle('Lista enviada em sua dm!')
                      .setColor('BLACK')
                      .setDescription('Caso não tenha recebido significa que não possui ninguém banido.')

                      msg.edit(embed)
                     /*message.channel.send('Enviei a lista de bans no seu privado! \n**(Caso não receba nenhuma mensagem no privado significa que não tem ninguem banido!)**');*/
                      bans.forEach(async (ban) => {
                        i++;
                          
                          //await message.author.send(i+ '.**Nome:**' + ban.user.username + ' | **ID:** ' + ban.user.id + ' | **bot:**' + ban.user.bot + '');
                          const bans = new Discord.MessageEmbed()
                          .setTitle('Segue a lista de banimento abaixo.')
                          .setDescription(i+ '.**Nome: **' + ban.user.username + ' | **ID: ** ' + ban.user.id + ' | **bot: **' + ban.user.bot + '')
                          .setColor('BLACK')

                          message.author.send(bans)
                      
                      
                    })
                    })
                     break;
                    case '⛔': 
                     msg.reactions.removeAll()
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Lista não foi enviada.')
                    .setDescription('Comando cancelado com sucessso!')
                    .setColor('BLACK')

                    msg.edit(embed)
                } 
              })
        })
    } catch (err) {
      message.channel.send('Um erro aconteceu! \n' + err).catch();
    }
}

//msg.delete().then(message.channel.send(`**O envio foi cancelado com sucesso.**`));
//                    break;