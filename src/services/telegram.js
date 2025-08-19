// src/sendToTelegram.js
export async function sendPurchaseToTelegram({ tourTitle, clientName, clientPhone, clientAddress, chatIdOverride }) {
  const payload = { tourTitle, clientName, clientPhone, clientAddress, chatIdOverride };
  const res = await fetch('/api/telegram/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data?.ok === false) {
    throw new Error(data?.error || 'Telegram proxy error');
  }
  return data;
}
