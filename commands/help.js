const Discord = require('discord.js');

exports.run = async (client, message, argumentos, arg_teste, chat) => {
/*if (!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setDescription(`<a:Sirene:810572998037733397> ${message.author} **Comando está em desenvolvimento e por isso foi desativado para membros.**`)
.setColor('BLACK')
    return message.channel.send(embed);
}*/


  const { guild } = message
  const icon = guild.iconURL({ dynamic: true, format: "png"})
  const comandos = new Discord.MessageEmbed()
    .setColor('#8B0000')//#0000CD
    .setThumbnail(icon)
    .setTitle('<a:Red_Help:816647767287791657> - Meus Comandos:')
    .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções. \n\n 
    <:idcard:832366421018673212>  <a:Seta:810669871729868820> **Comandos Gerais.**\n\n 
    <:Bugs:832363627440898060> <a:Seta:810669871729868820> **Comandos Staff.**\n\n 
    <:user:832363721418211340> <a:Seta:810669871729868820> **Comandos de Diversão.**\n\n
    <:twitch:829516059764850688> <a:Seta:810669871729868820> **Comando de Economia.**\n\n
    <:8227_report:832363890641076314> <a:Seta:810669871729868820> **Voltar para a pagina inicial.**`)
    .setTimestamp()
    .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true,  Size: 32 }))

    message.inlineReply(comandos).then(msg => {
    msg.react('832366421018673212').then(r => {
      msg.react('832363627440898060').then(r => {
        msg.react('832363721418211340').then(r => {
          msg.react('829516059764850688').then(r => {
            msg.react('810669290851401729').then(r => {

            })
          })
        })
      })
    })

    const geralFilter = (reaction, user) => reaction.emoji.name === 'idcard' && user.id === message.author.id;
    const staffFilter = (reaction, user) => reaction.emoji.name === 'Bugs' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'user' && user.id === message.author.id;
    const econoFilter = (reaction, user) => reaction.emoji.name === 'twitch' && user.id === message.author.id;
    const inicioFilter = (reaction, user) => reaction.emoji.name === '8227_report' && user.id === message.author.id;

    const geral = msg.createReactionCollector(geralFilter);
    const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);
    const econo = msg.createReactionCollector(econoFilter);
    const inicio = msg.createReactionCollector(inicioFilter)

    geral.on('collect', r2 => {
      reaction.users.remove(message.author.id)
      const embed = new Discord.MessageEmbed()

        .setTitle('COMANDOS - GERAIS')
        .setThumbnail(icon)
        .addFields(
          {
            name: 'e!afk',
            value: 'Comando para definir que você está afk.(Em Desenvolvimento)'
          },
          {
            name: 'e!avatar',
            value: 'Comando para mostrar o avatar de alguém.'
          },
          {
            name: 'e!botinfo',
            value: 'Comando para mostrar as informações do bot.'
          },
          {
            name: 'e!convites',
            value: 'Comando para mostrar os convites ativos no server.'
          },
          {
            name: 'e!ideia',
            value: 'Comandos para mandar alguma ideia/sugestão de video, jogos, etc.'
          },
          {
            name: 'e!infobot',
            value: 'Comando para ver as informações do bot.'
          },
          {
            name: 'e!ping',
            value: 'Comando para ver o ping do bot.'
          },
          {
            name: 'e!servericon',
            value: 'Comando para ver o icone do servidor.'
          },
          {
            name: 'e!serverinfo',
            value: 'Comando para ver as informações do servidor.'
          },
          {
            name: 'e!ticket',
            value: 'Comando para acionar o suporte(Em Desenvolvimento.)'
          },
          {
            name: 'e!uptime',
            value: 'Comando para ver a quanto tempo o bot está on.'
          },
          {
            name: 'e!userinfo',
            value: 'Comando para ver as informações de algum usuário.'
          }
        )
        .setColor('BLACK')//#008B00
      msg.edit(embed);
    })

    staff.on('collect', r2 => {
      reaction.users.remove(message.author.id)
      const embed = new Discord.MessageEmbed()
        .setTitle('COMANDOS - STAFF')
        .setThumbnail(icon)
        .addFields(
          {
            name: 'e!addemoji',
            value: 'Comando para adicionar algum emoji no servidor.'
          },
          {
            name: 'e!addrole',
            value: 'Comando para adicionar cargos.'
          },
          {
            name: 'e!anuncio',
            value: 'Comando para fazer um anuncio em algum chat..'
          },
          {
            name: 'e!ban',
            value: 'Comando para banir alguém.'
          },
          {
            name: 'e!clear',
            value: 'Comando para apagar as mensagens do chat.'
          },
          {
            name: 'e!createchannel',
            value: 'Comando para criar canais de voz ou de texto.'
          },
          {
            name: 'e!dm',
            value: 'Comando para mandar mensagem na dm de alguém.'
          },
          {
            name: 'e!embed',
            value: 'Comando para mandar alguma mensagem dentro de uma embed.'
          },
          {
            name: 'e!enquete',
            value: 'Comando para mandar uma enquete em algum canal.(Em Desenvolvimento)'
          },
          {
            name: 'e!kick',
            value: 'Comando para kickar alguém do servidor.'
          },
          {
            name: 'e!listban',
            value: 'Comando para ver a lista de banimentos.'
          },
          {
            name: 'e!lock',
            value: 'Comando para trancar algum chat.'
          },
          {
            name: 'e!mute',
            value: 'Comando para mutar alguém.'
          },
          {
            name: 'e!removerole',
            value: 'Comando para retirar o cargo de alguém.'
          },
          {
            name: 'e!say',
            value: 'Comando para fazer o bot mandar alguma mensagem.'
          },
          {
            name: 'e!setnick',
            value: 'Comando para setar o nick de alguém.'
          },
          {
            name: 'e!slowmode',
            value: 'Comando para definir um tempo para enviar mensagem no chat de novo.'
          },
          {
            name: 'e!sorteio',
            value: 'Comando para realizar um sorteio.'
          },
          {
            name: 'e!unban',
            value: 'Comando para desbanir alguém.'
          },
          {
            name: 'e!unlock',
            value: 'Comando para destrancar algum chat.'
          },
          {
            name: 'e!unmute',
            value: 'Comando para desmutar alguém.'
          },
          {
            name: 'e!warn',
            value: 'Comando para avisar alguém.'
          },
          {
            name: 'e!warnings',
            value: 'Comando para ver quantos avisos alguém possui.'
          }
        )
        .setColor('#8B0000')
      msg.edit(embed);
    })

    diver.on('collect', r2 => {
      reaction.users.remove(message.author.id)
      const embed = new Discord.MessageEmbed()
        .setTitle('COMANDOS - DIVERSÃO')
        .setThumbnail(icon)
        .addFields(
          {
            name: 'e!abraço',
            value: 'Comando para abraçar alguém.'
          },
          {
            name: 'e!cafuné',
            value: 'Comando para fazer um cafuné bem gostoso.'
          },
          {
            name: 'e!calc',
            value: 'Comando para fazer algum calculo.'
          },
          {
            name: 'e!clima',
            value: 'Comando para ver o clima de alguma cidade.'
          },
          {
            name: 'e!covid',
            value: 'Comando para ver as informações do Covid-19.'
          },
          {
            name: 'e!dados',
            value: 'Comando para rolar dados.'
          },
          {
            name: 'e!desmotivaçao',
            value: 'Comando para te desmotivar.(Em Desenvolvimento)'
          },
          {
            name: 'e!emoji',
            value: 'Comando para usar algum emoji do servidor.'
          },
          {
            name: 'e!gay',
            value: 'Comando para ver a porcentagem de alguém.'
          },
          {
            name: 'e!jokempo',
            value: 'Comando para jogar pedra, papel ou tesoura.'
          },
          {
            name: 'e!kiss',
            value: 'Comando para beijar alguém.'
          },
          {
            name: 'e!laranjo',
            value: 'Comando para fazer o laranjo falar alguma frase.'
          },
          {
            name: 'e!lembrete',
            value: 'Comando para fazer o bot lhe lembrar de alguma coisa.'
          },
          {
            name: 'e!meme',
            value: 'Comando para fazer eu enviar algum meme no chat.'
          },
          {
            name: 'e!morse',
            value: 'Comando para eu mostrar a frase em código morse.'
          },
          {
            name: 'e!procurado',
            value: 'Comando para definir alguém como procurado.'
          },
          {
            name: 'e!querocafe',
            value: 'Comando dizer que você quer um café.'
          },
          {
            name: 'e!reverse',
            value: 'Comando para fazer o bot mandar a frase ao contrario.'
          },
          {
            name: 'e!sera',
            value: 'Comando para me fazer alguma pergunta.'
          },
          {
            name: 'e!tapa',
            value: 'Comanda para dar um tapa alguém.'
          }
        )
        .setColor('BLACK')//#912CEE
      msg.edit(embed);
    })

    econo.on('collect', r2 => {
      reaction.users.remove(message.author.id)
      const embed = new Discord.MessageEmbed()
      .setColor('#8B0000')//#0000CD
    .setThumbnail(icon)
    .setTitle('COMANDOS - ECONOMIA')
    .addFields(
      {
        name: 'e!bag',
        value: 'Comando para ver sua bag.'
      },
      {
        name: 'e!daily',
        value: 'Comando para recerber sua recompensa diaria.'
      },
      {
        name: 'e!dep',
        value: 'Comando para depositar seu dinheiro no banco.'
      },
      {
        name: 'e!money',
        value: 'Comando para saber quanto dinheiro você tem no banco e na carteira.'
      },
      {
        name: 'e!roubar',
        value: 'Comando para roubar alguém.'
      },
      {
        name: 'e!sacar',
        value: 'Comando para sacar o dinheiro do seu banco.'
      },
      {
        name: 'e!setmoney',
        value: 'Comando para setar o dinheiro de alguém.'
      },
      {
        name: 'e!store',
        value: 'Comando para ver a loja do sistema de economia.'
      },
      {
        name: 'e!topmoney',
        value: 'Comando para ver quem tem mais dinheiro na carteira.'
      },
      {
        name: 'e!work',
        value: 'Comando para trabalhar.'
      }
    )
      

    msg.edit(embed);

      })

      inicio.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
      .setColor('BLACK')//#8B0000
    .setThumbnail(icon)
    .setTitle('<a:Red_Help:816647767287791657> - Meus Comandos:')
    .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções. \n\n 
  <:jornal:816651334034915338> <a:Seta:810669871729868820> **Comandos Gerais.**\n\n 
  <a:ac_staff:816647618230222889> <a:Seta:810669871729868820> **Comandos Staff.**\n\n 
  <a:todeboa:816651215605727263> <a:Seta:810669871729868820> **Comandos de Diversão.**\n\n
  <:Money:814500123501133847> <a:Seta:810669871729868820> **Comando de Economia.**\n\n
  <:Gerais:810669290851401729> <a:Seta:810669871729868820> **Voltar para a pagina inicial.**`)
    .setTimestamp()
    .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true,  Size: 32 }))
      

    msg.edit(embed);

      })


  })
};