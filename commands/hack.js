const ms = module.require("ms");

module.exports = {
  name: "hack",
  description: "Another Fun Command",
  run: async(client, message, args) => {
    if (!args[0]) {
    return message.channel.send("Woah.... Slow Down!! Who are we hacking..??")
    }
    const tohack = message.mentions.members.first()
    let msg = await message.channel.send(`Hackeando ${tohack.displayName}....`);

    tohack.send(`Você etá sendo Hackeado.`)
    let time = '1s'
    setTimeout(function(){
    msg.edit(`Procurando ${tohack.displayName}'s Email e Senha.....`);
  }, ms(time));

    let time1 = '6s'
    setTimeout(function(){
    msg.edit(`E-Mail: ${tohack.displayName}@gmail.com \nSenha: ********`);
    message.author.send(`E-Mail: ${tohack.displayName}@gmail.com\nSenha: ${tohack.displayName}`)
  }, ms(time1));

    let time2 = '9s'
    setTimeout(function(){
    msg.edit("Procurando outras contas.....");
  }, ms(time2));

    let time3 = '15s'
    setTimeout(function(){
    msg.edit("Arrumando configurações da conta Epic Games.....");
  }, ms(time3));

    let time4 = '21s'
    setTimeout(function(){
    msg.edit("Hackeando conta da Epic Games......");
  }, ms(time4));

    let time5 = '28s'
    setTimeout(function(){
    msg.edit("Conta da Epic Games hackeada!!");
    message.author.send(`Conta Epic\nUsário: ${tohack.displayName}\nSenha: *****`)
  }, ms(time5));

    let time6 = '31s'
    setTimeout(function(){
    msg.edit("Coletando Informações.....");
  }, ms(time6));

  let time7 = '35s'
  setTimeout(function(){
    msg.edit("Copiando Informações do Cartão!")
  }), ms(time7)

  let time8 = '38s'
  setTimeout(function(){
    msg.edit("Informações do Cartão copiadas!")
    message.author.send("Informações do Cartão!\nNumero: 5194 8449 7357 1934\nCódigo de Segurança: 525\nData de vencimento: 20/02/2023")
  }), ms(time8)

    let time9 = '43s'
    setTimeout(function(){
    msg.edit("Cpf do Usário!");
    message.author.send(`CPF: 823.004.630-16`)
  }, ms(time9));

    let time10 = '50s'
    setTimeout(function(){ 
    msg.edit(`Finalizando hack ${tohack.displayName}`);
  }, ms(time10));

  }
}