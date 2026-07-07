const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

// المتغيرات
const TOKEN = process.env.DISCORD_TOKEN;
const TARGET_USER_ID = '1226561156907401248';
const MY_USER_ID = '1195827812565798953';

// دالة بسيطة للانتظار
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

client.on('ready', async () => {
    console.log(`[SYSTEM] تم التشغيل بنجاح باسم: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    // التأكد أن الرسالة من الشخص المطلوب ومحتواها نقطة فقط
    if (message.author.id === TARGET_USER_ID && message.content === '.') {
        
        // تأخير عشوائي (1-3 ثواني)
        const delay = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
        
        // إظهار حالة "يكتب..."
        await message.channel.sendTyping();
        
        // الانتظار
        await wait(delay);
        
        try {
            // الرد بمنشن حسابك
            await message.channel.send(`<@${MY_USER_ID}> هلا بالشيخه ❣️.`);
            console.log(`[LOG] تم الرد على ${message.author.username} بنجاح.`);
        } catch (err) {
            console.error('[ERROR] حدث خطأ أثناء الرد:', err);
        }
    }
});

// التحقق من وجود التوكن قبل تسجيل الدخول
if (!TOKEN) {
    console.error('[ERROR] لم يتم العثور على التوكن في المتغيرات (DISCORD_TOKEN)!');
    process.exit(1);
}

client.login(TOKEN);
