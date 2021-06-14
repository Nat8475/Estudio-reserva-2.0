const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))

    // Check for input
    if (!args[0]) return message.channel.send('Uso correto: !enquete <pergunta>');

    // Create Embed
    const embed = new Discord.MessageEmbed()
    
        .setColor("BLACK") //To change color do .setcolor("#fffff")
        .setTitle('Votação criada, reaja para votar')
        .setDescription(args.join(' '))
        .setFooter(`Enquete criada por ${message.author.username}`)
        .setTimestamp()
        client.channels.get(`804439256512069692`).send('<@624399506011717632>').then(msg => msg.delete(5000))

    let msg = await client.channels.get(`804439256512069692`).send(embed)

        .then(function (msg) {
            msg.react("<a:Certo:811281368705007676>");
            msg.react("<a:Errado:811281368280858624>"); // You can only add two reacts
            message.delete({
                timeout: 1000
            });
        }).catch(function (error) {
            console.log(error);
        });

};


exports.help = {
    name: 'enquete',
    description: 'Cria uma enquete com UP ou DOWN',
    usage: 'enquete <pergunta>'
};