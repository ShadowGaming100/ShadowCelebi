module.exports = {
    showStats: true,
    website: {
        protocol: 'https://',
        domain: 'homepage.floofyjpeg.repl.co',
        port: 3000,
        cookieSecret: '48164103'
    },
    bot: {
        name: 'Simple Memberlist',
        token: process.env.DISCORD_TOKEN,
        logo: 'https://cdn.discordapp.com/avatars/1077596622218870796/43ff8a3a1ab954d906a1fe967e8ae3e8.png?size=2048',
        description: 'A bot that can organize your group members and compile them into a tidy list that can be displayed in one of the channels you have designated for this purpose.',
        support: 'https://discord.gg/vvSY8NdN6p',
        invite: 'https://discord.com/api/oauth2/authorize?client_id=1077596622218870796&permissions=8&scope=bot',
        //botlist: 'https://top.gg/bot/1077596622218870796', 
        feature1: {
            main: 'feature 1',
            description: 'creates a neat memberlist for your discord server by using a channel as its index'
        },
        feature2: {
            main: 'feature 2',
            description: 'the bot is open source! https://replit.com/@floofyjpeg/MemberList-2'
        },
        feature3: {
            main: 'feature 3',
            description: 'it has both slash and chat commands!'
        }
    },
    img: {
        img1: 'https://cdn.discordapp.com/attachments/993555895571206184/1089541877092597770/image.png',
        img2: 'https://cdn.discordapp.com/attachments/1020060410826739893/1089541602915131553/image.png'
    }

};
