import fetch from "node-fetch";

export async function sendPurchaseToTelegram({ chatId, message }) {
  const token = "7473764479:AAGvUBrG8G-4aEg6RUWOeq0fUIHux4Qazjs"; 
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML", 
    }),
  });

  if (!res.ok) {
    throw new Error("Telegramга жөнөтүүдө ката кетти");
  }
}
