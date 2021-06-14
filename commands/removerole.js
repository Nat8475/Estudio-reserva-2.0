const Discord = require("discord.js")

module.exports.run = async(client,message,args)=> {
  message.delete().catch(O_o => {});  
    let role;
    if(args[1] && isNaN(args[1])) role = message.mentions.roles.first()
    if(args[1] && !isNaN(args[1])){
        role = message.guild.roles.cache.get(args[1])
    }
    let user;
    if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if(args[0] && !isNaN(args[0])){
        user = client.users.cache.get(args[0])

        if(!message.guild.members.cache.has(args[0])) return message.reply("Usuario nao encontrado").then(msg => msg.delete({timeout: 5000}))

    }
    if(!user) return message.reply("<a:Sirene:810572998037733397> | Voce precisa mencionar um usuario").then(msg => msg.delete({timeout: 5000}))

    if(!role) return message.reply("<a:Sirene:810572998037733397> | Voce precisa mencionar um cargo").then(msg => msg.delete({timeout: 5000}))

if(!message.guild.members.cache.get(user.id).roles.cache.has(role.id)) return message.reply("<a:Sirene:810572998037733397>")
    message.guild.members.cache.get(user.id).roles.remove(role.id).catch(e => message.reply(e))
    message.reply("cargo removido com sucesso <a:Certo:811281368705007676>").then(msg => msg.delete({timeout: 5000}))


//addRole @user @role

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}

exports.help = {
    name:"removeRole",
    description:"removeRole",
    usage:"removeRole",
    category:"moderation"
}