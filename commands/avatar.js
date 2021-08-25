const { MessageEmbed } = require("discord.js");

module.exports = {
    run: async(client, message, args) => {
        const member = message.mentions.users.first() || message.author;
        const avatar = member.displayAvatarURL({ dynamic: true, size: 1024 })

        const embed = new MessageEmbed()
        .setTitle(`Avatar de ${member.tag}`)
        .setImage(avatar)
        .setColor("PURPLE")
        .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp()

        message.channel.send(embed)
    }
}