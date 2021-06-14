const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Digite o nome do item q deseja adquirir')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'nome do item'){
            if(amount < preço) return message.channel.send('você não possui dinheiro suficiente para realizar a compra!');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, preço);
            db.push(message.author.id, "nome do item");
            message.channel.send('Você comprou uma (nome do item) com sucesso!')
        }
            if(purchase === 'ak-47'){
            if(amount < 5000) return message.channel.send('Você não possui dinheiro suficiente para realizar a compra!');

            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5000);
            db.push(message.author.id, "ak-47");
            //message.channel.send('Você comprou seu ak-47 com sucesso!')
            const embed = new Discord.MessageEmbed()
            .setTitle('Item comprado!')
            .setDescription('Ak-47 foi comprado com sucesso, para ver sua mochila use **e!bag**')
            .setColor('BLACK')

            message.channel.send(embed)
            }
            }
