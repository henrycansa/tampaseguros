import { Resend } from "resend";

export type Lead = {
  name: string;
  phone: string;
  email?: string;
  insuranceType?: string;
  zip?: string;
  reason?: string;
  message?: string;
  lang: "es" | "en";
  source: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function leadEmailHtml(lead: Lead) {
  const rows: [string, string | undefined][] = [
    ["Nombre", lead.name],
    ["Teléfono", lead.phone],
    ["Email", lead.email],
    ["Interés / Tipo de seguro", lead.insuranceType],
    ["Código postal", lead.zip],
    ["Motivo de contacto", lead.reason],
    ["Mensaje", lead.message],
    ["Idioma", lead.lang === "es" ? "Español" : "English"],
    ["Origen", lead.source],
  ];

  const rowsHtml = rows
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#003d6d;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 12px;">${escapeHtml(String(value)).replace(/\n/g, "<br/>")}</td></tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <body style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f8;padding:24px;">
    <table style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
      <tr><td style="background:#003d6d;color:#ffffff;padding:16px 20px;font-size:18px;font-weight:700;">Nuevo lead — Tampa Seguros</td></tr>
      <tr><td style="padding:8px 4px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${rowsHtml}</table>
      </td></tr>
    </table>
  </body>
</html>`;
}

/**
 * Punto único de entrega de leads. Hoy solo envía por email vía Resend; está
 * pensado para agregar más canales (CRM, Slack, etc.) sin tocar el route handler:
 * basta con añadir la llamada correspondiente dentro de deliverLead().
 */
export async function deliverLead(lead: Lead): Promise<{ delivered: boolean; error?: string }> {
  const results = await Promise.allSettled([sendLeadEmail(lead) /* , sendLeadToCrm(lead) */]);

  const failures = results.filter((r) => r.status === "rejected");
  if (failures.length === results.length) {
    const first = failures[0] as PromiseRejectedResult;
    return { delivered: false, error: String(first.reason) };
  }

  return { delivered: true };
}

async function sendLeadEmail(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Resend no está configurado (faltan variables de entorno).");
  }

  const resend = new Resend(apiKey);

  const subjectTopic = lead.insuranceType || lead.reason || "Consulta general";
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email || undefined,
    subject: `Nuevo lead: ${lead.name} · ${subjectTopic}`,
    html: leadEmailHtml(lead),
  });

  if (error) throw new Error(error.message);
}

// Punto de extensión futuro, ej.:
// async function sendLeadToCrm(lead: Lead) {
//   await fetch(process.env.CRM_WEBHOOK_URL!, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(lead),
//   });
// }
