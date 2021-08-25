const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);

  let uptime = `${days.toFixed()} dias ${hours.toFixed()} horas e ${minutes.toFixed()} minutos`;
  const embed = new Discord.MessageEmbed()
  .setDescription("🌐 **Calculando Ping...**")
  .setColor('PURPLE')
  message.channel.send(embed).then(msg => {
    setTimeout(() => {
      let ping = new Discord.MessageEmbed()
      .setTitle(`Ping da shinou:`)
      .setDescription(`🛰️ Minha Latência: \`${Math.round(client.ws.ping)}ms\`\n📡 Latência do Server: \`${msg.createdTimestamp - message.createdTimestamp}ms\`\n⬆️ Uptime: \`${uptime}\``)
      .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
      .setTimestamp()
      .setColor('PURPLE')
    msg.edit(ping)
    }, 1000)
  });
}