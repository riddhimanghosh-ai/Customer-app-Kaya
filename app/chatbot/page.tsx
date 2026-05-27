'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! 👋 I\'m Kaya\'s AI Assistant. I can help you with questions about skincare, treatments, medications, and more. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
    }
  }, [router]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      // Placeholder - will use Claude API when provided
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Sorry, I\'m not available right now. Please try again later.' },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'I\'m here to help! For now, please check our FAQ section or contact support directly.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="h2" style={{ color: 'var(--ink)' }}>Ask Dr. AI</h1>
          <Link href="/dashboard" className="btn sm">
            Back
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        {/* Chat Window */}
        <div className="panel" style={{ flex: 1, marginBottom: '16px', overflowY: 'auto', maxHeight: '400px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div
                style={{
                  maxWidth: '320px',
                  padding: '12px 16px',
                  borderRadius: 'var(--r-2)',
                  background: msg.role === 'user' ? 'var(--brand)' : 'var(--paper-2)',
                  color: msg.role === 'user' ? 'white' : 'var(--ink)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ padding: '12px 16px', borderRadius: 'var(--r-2)', background: 'var(--paper-2)', color: 'var(--ink)', fontSize: '14px' }}>
                Thinking... ⏳
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="panel" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about your treatment, medications, or skincare..."
              className="field-input"
              style={{ flex: 1, padding: '12px 16px', border: `1px solid var(--hair)`, borderRadius: 'var(--r-2)', color: 'var(--ink)' }}
              disabled={loading}
            />
            <button
              onClick={handleSendMessage}
              disabled={loading}
              className="btn sm"
              style={{ opacity: loading ? 0.5 : 1 }}
            >
              Send
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="panel" style={{ marginTop: '24px' }}>
          <h3 className="h4" style={{ color: 'var(--ink)', marginBottom: '16px' }}>Quick Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'What skincare routine should I follow?',
              'How often should I take my medication?',
              'When can I expect to see results?',
              'Are there any side effects to worry about?',
            ].map((question, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(question);
                  setTimeout(() => handleSendMessage(), 100);
                }}
                style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  background: 'var(--paper-2)',
                  border: `1px solid var(--hair)`,
                  borderRadius: 'var(--r-2)',
                  color: 'var(--ink)',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--mint-tint)';
                  e.currentTarget.style.borderColor = 'var(--mint)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--paper-2)';
                  e.currentTarget.style.borderColor = 'var(--hair)';
                }}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
