
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, whatsapp, company, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Campos obrigatórios faltando.' },
                { status: 400 }
            );
        }

        // Configure Transporter
        // Note: In production, these should be environment variables.
        // For now, handling the logic assuming env vars will be set.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Site Bússola" <${process.env.SMTP_USER}>`,
            to: 'bussoladodigital@gmail.com',
            subject: `Novo Contato do Site: ${name} - ${company || 'Sem Empresa'}`,
            html: `
                <h2>Novo Lead do Site</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>WhatsApp:</strong> ${whatsapp || 'Não informado'}</p>
                <p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
                <hr />
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json(
            { error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' },
            { status: 500 }
        );
    }
}
