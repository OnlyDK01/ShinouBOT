const { MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('pt-br')

module.exports = {
  run: async (client, message, args) => {
    
    function adicionarLetra(num, texto) {
      if(num > 1) return texto = texto + "s"
      return texto
    }

    const chat = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.id === args[0]) || message.channel;

    const totalSeconds = chat.rateLimitPerUser;

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const chat_nsfw = !chat.nsfw ? "Não" : "Sim";
    const chat_type = chat.type !== "text" ? "Voz" : "Texto";
    const chat_topic = !chat.topic ? "Não Definido" : chat.topic;
    const chat_rateLimit = hours > 0 ? `${hours} ${adicionarLetra(hours, "Hora")}` : minutes > 0 ? `${minutes} ${adicionarLetra(minutes, "Minuto")}` : seconds > 0 ? `${seconds} ${adicionarLetra(seconds, "Segundo")}` : "Desligado";
    const chat_userLimit = chat.userLimit > 0 ? chat.userLimit : "Não Definido"
    const chat_category = chat.parent.name;
    const chat_createdAt = moment(chat.createdAt).format('D') + " de " + moment(chat.createdAt).format('MMMM') + ", " + moment(chat.createdAt).format('YYYY') + " ás " + moment(chat.createdAt).format('LT');

    const chatText = new MessageEmbed()
    .setTitle(`**Informaçoês de:** ${chat.name}`)
    .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp()
    .setColor("PURPLE")
    .addFields(
      [
        { name: "💻 ID do Chat", value: `\`${chat.id}\``, inline: true},
        { name: "📌 Tipo", value: `\`${chat_type}\``, inline: true},
        { name: "📎 Categoria", value: `\`${chat_category}\`\n(${chat.parentID})`, inline: true},
        { name: "🔞 Chat NSFW", value: `\`${chat_nsfw}\``, inline: true},
        { name: "🕰️ Modo Lento", value: `\`${chat_rateLimit}\``, inline: true},
        { name: "📅 Criado Em", value: chat_createdAt, inline: true},
      ]
    )

    const chatTopic = new MessageEmbed()
    .setTitle(`**Informaçoês de:** ${chat.name}`)
    .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp()
    .setColor("PURPLE")
    .addField("❕ Tópico", chat_topic, true)
    
    const chatVoice = new MessageEmbed()
    .setTitle(`🔊 ${chat.name}`)
    .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp()
    .setColor("PURPLE")
    .addFields(
      [
        { name: "💻 ID", value: `\`${chat.id}\``, inline: true},
        { name: "📌 Tipo", value: `\`${chat_type}\``, inline: true},
        { name: "📎 Categoria", value: `\`${chat_category}\`\n(${chat.parentID})`, inline: true},
        { name: "👥 Limite de usuários", value: `\`${chat_userLimit}\``, inline: true},
        { name: "📅 Criado em", value: chat_createdAt, inline: true},
      ]
    )

    if(chat.type == "text") {

      let page = 1

      let msg = await message.channel.send({ embed: chatText })
      await msg.react('▶️')

      const forwardFilter = (reaction, user) => reaction.emoji.name === "▶️" && user.id === message.author.id
      const backwardFilter = (reaction, user) => reaction.emoji.name === "◀️" && user.id === message.author.id

      const backward = msg.createReactionCollector(backwardFilter, { time: 30000, disponse: true });
      const forward = msg.createReactionCollector(forwardFilter, { time: 30000, disponse: true });

      backward.on('collect', r => {
        r.remove()
        page--;
        msg.edit({ embed: chatText })
        msg.react('▶️')
      })

      forward.on('collect', r => {
        r.remove()
        page++;
        msg.edit({ embed: chatTopic })
        msg.react('◀️')
      })

    } else {
      return message.channel.send(chatVoice)
    }
  }
}