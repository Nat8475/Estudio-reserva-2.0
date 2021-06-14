const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) {
let per = new Discord.MessageEmbed()
.setDescription(":sirene: | ** Você não possue a permissão de `Administrador` para executar este comando**")
.setColor("PURPLE")

return message.channel.send(per)
}


if(args[0] === "on") {
let channel =
      message.mentions.channels.first() 

    if (!channel)
      return message.channel.send({embed: {
        description: ":sirene: | ** Mencione un canal**",
        color: "PURPLE"
      }})

    try {
      let a = await db.get(`cMod_${message.guild.id}`);

      if (channel.id === a) {
        return message.channel.send({embed: {
          description: ":sirene: | **Este canal ja foi setado**",
         color: "PURPLE"
        }}); 
     
      } else {
        client.guilds.cache
          .get(message.guild.id)
          .channels.cache.get(channel.id)
          .send(":v2: | **Mod Log Setado neste Canal!**");
        db.set(`cMod_${message.guild.id}`, channel.id);

        message.channel.send(
          `:v2: | **Mod Log Channel Setado em ${channel}**`
        );
      }
      
 
    } catch (e) {
      return message.channel.send(`Error - ${e.message}`);
    }
}
if(args[0] === "off") {
  
  await db.delete(`cMod_${message.guild.id}`)
  
  
  const del = new Discord.MessageEmbed()
   .setAuthor(`Mod Log Channel Desligado`, message.guild.iconURL())
   .setDescription(":sirene: | **O Channel mod log foi desativado deste Servidor!**")
   .setFooter(`Desativado por ${message.author.tag}`, message.author.displayAvatarURL())
.setColor("PURPLE")
message.channel.send(del)
   
   
}
  }