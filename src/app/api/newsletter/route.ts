import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, sobrenome, email, empresa, cargo, areasInteresse, consentimento } = body;

    // Basic Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'E-mail corporativo inválido.' },
        { status: 400 }
      );
    }

    if (consentimento !== true) {
      return NextResponse.json(
        { error: 'O consentimento é obrigatório para realizar a inscrição.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const formattedInterests = Array.isArray(areasInteresse) ? areasInteresse.join(', ') : 'Geral';

    const emailPayload = {
      to: 'ricardo.holderegger@infinitysvl.com',
      subject: 'Nova inscrição — perito.tec.br',
      text: `
Nova inscrição recebida pelo portal perito.tec.br:

Nome: ${nome || 'Não informado'}
Sobrenome: ${sobrenome || 'Não informado'}
E-mail: ${email}
Empresa: ${empresa || 'Não informada'}
Cargo: ${cargo || 'Não informado'}
Área de interesse: ${formattedInterests}
Data/hora: ${timestamp}
Consentimento: Sim
      `.trim(),
    };

    // Log payload for development and audit trail
    console.log('[NEWSLETTER SUBMISSION]', emailPayload);

    // If Resend API Key is available, dispatch live email
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'perito.tec.br <briefing@perito.tec.br>',
            to: [emailPayload.to],
            subject: emailPayload.subject,
            text: emailPayload.text,
          }),
        });
      } catch (err) {
        console.error('Erro ao enviar e-mail via Resend API:', err);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Inscrição realizada com sucesso.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro na API de newsletter:', error);
    return NextResponse.json(
      { error: 'Erro interno ao processar a solicitação.' },
      { status: 500 }
    );
  }
}
