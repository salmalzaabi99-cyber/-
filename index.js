const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

// المتغيرات
const TOKEN = process.env.DISCORD_TOKEN;
const TARGET_USER_ID = '1226561156907401248';

client.on('ready', async () => {
    console.log(`[SYSTEM] تم التشغيل بنجاح باسم: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    // التأكد أن الرسالة من الشخص المطلوب
    if (message.author.id === TARGET_USER_ID) {
        
        // الرد مباشرة على الرسالة (Reply)
        try {
            await message.reply({ content: 'هلا بالشيخه ❣️.' });
            console.log(`[LOG] تم الرد على ${message.author.username} بنجاح.`);
        } catch (err) {
            console.error('[ERROR] حدث خطأ أثناء الرد:', err);
        }
    }
});

// التحقق من وجود التوكن
if (!TOKEN) {
    console.error('[ERROR] لم يتم العثور على التوكن في المتغيرات (DISCORD_TOKEN)!');
    process.exit(1);
}

client.login(TOKEN);
