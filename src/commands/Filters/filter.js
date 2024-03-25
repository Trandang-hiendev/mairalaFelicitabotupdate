const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");


module.exports = {
    name: "filter",
    category: "Filters",
    aliases: ["filters"],
    description: "Đặt bộ lọc âm thanh cho bot.",
    args: false,
    usage: "",
    userPerms: [],
    dj: true,
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
    execute: async (message, args, client, prefix) => {


        const player = message.client.manager.get(message.guild.id);
        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor(client.embedColor)
                .setAuthor({name: `| Không có bài hát nào đang phát`, iconURL: message.member.displayAvatarURL({dynamic:true})});
            return message.reply({ embeds: [thing] });
        }
        const embed = new MessageEmbed()
            .setColor(client.embedColor)
            .setAuthor({name: `| menu`, iconURL: message.member.displayAvatarURL({dynamic:true})})
            .setFooter({text:`Made With ! Zenus`, iconURL: client.user.displayAvatarURL({dynamic:true})})

      .setThumbnail(`${message.author.displayAvatarURL()}`)
            .setDescription(`**__This is my filters list u can enable filters by using dropdown menu\nFilters Take Some Time To Load__**\n<:online:1210253399031812147>Reset Filters
<:online:1210253399031812147> Bass Booster
<:online:1210253399031812147> 8D
<:online:1210253399031812147> Nightcore
<:online:1210253399031812147> Pitch
<:online:1210253399031812147> Distort
<:online:1210253399031812147> Equalizer
<:online:1210253399031812147> Speed
<:online:1210253399031812147> Vaporwave`)

        const row4 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('disable_h')
          .setPlaceholder(`Chọn bộ lọc`)
          .addOptions([
            {
              label: 'Reset bộ lọc',
              value: 'clear_but',
              emoji : '<:online:1210253399031812147>'
            },
            {
              label: 'BassBoost',
              value: 'bass_but',
              emoji : '<:online:1210253399031812147>'
            },
            {
              label: '8D',
              value: '8d_but',
              emoji : '<:online:1210253399031812147>'
            },
            {
              label: 'NightCore',
              value: 'night_but',
              emoji : '<:online:1210253399031812147>'
            },
            {
              label: 'Pitch',
              value: 'pitch_but',
              emoji : '<:online:1210253399031812147>'
            },
            {
              label: 'Distort',
              value: 'distort_but',
              emoji : '<:online:1210253399031812147>'
            },
            {
              label: `Equalizer`,
              value: "eq_but",
              emoji : '<:online:1210253399031812147>'
           
            },
            {
              label: 'Speed',
              value: 'speed_but',
              emoji : '<:online:1210253399031812147>'
            },
            {
              label: 'Vaporwave',
              value: 'vapo_but',
              emoji : '<:online:1210253399031812147>'
            }   
          ])
        )

        const embed1 = new MessageEmbed().setColor(client.embedColor);

      const m = await message.channel.send({ embeds: [embed], components: [row4] });
      
        const collector = m.createMessageComponentCollector({
            filter: (f) => f.user.id === message.author.id ? true : false && f.deferUpdate().catch(() => { }),
            time: 600000,
            idle: 600000 / 2
        });
      
        collector.on("collect", async (i) => {
           await i.deferReply({ ephemeral: true });
            if(i.values[0] === "clear_but") {
      await player.clearEffects();
      await i.editReply({ ephemeral: true , content: `Đã xóa thành công tất cả **FILTERS**`});
    } 
    if(i.values[0] === "bass_but") {
     await player.setBassboost(true);
     await i.editReply({ ephemeral: true, content:`Đã bật chế độ **Bassboost**` });
  }
    if(i.values[0] === "8d_but") {
      await player.set8D(true);
      await i.editReply({ ephemeral: false , content: `Đã bật chế độ **8D**`, ephemeral: true });
    }
    if(i.values[0] === "night_but") {
      await player.setNightcore(true);
      await i.editReply({ ephemeral: true, content: `Đã bật chế độ **NightCore**`, ephemeral: true });
    }
    if(i.values[0] === "pitch_but") {
      await player.setPitch(2);
      await i.editReply({ ephemeral: true, content: `Đã bật chế độ **Pitch Mode**`, ephemeral: true });
    }
    if(i.values[0] === "distort_but") {
      await player.setDistortion(true);
      await i.editReply({ ephemeral: true, content: `Đã bật chế độ **Distort**` });
    }
    if(i.values[0] === "eq_but") {
     await player.setEqualizer(true);
     await i.editReply({ ephemeral: true, content:`Đã bật chế độ **Equalizer**` })
  }   
    if(i.values[0] === "speed_but") {
      await player.setSpeed(2);
      await i.editReply({ ephemeral: true, content: `Đã bật chế độ **Speed**`, ephemeral: true });
    }
    if(i.values[0] === "vapo_but") {
      await player.setVaporwave(true);
      await i.editReply({ ephemeral: true, content: `Đã bật chế độ**VaporWave**`, ephemeral: true });
    }
        });
    }
};
