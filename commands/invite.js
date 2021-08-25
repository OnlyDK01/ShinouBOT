const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Quer que eu entre em seu servidor ?")
  .setDescription(`${message.author} Eu te enviei uma mensagem na DM com as informaçoês!!!`)
  .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed);

//DM
const privado = new Discord.MessageEmbed()
  .setTitle(`Invite:`)
  .setColor("PURPLE")
  .setDescription("<:Arrow1:865837531240726538>Aqui está o meus links de convite:\n•[Convite com todas as permissoês necessarias](https://discord.com/oauth2/authorize?client_id=875766257197129758&scope=bot&permissions=388160)\n•[Convite com permissão de administrador](https://discord.com/oauth2/authorize?client_id=875766257197129758&scope=bot&permissions=8)\n\nCaso queira acessar meu site: [Clique aqui](https://shinou.webnode.com)\nMeu servidor de suporte: [Clique aqui](https://discord.gg/pJm5PWZmRa)\n\nDesenvolvida por: <@437793544141406209>")
  .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
  .setThumbnail("https://media0.giphy.com/media/Yq1tXTNe5PDdQEhKXG/200.gif")
  message.author.send(privado);
};