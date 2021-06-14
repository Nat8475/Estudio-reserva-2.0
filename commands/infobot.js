const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.delete().catch(O_o => {});
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `${days.toFixed()} dias ${hours.toFixed()} horas ${minutes.toFixed()} minutos ${seconds.toFixed()} segundos`;
  let embed = new Discord.MessageEmbed()

  .setColor("BLACK")
  .setTitle("Informaçoes de Desenvolvedor")
  .setDescription(`Aqui estao as suas informaçoes!!!\n\nNome: ${client.user.tag}\nUsuarios: ` + client.users.cache.size + "\nServidores: " + client.guilds.cache.size + `\nTempo Online: ${uptime}\nPing da API: **${Math.round(
      client.ws.ping
    )}ms**`)
  .setFooter(`Comando solicitado por ${message.author.tag}`)
  message.author.send(embed)

  message.reply('Seu comando de **staff** foi executado com **sucesso**! E por isso foi enviado ao seu privado!');

  console.log(`Comando de staff foi utilizado por: ${message.author.tag}`);
}
