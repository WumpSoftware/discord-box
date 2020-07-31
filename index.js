const { GistBox } = require('gist-box');
const Box = new GistBox({ id: process.env.GH_ID, token: process.env.GH_TOKEN });
const Discord = require('discord.js');
;(async() => {
    const client = new Discord.Client();
    client.login(process.env.BOT_TOKEN);
    client.on('ready', async() => {
        await Box.update({
            content: `${client.user.tag}'s stats! 📊\n🐍Guilds: ${client.guilds.cache.size}\n🤷‍♂️Users: ${client.users.cache.size}\n#️⃣Channels: ${client.channels.cache.size}`
        })
    })
})();