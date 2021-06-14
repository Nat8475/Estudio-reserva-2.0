const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}, Abaixo está uma listinha sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando acionado por: ${message.author.username}`)
    .addFields(
        {
            name: 'Meu nome e minha #',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '<:Alarm:810572995247472700> Servidores:',
            value: `Estou em **${client.guilds.cache.size}** servidores.`,
            inline: true
        },
        {
            name: '<:Config:810572995806494730> Canais:',
            value: `Cuido de **${client.channels.cache.size}** canais de texto.`,
            inline: true
        },
        {
            name: '<:Users_2:810574844818227230> Usuários:',
            value: `Cuido de **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '<a:Ping:810574842297581649> Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '<:Dev:810572995399254047> Meu criador:',
            value: 'nat.rosa#1478',
            inline: true
        },
        {
          name: '<:Js:810572995704913980> Linguagem de programação:',
          value: 'Sou desenvolvido em JavaScript.',
          inline: true
        },
        {
            name: '<:Discord_Icon:810574844655566859> Meu servidor:',
            value: 'https://discord.gg/uVFURDANwW',
            inline: true
        },
    )
    message.channel.send(embed);
}