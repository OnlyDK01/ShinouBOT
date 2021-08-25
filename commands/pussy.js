const client = require('nekos.life');
var Discord = require('discord.js')
const config = require('../../config');
const superagent = require('superagent');
const neko = new client();


module.exports = {
    config: {
    },

  run: async (client, message, args) => {
    let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent

      var errMessage = `!Então você é um pervertido ? Este canal não tem a opção: NSFW, ativada! <a:Star1:865837534630510654>`;
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 30000 })
      })
      
  }

    var lo = new Discord.MessageEmbed()
                .setDescription(`Carregando...<a:Stars1:865837536093929482>`)
                .setColor("PURPLE")
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'pussy'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setColor("PURPLE")
                .setTimestamp()
                .setImage(response.body.message)
                .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
            
            m.edit(embed_nsfw);

   });
    });
  }
  }
