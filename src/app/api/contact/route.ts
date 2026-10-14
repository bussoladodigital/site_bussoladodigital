
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_REQUEST_BYTES = 16 * 1024;
const MAX_LENGTHS = {
    name: 120,
    email: 254,
    whatsapp: 40,
    company: 120,
    message: 5000,
} as const;

function escapeHtml(value: string) {
    const entities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export async function POST(request: Request) {
    try {
        if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
            return NextResponse.json({ error: 'Formato de solicitação inválido.' }, { status: 415 });
        }

        const contentLength = Number(request.headers.get('content-length'));
        if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
            return NextResponse.json({ error: 'A mensagem excede o tamanho permitido.' }, { status: 413 });
        }

        const reader = request.body?.getReader();
        if (!reader) {
            return NextResponse.json({ error: 'Corpo da solicitação ausente.' }, { status: 400 });
        }

        const chunks: Uint8Array[] = [];
        let byteLength = 0;
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            byteLength += value.byteLength;
            if (byteLength > MAX_REQUEST_BYTES) {
                await reader.cancel();
                return NextResponse.json({ error: 'A mensagem excede o tamanho permitido.' }, { status: 413 });
            }
            chunks.push(value);
        }

        const bodyBytes = new Uint8Array(byteLength);
        let offset = 0;
        for (const chunk of chunks) {
            bodyBytes.set(chunk, offset);
            offset += chunk.byteLength;
        }
        const rawBody = new TextDecoder().decode(bodyBytes);

        let body: unknown;
        try {
            body = JSON.parse(rawBody);
        } catch {
            return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 });
        }

        if (!body || typeof body !== 'object' || Array.isArray(body)) {
            return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
        }

        const data = body as Record<string, unknown>;
        const fields = ['name', 'email', 'whatsapp', 'company', 'message'] as const;
        if (fields.some((field) => data[field] !== undefined && typeof data[field] !== 'string')) {
            return NextResponse.json({ error: 'Dados inválidos.' }, { status: 400 });
        }

        const name = (data.name as string | undefined)?.trim() ?? '';
        const email = (data.email as string | undefined)?.trim() ?? '';
        const whatsapp = (data.whatsapp as string | undefined)?.trim() ?? '';
        const company = (data.company as string | undefined)?.trim() ?? '';
        const message = (data.message as string | undefined)?.trim() ?? '';

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Campos obrigatórios faltando.' },
                { status: 400 }
            );
        }

        if (name.length > MAX_LENGTHS.name || email.length > MAX_LENGTHS.email ||
            whatsapp.length > MAX_LENGTHS.whatsapp || company.length > MAX_LENGTHS.company ||
            message.length > MAX_LENGTHS.message) {
            return NextResponse.json({ error: 'Um ou mais campos excedem o tamanho permitido.' }, { status: 400 });
        }

        const emailPattern = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i;
        if (!emailPattern.test(email)) {
            return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 });
        }

        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        if (!smtpUser || !smtpPass) {
            return NextResponse.json({ error: 'Serviço de contato indisponível.' }, { status: 503 });
        }

        const smtpPort = Number(process.env.SMTP_PORT || 587);
        if (!Number.isInteger(smtpPort) || smtpPort < 1 || smtpPort > 65535) {
            return NextResponse.json({ error: 'Serviço de contato indisponível.' }, { status: 503 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeWhatsapp = escapeHtml(whatsapp || 'Não informado');
        const safeCompany = escapeHtml(company || 'Não informada');
        const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');

        const mailOptions = {
            from: `"Site Bússola" <${smtpUser}>`,
            to: 'bussoladodigital@gmail.com',
            replyTo: email,
            subject: 'Novo contato recebido pelo site Bússola',
            html: `
                <h2>Novo Lead do Site</h2>
                <p><strong>Nome:</strong> ${safeName}</p>
                <p><strong>E-mail:</strong> ${safeEmail}</p>
                <p><strong>WhatsApp:</strong> ${safeWhatsapp}</p>
                <p><strong>Empresa:</strong> ${safeCompany}</p>
                <hr />
                <p><strong>Mensagem:</strong></p>
                <p>${safeMessage}</p>
            `,
            text: [
                'Novo lead do site',
                `Nome: ${name}`,
                `E-mail: ${email}`,
                `WhatsApp: ${whatsapp || 'Não informado'}`,
                `Empresa: ${company || 'Não informada'}`,
                `Mensagem: ${message}`,
            ].join('\n'),
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' });
    } catch {
        console.error('Falha no processamento ou envio do formulário de contato.');
        return NextResponse.json(
            { error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}
