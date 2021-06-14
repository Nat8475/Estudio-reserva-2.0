const Discord = require("discord.js");
const os = require("os");


module.exports = {
    name:"cpu",
    description:"Mostra as informações da hospedagem do bot",
run: async (client, message, args, db) => {

  let modelo = os.cpus().map((i) => `${i.model}`)[0]


  const botinfo = new Discord.MessageEmbed()
  .addField(` :computer:┃Memória RAM`,`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB de 1024MB\``)
  .addField(`💻┃CPU`, `\`${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% de CPU\``)
  .addField(` :computer:┃Processador`, `\`${modelo}\``)
  .setImage('')
  message.channel.send(botinfo)
}}