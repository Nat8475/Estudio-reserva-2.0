const Discord = require('discord.js')
module.exports.run = (client,message,args) =>{
/*if (!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setDescription(`<a:Sirene:810572998037733397> ${message.author} **Comando está em desenvolvimento e por isso foi desativado para membros.**`)
.setColor('BLACK')
    return message.channel.send(embed);
}*/
          
      const user = message.author.id;
    const name = `${message.author.tag}`;
    if(message.guild.channels.cache.find(ch => ch.name == name)){
      message.channel.send("Você já abriu um ticket")
    }else{
message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
//message.channel.send("Eu criei um ticket para você");
chan.send(`${message.author} o Suporte estará aqui em breve.`)//.then((m)=>{ m.pin() })

const embed = new Discord.MessageEmbed()
.setTitle('Eu criei um Ticket para você!')
.setColor('BLACK')
.setDescription('Mande sua duvida ou denuncia no Ticket criado!')

message.channel.send(embed)

/*const ticket = new Discord.MessageEmbed()
.setTitle('Mande sua duvida ou denuncia aqui!')
.setDescription(`${message.author} o Suprote estará aqui em breve.`)
.setColor('BLACK')

message.chan.send(ticket).then((m)=>{ m.pin() })*/
})
}
}

module.exports.help = {
name : 'ticket'
}
