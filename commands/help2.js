module.exports = {
name: "help",
run: async(client, message) => {
  
  const { guild } = message
  const icon = guild.iconURL({ dynamic: true, format: "png"})
  const comandos = new Discord.MessageEmbed()
    .setColor('#8B0000')//#0000CD
    .setThumbnail(icon)
    .setTitle('<a:Red_Help:816647767287791657> - Meus Comandos:')
    .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções. \n\n 
  <:jornal:816651334034915338> <a:Seta:810669871729868820> **Comandos Gerais.**\n\n 
  <a:ac_staff:816647618230222889> <a:Seta:810669871729868820> **Comandos Staff.**\n\n 
  <a:todeboa:816651215605727263> <a:Seta:810669871729868820> **Comandos de Diversão.**\n\n
  <:Money:814500123501133847> <a:Seta:810669871729868820> **Comando de Economia.**\n\n
  <:Gerais:810669290851401729> <a:Seta:810669871729868820> **Voltar para a pagina inicial.**`)
    .setTimestamp()
    .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({dynamic: true,  Size: 32 })).then(msg => {
  
  msg.react("👍")
  
const filtro = (r, u) => r.emoji.name === '👍' && u.id === message.author.id;

const collector = msg.createReactionCollector(filtro);

  collector.on("collect", reaction => {
    reaction.users.remove(message.author.id)
    msg.edit("A Mensagem foi editada eu removi a sua reação tbm")
  })
})
}}
