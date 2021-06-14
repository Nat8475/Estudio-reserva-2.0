const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const Discord = require("discord.js");

    exports.run = async (bot, message, args) => {


    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      " Você não tem permissão para isso."
    )
    if (!args[0]) return message.channel.send(`Você não falou um tempo válido.`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `<a:Sirene:810572998037733397> | ${message.author}, Você não está fazendo corretamente. (/sorteio tempo + canal + premio)`
      );
     if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "<a:Sirene:810572998037733397> | Você não tem permissão para isso."
    )
    if (isNaN(args[0][0])) return message.channel.send(`<a:Sirene:810572998037733397> | Isso não é um número.`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `<a:Sirene:810572998037733397> | Não encontrei esse canal, no servidor.`
      );
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "<a:Sirene:810572998037733397> | Você não tem permissão para isto."
    )
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`<a:Sirene:810572998037733397> | Prêmio não especificado!`);
    message.delete();
     let tempo = args[0]
    const { guild } = message
    const icon = guild.iconURL({ dynamic: true, format: "gif", size: 1024});
    let Embed = new MessageEmbed()
      .setTitle(`<a:Sirene:810572998037733397> | SORTEIO | <a:Sirene:810572998037733397>`)
      .setThumbnail(icon)
      .setDescription(`**🥳 Sorteio Na Área Rapaziada. Quem Será o Vencedor? 🏆** \n\n 🧐 Sorteio Feito Por: ${message.author} \n\n🎁 Prêmio: **${prize}** \n\n<a:Loading:811626007328325662> | Tempo Do Sorteio: **${tempo}** \n\n Para Participar Do Sorteio Reaja Com: <a:Give:811624172186370058>`)
      .setTimestamp(Date.now() + ms(args[0]))
      .setFooter('⏱️ O Sorteio Vai Acontecer:')
      .setColor(`Black`);
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "<a:Sirene:810572998037733397> | Você não tem permissão para isso."
    )
    let m = await channel.send(Embed);
    m.react("811624172186370058");
    setTimeout(() => {
      if (m.reactions.cache.get("811624172186370058").count <= 1) {
        return message.channel.send(
          `<a:Sirene:810572998037733397> | Ninguém quis participar do sorteio, então peguei o premio para mim! `
        );
      }

      let winner = m.reactions.cache
        .get("811624172186370058")
        .users.cache.filter((u) => !u.bot)
        .random();
      message.channel.send(`O ganhador do sorteio foi o(a): ${winner}, Parabéns!!!!`);
    }, ms(args[0]));
};