const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setDescription("<a:lab_loading:816647910522355713> **Calculando o meu Ping.**")
  .setColor("BLACK")
  message.channel.send(embed).then(msg => {
    setTimeout(() => {
      let ping = new Discord.MessageEmbed()
      .setDescription(`**<:Dev:810572995399254047> Meu Ping** \`${Math.round(client.ws.ping)}ms\`\n**<:Config:810572995806494730> Server Ping** \`${msg.createdTimestamp - message.createdTimestamp}ms\``)
    .setColor("BLACK")
    msg.edit(ping)
    }, 3000)
  });
}