const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    
    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    let embed1 = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`<a:Sirene:810572998037733397> **|** Mencione alguem para pagar!`);

    if (!user) {
        return message.channel.send(`${message.author}`, embed1)
    }
    let embed2 = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`<a:Sirene:810572998037733397> **|** Coloque o valor do pagamento!`);
  
    if (!args[1]) {
        return message.channel.send(`${message.author}`, embed2)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`<a:Sirene:810572998037733397> **|** Você não Dinheiro suficiente para realizar o pagamento!`);

    if (member < args[1]) {
        return message.channel.send(`${message.author}`, embed4)
    }
    let embed5 = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`<a:Sirene:810572998037733397> **|** Você tem que colocar um valor maior que **0** para realizar o pagamento!`);

    if(args[1] < 0) {
        return message.channel.send(`${message.author}`, embed5)
    }
    let embed7 = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`<a:Sirene:810572998037733397> **|** Você tem que colocar um valor numerico para realizar o pagamento!`);

    if (isNaN(args[1])){
        return message.channel.send(`${message.author}`, embed7)
    }
    let embed6 = new Discord.MessageEmbed()
    .setTitle("💵 **|** Pagamento")
    .setColor("BLACK")
    .setDescription(`💵 Você pagou o ${user} com **R$${args[1]}**!`);

    message.channel.send(`${message.author}`, embed6)
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])
}