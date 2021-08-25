const Discord = require('discord.js')

module.exports = {
  run: async (client, message, args) => {
    
 const sugestao = args.join(" ")
if(!sugestao) return message.channel.send(`Comando errado, utilize: s!sugestao [sua sugestão]`) 

const embed = new Discord.MessageEmbed()

.setTitle("Nova sugestão:")
.setColor("PURPLE")
.setDescription(`O usuario ${message.author.toString()} Mandou uma sugestão\n\nInformações da sugestão:`)
.addField("Autor:", `${message.author.toString()}`, true)
   .addField('ID Do Autor:', `${message.author.id}`, true)
        .addField('Servidor:', `${message.guild.name}`, true)
        .addField('Sugestão:', `${sugestao}`)
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true})}`)
.setColor("PURPLE")
.setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()

let user = client.users.cache.get("437793544141406209")

user.send(embed)

const canal = new Discord.MessageEmbed()
.setColor(`WHITE`)
.setDescription(`${message.author} Sua sugestão foi enviado com sucesso, caso seja necessario meu DEV entrara em contato com você.`) 
.setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send(canal);

}
}