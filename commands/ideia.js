const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`<a:Sirene:810572998037733397> | ${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`<a:Sirene:810572998037733397> | ${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "811400382378278932");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("black")
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

  const emojis = ["<a:Certo:811281368705007676>", "<a:Errado:811281368280858624>"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}