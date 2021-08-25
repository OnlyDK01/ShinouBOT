const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setColor("PURPLE")
  .setTitle("Precisa de ajuda?")
  .setDescription(`${message.author} Eu te enviei uma mensagem na DM como todos os meus comandos!!!`)
  .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed);

//DM
const privado = new Discord.MessageEmbed()
  .setTitle(`Todos os comandos da Shinou`)
  .setColor("PURPLE")
  .setDescription("<:Arrow1:865837531240726538>Olá eu sou a **Shinou**. Aqui está a lista de todos os meus comandos, se tiver dúvida entre em meu servidor de suporte: [Clique aqui](https://discord.gg/SwH5E9XSNh) \n\nPorno:\n`pussy` `porn` `boobs` `ass` `anal` `anal` `4k`\n\nHentai:\n`hentai` `oppai` `hpussy` `hblowjob` `hcumart` `ero` `erokitsune` `eroyuri` `hfemdom` `futanari` `hgirlsolo` `hkitsune` `hlesbian` `neko` `nekogif` `hpussyart`\n\nUtilidade:\n`anime` `avatar` `serverinfo` `channelinfo` `userinfo`\n\nBot:\n`ping` `sugestao` `reportbug` `invite`")
  .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
  .setThumbnail("https://c.tenor.com/DMFfHKFlQA4AAAAM/demon-slayer-kimetsu-no-yaiba.gif")
  message.author.send(privado);
};