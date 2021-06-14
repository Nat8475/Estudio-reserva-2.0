const Discord = require('discord.js')

module.exports = {
  name:"sugestão",
  aliases:["sugerir"],
  run: async (client, message, args) => {
    
 const sugestão = args.join(" ")
if(!sugestão) return message.channel.send(`${message.author} você deve digitar a sugestão`) 

const embed = new Discord.MessageEmbed()

.setTitle("Nova sugestão")
.setDescription(`O usuário  ${message.author} \nadicionou uma nova sugestão do server ${message.guild.name} \nele adicionou a tal sugestão ${sugestão}**`)
.setFooter("Espero que conserte")
.setColor('black')

let user = client.users.cache.get("566415177235431425")

user.send(embed)
}
}