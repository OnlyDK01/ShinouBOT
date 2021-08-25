const { MessageEmbed } = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

const filterLevels = {
    DISABLED: 'Desligado',
    MEMBERS_WITHOUT_ROLES: 'Sem cargo',
    ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
    NONE: 'Nenhum',
    LOW: 'Baixo',
    MEDIUM: 'Médio',
    HIGH: 'Alto',
    VERY_HIGH: 'Muito alto'
};

const regions = {
    brazil: 'Brasil',
    europe: 'Europa',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japão',
    russia: 'Russia',
    singapore: 'Singapura',
    southafrica: 'Africa do sul',
    sydeny: 'Sydeny',
    'us-central': 'América central',
    'us-east': 'América latina',
    'us-west': 'América do oeste',
    'us-south': 'América do sul'
};

module.exports = {
    run: async(client, message, args) => {

        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache.get;

        const embed = new MessageEmbed()
            .setDescription(`Informaçoês de: **${message.guild.name}**`)
            .setColor('PURPLE')
            .setFooter(`Executado por ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField('Geral:', [
                `**📎 | Nome** : ${message.guild.name}`,
                `**🍫 | Dono** : <@${message.guild.ownerID}>`,
                `**🗺️ | Região** : ${regions[message.guild.region]}`,
                `**<:nitro:868647020481613885> | Nível de boost** : ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'Nenhum'}`,
                `**💡 | Filtro de contéudo** : ${filterLevels[message.guild.explicitContentFilter]}`,
                `**✅ | Nível de verificação** : ${verificationLevels[message.guild.verificationLevel]}`,
                `**📆 | Criado em** : ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
                `**🌐 | Membros** : ${message.guild.memberCount}`,
                '\u200b'
            ])          
        message.channel.send(embed);
    }
};
