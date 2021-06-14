const Discord = require('discord.js')
const cooldowns = {}
const ms = require("ms")

module.exports = {
name:"reportbug",
aliases:["bug"],
run: async (client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 10000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle('<:error:834053648858218517> Muita Calma nessa hora amigão !!!')
  .setColor('BLACK')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(aguarde).then(msg=> {
    msg.delete({ timeout: 5000 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }

let user = client.users.cache.get("624399506011717632")

const reporte = args.join(" ")
message.delete().catch(O_o => {});

if(!reporte) return message.channel.send(`${message.author} você deve digitar o bug`) 

const embed = new Discord.MessageEmbed()
.setTitle("<:8227_report:832363890641076314> Novo bug")
.addField("<:user:832363721418211340> Autor Da Mensagem", `\`${message.author.tag}\``)
.addField("<:idcard:832366421018673212> Author id:", `\`${message.author.id}\``)
.addField("<:servidor:832366546713182248>  Bug reportado em:", `\`${message.guild.name}\``)
.addField("<:Bugs:832363627440898060> Bug Reportado", `\`${reporte}\``)
.setFooter(`Administração Estúdio Gamer/Play ®`)
.setColor("BLACK")
user.send(embed)

const embed2 = new Discord.MessageEmbed()
.setTitle(`<:8227_report:832363890641076314> Bug reportado.`)
.setDescription(`<:servidor:832366546713182248> ${message.author}, Bug enviado para a Staff.\nAgradeçemos a colaboração.`)
.setFooter(`Administração do Estúdio Gamer/Play ®`)
.setColor("BLACK")

message.author.send(embed2)

message.channel.send(`${message.author}, Obrigado pelo bug Reportado.`).then(msg => msg.delete({timeout: 5000}))
}}