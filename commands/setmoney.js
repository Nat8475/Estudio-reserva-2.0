const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`<a:Sirene:810572998037733397> **|** ${message.author}, você tem que ter a permissão de **Administrador** para usar esse comando!`);
    };

    let user = message.mentions.users.first();

    if (!user) {
        return message.channel.send(`<a:Sirene:810572998037733397> **|** ${message.author}, você precisa mencionar um usuário para adicionar o Dinheiro!`);
    };

    if (isNaN(args[1])) {
        return message.channel.send(`<a:Sirene:810572998037733397> **|** ${message.author}, você precisa colocar um numero valido!`);
    };

    db.add(`money_${message.guild.id}_${user.id}`, args[1]);
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);

    let moneyEmbed = new Discord.MessageEmbed()
    .setTitle(":dollar: **|** Alteração Monetária")
    .setColor("BLACK")
    .setDescription(`Foi adicionado **$${args[1]}** para ${user}!\n\n:dollar: Dinheiro Atual: **R$${bal}**`)
    .setFooter(`Money foi adicionado!`);
    message.channel.send(moneyEmbed);
}