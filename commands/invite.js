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
  .setDescription("...")
  .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
  .setThumbnail("https://media0.giphy.com/media/Yq1tXTNe5PDdQEhKXG/200.gif")
  message.author.send(privado);
};
