const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "clearqueue",
    aliases: ["cq"],
    category: "Music",
  	description: "Xóa vòng lặp",
	  args: false,
    usage: "<Số bài hát trong vòng lặp>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
  
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#303037")
                .setDescription("<:queue:1213063749557297192> | Không có bài hát nào đang phát.");
            return message.reply({embeds: [thing]});
        }

		player.queue.clear();

		const emojieject = message.client.emoji.remove;

		let thing = new MessageEmbed()
			.setColor(message.client.embedColor)
			
			.setDescription(`<:queue:1213063749557297192> | Đã xóa thành công tất cả`)
			  return message.reply({embeds: [thing]});
    }
};
