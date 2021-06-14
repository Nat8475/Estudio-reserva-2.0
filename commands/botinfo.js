const Discord = require("discord.js")
const cooldowns = {}
const ms = require("ms")

module.exports = {
    name: "botinfo",
    aliases: ["bi"],

    async run(client, message, args) {

        if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
            lastCmd: null
          }
    let ultimoCmd = cooldowns[message.author.id].lastCmd 
         let timeout = 10000
        if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
    let time = ms(timeout - (Date.now() - ultimoCmd)); 
    let resta = [time.seconds, 'segundos']
     
    if(resta[0] == 0) resta = ['alguns', 'millisegundos']
    if(resta[0] == 1) resta = [time.seconds, 'segundo']
    const aguarde = new Discord.MessageEmbed()
      .setTitle('<:erro404:838417737981624351> Muita Calma nessa hora amigão !!!')
      .setColor('BLACK')
      .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
            message.channel.send(aguarde).then(msg=> {
        msg.delete({ timeout: 5000 });
            })
           return;
        } else {
                     cooldowns[message.author.id].lastCmd = Date.now() 
        }

        const guild = message.guild
        const users = client.users.cache.size
        const members = guild.memberCount
        const ping = Math.round(client.ws.ping)

        let totalSeconds = client.uptime / 1000;
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        let uptime = `**\`${days.toFixed()}\` d , \`${hours.toFixed()}\` h , \`${minutes.toFixed()}\` m , \`${seconds.toFixed()}\` s.**`;

        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} | Minhas informações`, guild.iconURL({ dynamic: true }))
        .setThumbnail(client.user.displayAvatarURL({ format: "jpg", size: 2048 }))
        .setDescription(`Olá \`${message.author.username}\`, Sou um simples bot para o nosso Servidor.\nCom o intuito de divertir vocês e deixar o Servidor em ordem.\n⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
        .addFields(
            {
                name: "<:Dev:810572995399254047> | Meu Desenvolvedor:",
                value: `Desenvolvido por <@624399506011717632>`
            },
            {
                name: "<:user:837498252437094420> | Usuários:",
                value: `Cuido de ${members} Usuários.`
            },
            {
                name: "<:JS:834196819227312198> | Linguagem de Desenvolvimento:",
                value: "Fui desenvolvido em [Node.js](https://nodejs.org/en/docs/)."
            },
            {
                name: "<:livros:834201176911511564> | Livraria de Criação:",
                value: "Minha livraria é a [Discord.js](https://discord.js.org/#/)"
            },
            {
                name: "<:uptime:837495877907906602> | Uptime:",
                value: `${uptime}`
            },
            {
                name: "<:ping:836561297797283840> | Ping:",
                value: `Meu ping é **${ping}**`
            }
        )
        .setColor("BLACK")
        .setFooter()

        message.inlineReply(embed)
    }
}