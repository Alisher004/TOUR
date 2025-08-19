import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/telegram/send', async (req, res) => {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const envChatId = process.env.TELEGRAM_CHAT_ID;
    const { tourTitle, clientName, clientPhone, clientAddress, chatIdOverride } = req.body || {};

    if (!token) return res.status(500).json({ ok: false, error: 'Missing TELEGRAM_BOT_TOKEN' });

    const chatId = chatIdOverride || envChatId;
    if (!chatId) return res.status(400).json({ ok: false, error: 'Missing chat_id' });

    if (!tourTitle || !clientName || !clientPhone || !clientAddress) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const text = `🧳 Жаңы заказ\nТур: ${tourTitle}\n👤 Кардар: ${clientName}\n📞 Телефон: ${clientPhone}\n🏠 Дарек: ${clientAddress}`;

    const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    const tgRes = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    });

    const data = await tgRes.json().catch(() => ({}));
    if (!tgRes.ok || data?.ok === false) {
      return res.status(400).json({ ok: false, error: data?.description || 'Telegram API error', data });
    }
    res.json({ ok: true, data });
  } catch (err) {
    res.status(502).json({ ok: false, error: err?.message || 'Proxy error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
}); 