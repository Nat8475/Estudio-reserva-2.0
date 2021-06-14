const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  category: "utility",
  description: "Show Server Information!",
  usage: "Serverinfo",
  accessableby: "everyone",
  run: async (client, message, args) => {

    //Start

    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle(guild.name + " Informações!")
      .setColor("BLACK")
      .setThumbnail(guild.iconURL())
      .addField(`Nome`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Dono:`, `${guild.owner.user.tag}`, true)
      .addField(`Cargo Bot:`, `${guild.roles.highest || "No Role!"}`, true)
      .addField(`Cargos:`, Roles, true)
      .addField(`Emojis:`, Emojis, true)
      .addField(`Membros:`, Members, true)
      .addField(`Humanos`, Humans, true)
      .addField(`Bots:`, Bots, true)
      .addField(`Server Criado Em:`, guild.createdAt.toDateString())
      .setFooter(`Requesitado por ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
    
  }
};