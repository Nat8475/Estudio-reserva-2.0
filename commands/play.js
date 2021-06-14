const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const ffbinaries = require('ffbinaries');
const ffbinaries_extra = require('ffbinaries-extra');
const ffmpeg = require('ffmpeg');
const ffmpeg_static = require('ffmpeg-static');
const opusscript = require('opusscript');
const pesquisa = require('yt-search')
const ms = require("ms")


exports.run = async (client, message, args) => {

    const { voice } = message.member

    if (!voice.channelID) return message.channel.send(`**:Cross: | Você não está em um canal de voz!**`)
    if(message.guild.me.voice.channel) return message.channel.send(`**::Cross: | Eu já estou em um canal de voz!**`)

    const pes = args.join(" ")

    if(!pes) return message.channel.send(`**:Cross: | Você não digitou um nome válido!**`)

    pesquisa(pes, async function (err, r) {

      let videos = r.videos;
      const connection = await message.member.voice.channel.join()
      let stream = ytdl(videos[0].url, {filter: "audioonly"})
      const tocar = connection.play(stream)

      let time = '5m'

      setTimeout(function() {
        tocar.on('finish', function() {
          message.channel.send('**:disconnect: Disconectando...**')
          message.guild.me.voice.channel.leave();
        })
      }, ms(time));


    const PLAY = new Discord.MessageEmbed()
         .setTitle(`🔎 Pesquisando **${pes}**`)
         .setDescription(`Tocando **${videos[0].title}**`)
         .setURL(`${videos[0].url}`)
         .setColor('BLACK')
    message.channel.send(PLAY)

    })

}