const Discord = require('discord.js')
var weather = require('weather-js');


module.exports = {
    name: "tempo",
    aliases: ["tempo"],
    description: "COmando para ver o tempo",
    usage: 'e!tempo',
    category: 'diversao',

  run: async (client, message, args) => {
    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
     
        if (!result) return message.channel.send(`Forneça uma cidade.`)
        if (!result[0]) return message.channel.send(`Essa cidade não existe.`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**Tempo em ${result[0].location.name}**`)
            .addField(`**Temperatura:**`, `${result[0].current.temperature}°C`)
            .addField(`**Sensação Térmica:**`, `${result[0].current.feelslike}°C`)
            .addField(`**Umidade:**`, `${result[0].current.humidity}%`)
            .addField(`**Vento:**`, `${result[0].current.windspeed}`)
            .setColor("black")
            .setThumbnail(result[0].current.imageUrl)
            .setTimestamp()
        message.channel.send(embed)

    });
}
}