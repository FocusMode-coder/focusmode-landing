/**
 * Keep-Alive script para Render (free tier)
 * Hace ping al endpoint /api/keep-alive cada 14 minutos.
 *
 * Uso: npx ts-node scripts/keep-alive.ts
 * O añádelo como proceso secundario en tu servidor.
 */

const SERVICE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const INTERVAL_MS = 14 * 60 * 1000; // 14 minutos

async function ping() {
  try {
    const res = await fetch(`${SERVICE_URL}/api/keep-alive`);
    const data = await res.json();
    console.log(`[keep-alive] ✅ Pong recibido:`, data);
  } catch (err) {
    console.error(`[keep-alive] ❌ Error al hacer ping:`, err);
  }
}

console.log(`[keep-alive] 🚀 Iniciando keep-alive para ${SERVICE_URL}`);
ping(); // ping inicial
setInterval(ping, INTERVAL_MS);