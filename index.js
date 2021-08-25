const express = require('express');
const fs = require("fs");
const config = require("./config.json");
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
}); // Constantes e ping do bot
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); // Conexão com a livraria Discord.js
const client = new Discord.Client(); // Criação de um novo Client
client.queue = new Map() // Client da queue

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token

  client.on('ready', () => {
    let activities = [
        `${config.prefix}help | v1.0.2`,
      ],
      i = 0;
    setInterval(
      () =>
        client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: 'PLAYING' //WATCHING, PLAYING, STREAMING , LISTENING
        }),
      15000
    );
    console.log('Estou Online!');
  }); //Status personalizado do bot

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
    const embed = new Discord.MessageEmbed()
    .setColor('PURPLE')
    .setDescription(`${message.author}, O comando informado nao existe ou ainda nao foi adicionado.\nUtilize **${config.prefix}help** para saber meus comandos.`)
    return message.channel.send(embed);
    console.error('Erro:' + err);
  }
}); //Carrega todos o comandos

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == 'mencao')
  return
  if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
  return message.channel.send({
    embed: new  Discord.MessageEmbed()
    .setColor('PURPLE')
    .setTitle("Shinou")
    .setDescription(`
>  » Meu prefixo é **${config.prefix}**.
>  » Use **${config.prefix}help** para ver meus comandos.
>  » Link Do Meu Servidor: [Clique aqui](https://discord.gg/pJm5PWZmRa)
>  » Desenvolvido por: <@437793544141406209>`)
    .setImage("https://i.imgur.com/wduDbU0.gif")
    .setTimestamp()
    .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
  })
  }
}); // Manda mensagem ao mencionar o bot

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
}); // Carrega os eventos