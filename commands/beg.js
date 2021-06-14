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
        .setColor("#000001")
        .setDescription(`Você já mendingou recentemente!\n\nTente novamente em **${time.minutes}m ${time.seconds}s**`);
        
        message.channel.send(`${user}`, timeEmbed);

        //message.channel.send(`Você já mendingou recentemente! Tente novamente em **${time.minutes}m ${time.seconds}s**`)
    } else {

        let replies = ['Jeff Bezos','Bill Gates','Bernard Arnault','Warren Buffet','Armancio Ortega','Mark Zuckerberg','Jim Walton','Alice Walton','Rob Walton']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 1000) + 1000;

        let embed1 = new Discord.MessageEmbed()
        .setTitle(":dollar: **|** Mendigar")
        .setColor("BLACK")
        .setDescription(`${user.username} mendingou para o **${replies[result]}** e ganhou: \n\n:dollar: Dinheiro: **R$${amount}**`)
        .setTimestamp();

        message.channel.send(`${user}`, embed1);
        
        db.add(`money_${message.guild.id}_${user.id}`, amount);
        db.set(`work_${message.guild.id}_${user.id}`, Date.now());
    };
}