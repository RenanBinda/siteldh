// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "jsr:@supabase/server@^1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const EMAIL_DESTINO = "atendimento@leful.com.br";
const EMAIL_REMETENTE = "atendimento@leful.com.br";

export default {
  // 👇 Mudança crítica: aceita a chave publishable (formulário público)
  fetch: withSupabase({ auth: "publishable" }, async (req, _ctx) => {
    try {
      if (!RESEND_API_KEY) {
        return Response.json(
          { error: "RESEND_API_KEY não configurada nos secrets do Supabase." },
          { status: 500 }
        );
      }

      // 👇 Lê os campos que o React realmente envia
      const { nome, email, empresa, telefone, tipoDemanda, mensagem } =
        await req.json();

      if (!nome || !email || !tipoDemanda) {
        return Response.json(
          { error: "Campos obrigatórios ausentes: nome, email, tipoDemanda." },
          { status: 400 }
        );
      }

      const html = `
        <h2>Nova solicitação de contato — Site LeFul</h2>
        <table style="border-collapse:collapse;">
          <tr><td style="padding:4px 8px;"><strong>Nome:</strong></td><td>${nome}</td></tr>
          <tr><td style="padding:4px 8px;"><strong>E-mail:</strong></td><td>${email}</td></tr>
          <tr><td style="padding:4px 8px;"><strong>Empresa:</strong></td><td>${empresa || "-"}</td></tr>
          <tr><td style="padding:4px 8px;"><strong>Telefone:</strong></td><td>${telefone || "-"}</td></tr>
          <tr><td style="padding:4px 8px;"><strong>Tipo de demanda:</strong></td><td>${tipoDemanda}</td></tr>
        </table>
        <p><strong>Mensagem:</strong></p>
        <p>${(mensagem || "-").replace(/\n/g, "<br>")}</p>
      `;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: EMAIL_REMETENTE,
          to: EMAIL_DESTINO,
          reply_to: email,
          subject: `Contato — ${nome} (${tipoDemanda})`,
          html,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Repassa o erro real do Resend para o frontend ver no console
        return Response.json(data, { status: res.status });
      }

      return Response.json({ ok: true, id: data.id });
    } catch (err) {
      return Response.json(
        { error: "Erro interno", detail: String(err) },
        { status: 500 }
      );
    }
  }),
};