const Discord = require('discord.js')

module.exports = {
  run: async (client, message, args) => {
    
 const reporte = args.join(" ")
if(!reporte) return message.channel.send(`Comando errado, utilize: s!reportbug [bug]`) 

const embed = new Discord.MessageEmbed()

.setTitle("Novo bug:")
.setColor("PURPLE")
.setDescription(`O usuario ${message.author.toString()} Reportou um bug:\n\nInformações do reporte:`)
.addField("Autor:", `${message.author.toString()}`, true)
   .addField('ID Do Autor:', `${message.author.id}`, true)
        .addField('Servidor:', `${message.guild.name}`, true)
        .addField('Bug:', `${reporte}`)
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true})}`)
.setColor("PURPLE")

let user = client.users.cache.get("SEU ID AQUI")

user.send(embed)

const canal = new Discord.MessageEmbed()
.setColor(`PURPLE`)
.setDescription(`${message.author} Seu bug foi enviado com sucesso, caso seja necessario meu DEV entrara em contato com você.`) 
message.channel.send(canal);

console.log(`
Bug Reportado!

Bug: ${reporte}
Reportado por: ${message.author.tag}
`);
}
}
