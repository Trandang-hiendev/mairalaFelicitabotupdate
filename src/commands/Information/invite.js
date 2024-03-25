const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme", "i", "inv"],
  description: "Invite Bot",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite")
        .setStyle("LINK")
        .setEmoji("🔗")
        .setURL(`https://discord.gg/`),
      new MessageButton()
        .setLabel("Support")
        .setStyle("LINK")
        .setEmoji("🔗")
        .setURL("https://discord.gg/"),
    );

    const mainPage = new MessageEmbed()

      .setAuthor({
        name: `Invite Arezo`,
        iconURL: client.user.displayAvatarURL(),
      })

      .setColor(client.embedColor)
      .setDescription(
        `[Nhấn vào đây](https://discord.gg/) để invite bot`,
      );
    message.reply({ embeds: [mainPage], components: [row] });
  },
};
