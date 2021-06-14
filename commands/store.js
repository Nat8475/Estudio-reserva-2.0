const Discord = require('discord.js');

exports.run = async (bot, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('#000001')
  .setThumbnail(icon)
  .setTitle('Minha loja')
  .setDescription(`Olá ${message.author}, Bem vindo a minha lojinha \n\n <:uiui:805762602873520128> <:seta:807219290620821504> **Itens**\n\n <:ok:805762601748529173> <:seta:807219290620821504> **Armas**\n\n <:blazeputasso:805762602318692363> <:seta:807219290620821504> **Carros**.`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))

  message.channel.send(comandos).then(msg => {
    msg.react('815786752408682528').then(r => {
      msg.react('816648981475491841').then(r => {
        msg.react('804641632993542144').then(r => {
          
        })
      })
    })

    const geralFilter = (reaction, user) => reaction.emoji.name === 'uiui' && user.id === message.author.id;
      const staffFilter = (reaction, user) => reaction.emoji.name === 'ok' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'blazeputasso' && user.id === message.author.id;

    const geral = msg.createReactionCollector(geralFilter);
      const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);


    geral.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Itens**')
      .setThumbnail(icon)
       .addFields(
        {
        name: 'item 1',
        value: 'preço'
        },
        {
        name: 'item 2',
        value: 'preço'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
      })

    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Armas**')
      .setThumbnail(icon)
      .addFields(
        {
        name: 'ak-47',
        value: '5k'
        },
        {
        name: 'like',
        value: '10k'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
    })

    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setTitle('**Carros**')
      .setThumbnail(icon)
      .addFields(
        {
          name: 'carro 1',
          value: 'preço'
        },
        {
        name: 'carro 2',
        value: 'preço'
        }
      )
      .setColor('#000001')
      msg.edit(embed);
    })




  })








}