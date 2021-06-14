const db = require('quick.db')
const Discord = require('discord.js');
module.exports =  {
  name: "love",
  aliases: ["amor"],
   run: async(client, message, args) => {

   let user = message.mentions.users.first() || client.users.cache.get(args[0])  || message.author

          if (!user) return message.reply('**Voce não mencionou alguem valido**').catch(console.error);

         let Pessoa =  " <@" + user.id + "> "
          let Man =  user.username 
          var falas = [
           " É \`0%\` Amado\nDescupe dizer isso mas o mundo te odeia ",
           " É \`1%\` amado\nPelo menos alguem te ama cuide do amor dela(e) ",
           " É \`10%\` amado\nPelo menos uma parte te ama ", 
           " É \`20%\` amado\nPelo menos uma parte te ama ",
           " É \`30%\` amado\nPelo menos uma parte te ama ",
           " É \`40%\` amado\nJa e grande coisa \`40%\`",
           " É \`50%\` amado\nMetade do mundo te ama ", 
           " É  \`60%\` amado\nVocê é muito amado ",
           " É \`70%\` amado\nMuitas Pessoas te amam ",
           " É \`80%\` amado\nVocê e muito amado entre as pessoas " ,
           " É \`90%\` amado\n Você e amado quase pelo mundo inteiro ",
           " É \`99%\` amado\n 99% anjo perfeito mas esse 1% e vagabundo *cof cof* Descupa Pela piada kkkkkkk ",
           " É \`100%\` amado\n**Slk!!!**  o mundo inteiro te ama "
             ]

const loveporcent = falas[Math.round(Math.random() * falas.length)]
const love = new Discord.MessageEmbed()
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
.setColor("RANDOM")
.setTitle(`Quanto  o(a) ${Man} é amado?`)
.setDescription(`Estamos vendo o Quanto o ${Pessoa} é amado `)
.setFooter(`Messagem gerada por ${Man}`, client.user.displayAvatarURL())
var msg = await message.channel.send(love).then(msg => {
 setTimeout(() => {

const love2 = new Discord.MessageEmbed()
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
.setColor("RANDOM")
.setTitle(`Calculo concluio`)
.setDescription(` O(a) ${Pessoa} ${loveporcent}`)
.setFooter(`Messagem gerada por ${Man}`, client.user.displayAvatarURL())
msg.edit(love2)
}, 5000)
 });
  } 
}