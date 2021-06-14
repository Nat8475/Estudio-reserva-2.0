const Discord = require("discord.js")

module.exports = {
  name: "captcha",
  run: async (client, message, args) => {

let cargo = message.guild.roles.cache.get("819674319230599230")

let array = [
  'ako33',
  'akkeod',
  '93ukc'
];
let arg = array[Math.floor(Math.random() * array.length)]

message.channel.send(`Digite o codigo ${arg}`).then(msg => {
  message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
  .on("collect", message => {
    let content = message.content;
    if(arg !== content) {
      return message.channel.send("errou")
    } else {
      message.channel.send("acertou")
      message.member.roles.add(cargo)

      let canal = client.channels.cache.get("808215305070575634")
const embed = new Discord.MessageEmbed()
.setDescription(`${message.author} Passou pela verificação`)
message.channel.send(embed)
    }

  })
})

  }
}
 