const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

exports.run = async (bot, message, args) => {

    let user = message.author;

    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)
    let timeout = 14400000;

    if (author !== null && timeout - (Date.now() - author) > 0) {      

        let time = ms(timeout - (Date.now() - author));

        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setDescription(`Você Já Pescou recentemente!\n\nTente Novamente em **${time.minutes}m ${time.seconds}s**`);

        message.channel.send(`${user}`, timeEmbed);

    } else {

        let replies = ['Lagosta','Tubarão','Lula','Golfinho','Baleia','Bota','Peixe-Agulha',

                      'Peixe-Espada','Baiacu','Bacalhau','Sardinha']

  

        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 2000) + 1000;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("🐟 Pescaria Feita Com Sucesso !")
        .setColor("#000000")
        .setDescription(`${user.username} Pescou e pegou um **${replies[result]}** e com isso ganhou:\nDinheiro: **R$${amount}**`)
        .setTimestamp();

        message.channel.send(`${user}`, embed1);

        db.add(`money_${message.guild.id}_${user.id}`, amount);
        db.set(`work_${message.guild.id}_${user.id}`, Date.now());
    };
}