const cooldowns = {}
const ms = require("ms")

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 0
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle('<:erro404:838417737981624351>  Muita Calma nessa hora amigão !!!')
  .setColor('BLACK')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(aguarde).then(msg=> {
    msg.delete({ timeout: 5000 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }