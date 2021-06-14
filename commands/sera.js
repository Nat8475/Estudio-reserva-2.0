const Discord = require("discord.js");

module.exports = {
    name: "sera",
    aliases: ["sera"],
    description: "Me faça uma pergunta e irei responder",
    usage: 'e!sera',
    category: 'diversao',

  run: async (client, message, args) => {

var list = [
  `Sim :ab_ok: `,
  `Não`,
  `Claro que sim :ab_ok: `,
  `Claro :PepeSim:`,
  `Claro que não :triste:`,
  `Talvez sim :ab_ok: `,
  `Talvez :takipariu:`,
  `Talvez não :takipariu:`,
  `Com certeza :ab_ok: `,
  `Creio que sim :ab_ok: `,
  `Creio que não :triste:`
];

var rand = list[Math.floor(Math.random() * list.length)];
let pergunta = args.join(" ");
if (!pergunta) {
return message.reply(`** Você precisa me fazer uma pergunta primeiro.**`);
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle(`Estúdio Gamer/Play o genio das perguntas!`)
        .setColor('BLACK')
        .setThumbnail('https://imgur.com/k6zhQFu.gif')
        .setFooter('Estúdio Gamer/Play o genio das perguntas!')
        .setDescription(`${message.author}, Estou analizando sua pergunta... \n\nSua **pergunta**: \n${pergunta} \n\n Minha **resposta**: \n${rand}`)
        .setTimestamp()
  await message.channel.send(embed);
} 
}