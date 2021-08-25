const Discord = require('discord.js');
const config = require('../../config');
const Scraper = require('mal-scraper')

module.exports = {
    config: {
    },
    run: async (client, message, args) => {
        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Por favor coloque algum nome!`);
      
        if (Text.length > 200) return message.channel.send(`O limite é de 200 palavras`);
      
        let Msg = await message.channel.send(`Procurando...<a:Stars1:865837536093929482>`);
      
        let Replaced = Text.replace(/ /g, " ");
      
        await Msg.delete();
      
        let Anime;
      
        let Embed;
      
        try {
      
        Anime = await Scraper.getInfoFromName(Replaced);
      
        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "Nenhum";
      
        Embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription(Anime.synopsis)
        .addField(`Tipo`, Anime.type, true)
        .addField(`Status`, Anime.status, true)
        .addField(`Premiered`, Anime.premiered, true)
        .addField(`Episodios`, Anime.episodes, true)
        .addField(`Duração`, Anime.duration, true)
        .addField(`Popularidade`, Anime.popularity, true)
        .addField(`Genero`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`Score - ${Anime.score}`)
        .setTimestamp();
      
        } catch (error) {
          console.log(error)
          return message.channel.send(`Nenhum anime encontrado.`)
         
        };
      
        return message.channel.send(Embed);
    }
}