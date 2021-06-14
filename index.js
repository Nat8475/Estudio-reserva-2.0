//Bot on

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
const db = require("quick.db")
const fs = require('fs')
require("./ExtendedMessage")

//Chamar comandos

client.on('message', message => {
       if (message.author.bot) return;
       if (message.channel.type == 'dm') return;
       if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return; 
       if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  
      const args = message.content
          .trim().slice(config.prefix.length)
          .split(/ +/g);
      const command = args.shift().toLowerCase();
  
      try {
          const commandFile = require(`./commands/${command}.js`)
          commandFile.run(client, message, args);
      } catch (err) {
  
      console.error('Erro:' + err);
  
      const embed = new Discord.MessageEmbed()
      .setTitle(`<:error:834053648858218517> | Comando não reconhecido!`)
      .setColor('BLACK')
      .setDescription(`${message.author}, O comando informado não existe ou ainda nao foi adicionado, Caso isso seja um bug utilize \`${config.prefix}reportbug\`.\nUtilize **e.help** para saber meus comandos.`)
  
     return message.inlineReply(embed);
    }
  });

//Status do bot

client.on("ready", () => {
  let activities = [
      //`Bot em manutenção por tempo indefinido`
      `Utilize ${config.prefix}help para ver meus comandos`,
      `Twitch Malaguty: https://www.twitch.tv/malaguty`,
      `Twitch DaniellC22: https://www.twitch.tv/daniellc22`,
      `Twitch Yoda: https://www.twitch.tv/heitorfra7`,
      `WebSite: https://estudio-gamerplay.webnode.com`
      /*`${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`*/
    ],

    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/malaguty"
      }), 1000 * 30); 
  client.user
      .setStatus("dnd")
      .catch(console.error);

//console.log("Status personalizado ativo!")
});

//Bloq de convites

client.on("message", async message => {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      //await message.channel.send(`${message.author} **Você não pode postar link de outros servidores aqui!**`);
      let convites = new Discord.MessageEmbed()
      .setTitle("<:error:834053648858218517> | Você não pode postar convites aqui!")
      .setDescription(`${message.author}, Você não pode postar links de outros servidores aqui.\nCaso isso ocorra novamente será mutado.`)
      .setFooter(`Administração do Estúdio Gamer/Play ©.`)
      .setColor("BLACK")

      await message.channel.send(convites)
  }
});

//Menção

client.on("message", message => {
  if(message.author.bot) return;
    if(message.channel.type == "dm")
    return
    if(message.content == `<@${client.user.id}>`|| message.content == `<@!${client.user.id}>`)
    {
        const mençao = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("<:idcard:832366421018673212> | Segue algumas informações minhas!")
        .setDescription(`Olá ${message.author}, Me chamo Estúdio Gamer/Play, ou para os mais próximos(EGP).\nSou um simples Bot para auxiliar vocês em nosso Servidor.\n Atualmente eu tenho \`Undefined\` Comandos.\nEsperamos que Goste do nosso servidor!\n⠀⠀⠀⠀⠀⠀⠀⠀⠀`)
        
        .addFields(
            {
                name: "<:Dev:810572995399254047> | Desenvolvedor:",
                value: "Desenvolvido por <@624399506011717632>."
            },
            /*{
              name: "<:JS:834196819227312198> | Linguagem de Desenvolvimento:",
              value: "Fui desenvolvido em [Node.js](https://nodejs.org/en/docs/)."
            },
            {
              name: "<:livros:834201176911511564> | Livraria de Criação:",
              value: "Minha livraria é a [Discord.js](https://discord.js.org/#/)"
            },*/
            {
                name: "<:Bugs:832363627440898060> | Bugs:",
                value: "Estou em fase de Desenvolvimento então é comum achar Bugs.\nCaso ache algum bug Utilize o comando `e.reportbug`."
            },
            {
              name: "<:Martelo:810572995336470580> | Staff:",
              value: "Caso queira saber a nossa atual Staff, Utilize o comando `e.staff`"
            },
            {
              name: "<:anuncio:815610282562158622> | Prefixo:",
              value: `Meu prefixo é \`${config.prefix}\``
            },
            {
              name: "<a:red_vermelho_coroa:830043916740591618> | Informações",
              value: "Para saber mais informações use \`e.botinfo\`.\n⠀⠀⠀⠀⠀⠀⠀⠀⠀"
            },
            {
              name: "Links:",
              value: "**[Servidor de Suporte.](https://discord.gg/6r7eBVf5pU)\n[WebSite.](https://estudio-gamerplay.webnode.com)\n[GitHub.](-x-)**"
            },
        )
        .setFooter(`Administração do Estúdio Gamer/Play ©.`, message.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }));

        return message.inlineReply(mençao).then(async (msg) => {
          await msg.react("832267671752015911")
          await msg.react("829516059764850688")

        })

}
})

//Reset economia 

client.on("guildMemberRemove", (member) => {
	db.delete(`money_${member.guild.id}_${member.id}`); 
	db.delete(`bank_${member.guild.id}_${member.id}`); 
	db.delete(`work_${member.guild.id}_${member.id}`); 
	db.delete(`daily_${member.guild.id}_${member.id}`); 
	db.delete(`rob_${member.guild.id}_${member.id}`); 

	console.log(`[ECONOMIA] O ${member.tag} saiu do servidor ${member.guild.name}, e teve todos os Status de Economia removidos!`);
})

//Bem Vindo e Autorole

client.on('guildMemberAdd', member => {
  
  let canalEntrada = client.channels.cache.get("824031995994308639")
  let role = member.guild.roles.cache.get("824028267472093254")

  let embed = new Discord.MessageEmbed()
  .setTitle('Seja Muito Bem-Vindo ao Servidor!')
  .setColor('BLACK')
  .setImage('https://i.imgur.com/860OVTq.gif')
  .setDescription(`Obrigado por entrar em nosso servidor ${member}`)
 /* .addField(':policia: │ **Leia as Regras para evitar Punições!.**', ' <#639950431401017344>')
  .addField(`:contatos: │ **Olá! Você sabia que você é o: **`, `${member.guild.memberCount} **Membro do servidor!.** :mao:`)*/
  .addFields(
    {
      name: ":policia: │ Leia as Regras para evitar Punições!.",
      value: `<#639950431401017344>`
    },
    {
      name: `:contatos: │ Olá! Você sabia que você é o:`,
      value: `${member.guild.memberCount} Membro do servidor!.`
    },
    {
      name: "Caso tenha uma Dúvida/Problema, Chame nossa Equipe:",
      value: `<#824032008325562418>`
    }
  )

 .send(embed);
  member.roles.add(role.id);
})

//AFK

client.on("message", async message => {

  let afk = new db.table("AFKs"),
        authorStatus = await afk.fetch(message.author.id),
        mentioned = message.mentions.members.first();
    
    if (mentioned) {
      let status = await afk.fetch(mentioned.id);
      
      if (status) {
        message.channel.send(`O Usúario **${mentioned.user.tag}** está AFK \nMotivo: **${status}**`).then(i => i.delete({timeout: 5000}));
      }
    }
    
    if (authorStatus) {
      message.channel.send(`**${message.author.tag}** não está mais AFK.`).then(i => i.delete({timeout: 5000}));
      afk.delete(message.author.id)
    }
  })

  //Leveis

  client.on("message", async message => {
    if(message.author.bot) return;
    if(!message.guild) return;
    let xpReward;
    if(client.user.id === "809871833498517534") xpReward = Math.floor(Math.random() * 0) + 0
    if(xpReward == 0) xpReward = 10
    let xp = db.fetch(`xp.${message.author.id}`)
    let level = db.fetch(`level.${message.author.id}`) || "0"
    let level2 = level + 1
    let levels = level2 * 1000
  
    if(!xp){
        db.add(`xp.${message.author.id}`,xpReward)
    }else if(xp){
        db.add(`xp.${message.author.id}`,xpReward)
    }
  
    if(xp > levels){
        db.add(`level.${message.author.id}`,1)
    message.author.send(`<@${message.author.id}>, Parabéns você acaba de subir de level **${level2}**.`)
  
    }
  })

  //Terminal

  client.on("ready", () => {
    console.log(`=========================\nBot: ${client.user.username}\nUsuários: ${client.users.cache.size}\nCanais: ${client.channels.cache.size}\nServidores: ${client.guilds.cache.size}\n=========================`)
  })

//Pegar o token do bot

client.login(config.token);