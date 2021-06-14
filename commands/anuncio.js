const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
 
    const { guild } = message

    const user = message.author.avatarURL({dynamic: true})
    const icon = guild.iconURL({dynamic: true})
 
    //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não é staff.`)
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
        .setTitle('<a:Sirene:810572998037733397> Você não pode utilizar este comando!')
        .setDescription(`${message.author} **Para utilizar este comando você precisa ser ds Staff.**`)
        .setColor('BLACK')
            return message.channel.send(embed);
        }
 
 
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .addFields(
        {
            name: `CHAT`,
            value: `${message.author}, Mencione o **chat** que você quer mandar o anúncio.`
        }
    )
    .setTimestamp()
    .setThumbnail(icon)
    message.channel.send(embed).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on('collect', c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                const embed = new Discord.MessageEmbed()
                .setColor('BLACK')
                .setTimestamp()
                .addFields(
                    {
                        name: `ERRO`,
                        value: `  ${message.author}, Você não **mencionou** um chat, tente outra vez.`
                    }
                )
                .setThumbnail(icon)
                //return message.channel.send(embed);
                return msg.edit(embed)
 
            } else {
                const embed = new Discord.MessageEmbed()
                .setColor('BLACK')
                .addFields(
                    {
                        name: `DESCRIÇÃO`,
                        value: `${message.author}, \nFale pra mim, a sua **mensagem**, para eu colocar no anúncio`
                    }
                )
                .setTimestamp()
                .setThumbnail(icon)
                msg.edit(embed).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        desc = c.content
                    
                        const embed = new Discord.MessageEmbed()
                        .setColor('BLACK')
                        .addFields(
                            {
                                name: `TÍTULO`,
                                value: `${message.author}, \nQual vai ser o **título** do seu anúncio?`
                            }
                        )
                        .setTimestamp()
                        .setThumbnail(icon)
                        msg.edit(embed).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                title = c.content
 
                                const embed1 = new Discord.MessageEmbed()
                                .setColor('BLACK')
                                .addFields(
                                    {
                                        name: `ENVIADO COM SUCESSO`,
                                        value: `${message.author}, \nSeu **anúncio** foi enviado ao canal ${canal}.`
                                    }
                                )
                                .setTimestamp()
                                .setThumbnail(icon)
                                msg.edit(embed1)
                                msg.delete({timeout: 5000})
 
                                let embed = new Discord.MessageEmbed()
 
                                .setColor('BLACK')
                                .setFooter(`Anúncio feito por: ${message.author.username}`, user)
                                .setTitle(title)
                                .setThumbnail(icon)
                                .setTimestamp()
                                .setDescription(desc)
 
                                canal.send(embed)
 
                            });
                        });
                    });
                });
            };
        });
    });
}                     
