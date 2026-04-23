import { Client, GatewayIntentBits, Events } from 'discord.js';
import * as dotenv from 'dotenv';

// 環境変数の読み込み
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

// 起動時の処理
client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! 起動完了: ${readyClient.user.tag} としてログインしました。`);
});

// メッセージ受信時の処理（テスト用）
client.on(Events.MessageCreate, async (message) => {
    // ボット自身のメッセージは無視
    if (message.author.bot) return;

    // テストコマンド
    if (message.content === '!ping') {
        await message.reply('Pong! お兄ちゃん、ちゃんと動いてるよ！');
    }
});

// トークンチェックとログイン
const token = process.env.DISCORD_TOKEN;
if (!token || token === 'your_discord_token_here') {
    console.error('エラー: .envファイルに DISCORD_TOKEN が設定されていません！');
    process.exit(1);
}

client.login(token);
