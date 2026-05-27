import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Placeholder response - will integrate Claude API later
    const defaultResponses: Record<string, string> = {
      acne: 'Acne can be treated with topical medications, oral medications, or professional treatments. Please consult your doctor for a personalized treatment plan.',
      medication: 'To understand your medication better, check the prescription details in your profile or contact your doctor.',
      skincare: 'A good skincare routine typically includes: cleanser, toner, moisturizer, and sunscreen. Adjust based on your skin type.',
      results: 'Results depend on the treatment type. Most treatments show visible results within 4-8 weeks. Consistency is key!',
      'side effects': 'Common side effects vary by treatment. Check your prescription notes or ask your doctor about specific concerns.',
      appointment: 'You can book appointments through the Sessions section of your dashboard.',
    };

    let reply = 'I\'m here to help! For specific medical advice, please consult your doctor or contact our support team.';

    for (const [key, value] of Object.entries(defaultResponses)) {
      if (message.toLowerCase().includes(key)) {
        reply = value;
        break;
      }
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
