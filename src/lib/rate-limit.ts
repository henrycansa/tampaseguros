const WINDOW_MS = 10 * 60 * 1000; // 10 minutos
const MAX_REQUESTS = 5;

// Almacenamiento en memoria del proceso. Funciona bien en un servidor persistente
// (ej. AWS Lightsail); en un entorno serverless multi-instancia esto sería un
// límite "best effort" por instancia, no global.
const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Limpieza ocasional para no crecer indefinidamente en memoria.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return false;
}

export function clientIpFrom(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
