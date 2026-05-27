'use client';

import React, { useState, useEffect, useRef } from 'react';

const Icon = ({ children, size = 24, className = '' }: { children: React.ReactNode; size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const IconArrow = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </Icon>
);

const IconHome = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </Icon>
);

const IconAppt = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </Icon>
);

const IconMed = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9h-7v2h7z"></path>
  </Icon>
);

const IconProgress = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 6v6l4 2"></path>
  </Icon>
);

const IconChat = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </Icon>
);

const IconRewards = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <circle cx="12" cy="8" r="7"></circle>
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
  </Icon>
);

const IconRefer = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </Icon>
);

const IconBlog = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </Icon>
);

const IconVideo = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </Icon>
);

const IconBell = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </Icon>
);

const IconSearch = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </Icon>
);

const Brand = () => (
  <div style={{ padding: 'var(--pad-3)', borderBottom: '1px solid var(--hair)' }}>
    <div style={{ display: 'grid', placeContent: 'center', width: 40, height: 40, background: 'var(--brand)', borderRadius: 8, fontSize: 20, fontWeight: 'bold', color: 'var(--paper)' }}>K</div>
  </div>
);

const NavItem = ({ icon: Icon, label, active = false }: { icon: React.ComponentType<any>; label: string; active?: boolean }) => (
  <button style={{
    padding: 'var(--pad-2) var(--pad-3)',
    fontSize: 13,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: active ? 'var(--brand)' : 'var(--mute-2)',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    transition: 'color 0.2s',
    borderLeft: active ? '2px solid var(--brand)' : '2px solid transparent',
    fontWeight: active ? 500 : 400,
  }}>
    <Icon size={18} />
    {label}
  </button>
);

const NavRail = ({ active }: { active: string }) => (
  <div style={{
    width: 160,
    background: 'var(--paper)',
    borderRight: '1px solid var(--hair)',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }}>
    <Brand />
    <nav style={{ display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <div style={{ padding: 'var(--pad-2) 0' }}>
        {[
          { k: 'home', icon: IconHome, label: 'Home' },
          { k: 'appointments', icon: IconAppt, label: 'Sessions' },
          { k: 'progress', icon: IconProgress, label: 'Progress' },
          { k: 'medications', icon: IconMed, label: 'Medications' },
          { k: 'chat', icon: IconChat, label: 'Chat' },
        ].map((item) => (
          <NavItem key={item.k} icon={item.icon} label={item.label} active={active === item.k} />
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--hair)', padding: 'var(--pad-2) 0' }}>
        {[
          { k: 'loyalty', icon: IconRewards, label: 'Loyalty' },
          { k: 'referral', icon: IconRefer, label: 'Refer' },
          { k: 'blog', icon: IconBlog, label: 'Blog' },
          { k: 'video', icon: IconVideo, label: 'Videos' },
        ].map((item) => (
          <NavItem key={item.k} icon={item.icon} label={item.label} active={active === item.k} />
        ))}
      </div>
    </nav>
  </div>
);

const MobileShell = ({ children, active = '' }: { children: React.ReactNode; active?: string }) => (
  <div style={{ background: 'var(--ink)', color: 'var(--paper)', height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      background: 'var(--ink)',
      padding: '8px 0',
    }}>
      {[
        { k: 'home', icon: IconHome, label: 'Home' },
        { k: 'appointments', icon: IconAppt, label: 'Sessions' },
        { k: 'rewards', icon: IconRewards, label: 'Loyalty' },
        { k: 'more', icon: IconChat, label: 'More' },
      ].map((item) => (
        <button key={item.k} style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          fontSize: 10,
          color: active === item.k ? 'var(--gold)' : 'var(--mute-2)',
        }}>
          <item.icon size={18} />
          {item.label}
        </button>
      ))}
    </div>
  </div>
);

const SUGGESTED = [
  "How long until I see results from tretinoin?",
  "What's the difference between AHAs and BHAs?",
  "Can I do a peel during pregnancy?",
  "Best SPF for oily skin in monsoon?",
];

const SEED_MSGS = [
  { from: 'ai', text: "I'm Dr. AI — your dermatology guide. I can help with skincare questions, explain your protocol, or summarise visit notes. I'm not a substitute for Dr. Mehra's clinical care." },
  { from: 'user', text: "Why is my skin flaking around my nose at week 9?" },
  { from: 'ai', text: "At week 9 of a tretinoin protocol, low-grade desquamation around the alae nasi is common — your stratum corneum is turning over faster than it can hydrate.\n\nThree things help:\n\n1. Buffer with a ceramide-rich moisturiser 20 minutes after retinoid.\n2. Skip retinoid on flaky nights — frequency, not strength, drives tolerance.\n3. Avoid mechanical exfoliation entirely until resolved.\n\nIf flaking persists past 14 days, message Dr. Mehra through your portal." },
];

const ChatDesktop = () => {
  const [msgs, setMsgs] = useState(SEED_MSGS);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setMsgs([...msgs, { from: 'user', text }]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: 'ai', text: "Thanks for the question. For detailed medical advice, please consult Dr. Mehra during your next visit." }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="chat" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: 'var(--pad-3) var(--pad-4)', borderBottom: '1px solid var(--hair)', background: 'var(--paper)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="row center" style={{ gap: 14 }}>
            <div style={{
              width: 38, height: 38,
              background: 'var(--ink)', color: 'var(--paper)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
              fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic',
            }}>
              ai
              <span style={{
                position: 'absolute', top: 4, right: 4,
                width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)',
              }} />
            </div>
            <div>
              <div className="eyebrow gold dot">Always available</div>
              <div className="h3" style={{ marginTop: 4 }}>Dr. AI · dermatology guide</div>
            </div>
          </div>
          <div className="row center" style={{ gap: 8 }}>
            <span className="tag signal"><span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--gold)', borderRadius: '50%', marginRight: 4, animation: 'pulse 1.5s ease-in-out infinite' }} /> Live</span>
            <button className="btn ghost sm">History</button>
            <button className="btn ghost sm">Message Dr. Mehra</button>
          </div>
        </div>

        <div className="row" style={{ flex: 1, overflow: 'hidden' }}>
          {/* Messages */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--hair)', overflow: 'hidden' }}>
            <div ref={scrollRef} style={{ flex: 1, overflow: 'auto', padding: 'var(--pad-4) var(--pad-4) 12px' }}>
              <div className="col" style={{ gap: 18, maxWidth: 720, margin: '0 auto' }}>
                {msgs.map((m, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    flexDirection: m.from === 'user' ? 'row-reverse' : 'row',
                    gap: 12,
                  }}>
                    <div style={{
                      width: 28, height: 28,
                      flexShrink: 0,
                      background: m.from === 'ai' ? 'var(--ink)' : 'radial-gradient(circle at 35% 30%, #e6c9a8, #6b4628)',
                      color: m.from === 'ai' ? 'var(--paper)' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13,
                      borderRadius: m.from === 'ai' ? 0 : '50%',
                    }}>
                      {m.from === 'ai' ? 'ai' : ''}
                    </div>
                    <div style={{
                      maxWidth: 540,
                      background: m.from === 'user' ? 'var(--ink)' : 'transparent',
                      color: m.from === 'user' ? 'var(--paper)' : 'var(--ink)',
                      border: m.from === 'ai' ? '1px solid var(--hair)' : '1px solid var(--ink)',
                      padding: '12px 16px',
                      fontSize: 14,
                      lineHeight: 1.55,
                      whiteSpace: 'pre-wrap',
                    }}>{m.text}</div>
                  </div>
                ))}
                {loading && (
                  <div className="row" style={{ gap: 12 }}>
                    <div style={{ width: 28, height: 28, background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13 }}>ai</div>
                    <div className="row center" style={{ gap: 6, padding: '12px 16px', border: '1px solid var(--hair)' }}>
                      {[0, 1, 2].map((i) => (
                        <span key={i} style={{
                          width: 6, height: 6, borderRadius: '50%', background: 'var(--ink)',
                          animation: `dot 1.4s ease-in-out ${i * 0.16}s infinite`,
                        }} />
                      ))}
                      <style>{`@keyframes dot { 0%, 80%, 100% { opacity: 0.2; } 40% { opacity: 1; } }`}</style>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input */}
            <div style={{ borderTop: '1px solid var(--hair)', padding: 'var(--pad-3) var(--pad-4)' }}>
              <div className="row" style={{ gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
                {SUGGESTED.map((s, i) => (
                  <button key={i}
                    onClick={() => send(s)}
                    className="tag"
                    style={{ cursor: 'pointer', height: 28, padding: '0 12px', fontSize: 11, textTransform: 'none', letterSpacing: 0, fontFamily: 'var(--sans)' }}
                  >{s}</button>
                ))}
              </div>
              <div className="row center" style={{ gap: 10, border: '1px solid var(--hair-2)', padding: '6px 6px 6px 14px' }}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), send(input))}
                  placeholder="Ask about your protocol, products, or skin concerns…"
                  style={{
                    flex: 1, border: 0, outline: 0, background: 'transparent',
                    font: '14px var(--sans)', color: 'var(--ink)', height: 36,
                  }}
                />
                <button className="btn sm" onClick={() => send(input)} disabled={!input.trim() || loading}>
                  Send <span className="arrow" />
                </button>
              </div>
              <div className="muted" style={{ fontSize: 10, marginTop: 8, fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
                · Dr. AI provides educational guidance, not medical diagnosis. Always defer to Dr. Mehra for clinical decisions.
              </div>
            </div>
          </div>

          {/* Sidebar — your protocol context */}
          <div style={{ width: 280, padding: 'var(--pad-4)', background: 'var(--paper-2)', overflow: 'auto' }}>
            <div className="eyebrow">In context</div>
            <div className="h4" style={{ marginTop: 8 }}>Your active protocol</div>

            <div className="col" style={{ marginTop: 14, gap: 10 }}>
              {[
                ['Phase 3 · Hydrafacial', 'Week 9 of 12'],
                ['Tretinoin 0.025%', 'PM · 8 weeks'],
                ['Azelaic acid 15%', 'PM spot · 6 weeks'],
                ['Vitamin C 15%', 'AM · 11 weeks'],
              ].map(([t, s], i) => (
                <div key={i} style={{ paddingLeft: 12, borderLeft: '1px solid var(--gold)' }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{t}</div>
                  <div className="muted" style={{ fontSize: 11 }}>{s}</div>
                </div>
              ))}
            </div>

            <div className="hr" style={{ margin: '20px 0' }} />

            <div className="eyebrow">Saved chats</div>
            <div className="col" style={{ marginTop: 10 }}>
              {['Tretinoin vs retinol', 'Sunscreen reapplication', 'Phase 2 expected timeline', 'Pregnancy-safe actives'].map((t, i) => (
                <div key={i} style={{
                  padding: '10px 0', borderBottom: i < 3 ? '1px solid var(--hair)' : 0,
                  fontSize: 12, cursor: 'pointer',
                }} className="muted">· {t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatMobile = () => {
  const [msgs, setMsgs] = useState(SEED_MSGS);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setMsgs((m) => [...m, { from: 'user', text }]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: 'ai', text: "Thanks for the question. For detailed medical advice, please consult Dr. Mehra." }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <MobileShell active="chat">
      <div style={{ padding: '8px 16px 6px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--hair)' }}>
        <div style={{ width: 38, height: 38, borderRadius: 6, background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', fontFamily: 'var(--serif)', fontSize: 16, fontStyle: 'italic' }}>
          ai
          <span style={{ position: 'absolute', top: 2, right: 2, width: 8, height: 8, borderRadius: '50%', background: 'var(--mint)' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div className="h4" style={{ fontSize: 14 }}>Dr. AI</div>
          <div className="eyebrow"><span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--mint)', marginRight: 6 }} />online · always available</div>
        </div>
        <button className="btn ghost sm" style={{ height: 32, padding: '0 10px', fontSize: 11 }}>Dr. Mehra</button>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflow: 'auto', padding: 16, paddingBottom: 110, height: 'calc(100% - 64px)' }}>
        <div className="col" style={{ gap: 12 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: m.from === 'user' ? 'row-reverse' : 'row',
              gap: 8,
            }}>
              {m.from === 'ai' && (
                <div style={{ width: 26, height: 26, borderRadius: 4, background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontFamily: 'var(--serif)', fontStyle: 'italic', flexShrink: 0 }}>ai</div>
              )}
              <div style={{
                maxWidth: 240,
                background: m.from === 'user' ? 'var(--brand)' : 'var(--paper-2)',
                color: m.from === 'user' ? 'white' : 'var(--ink)',
                borderRadius: m.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                padding: '10px 14px',
                fontSize: 13,
                lineHeight: 1.5,
                whiteSpace: 'pre-wrap',
              }}>{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="row" style={{ gap: 8 }}>
              <div style={{ width: 26, height: 26, borderRadius: 4, background: 'var(--ink)', color: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontFamily: 'var(--serif)', fontStyle: 'italic' }}>ai</div>
              <div className="panel" style={{ padding: '10px 14px', borderRadius: '16px 16px 16px 4px' }}>
                <div className="row center" style={{ gap: 4 }}>
                  {[0, 1, 2].map(i => (<span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--brand)', animation: `dot 1.4s ease-in-out ${i*0.16}s infinite` }} />))}
                </div>
                <style>{`@keyframes dot { 0%,80%,100% { opacity: 0.2; } 40% { opacity: 1; } }`}</style>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 12, right: 12, bottom: 86,
      }}>
        <div className="row" style={{ gap: 6, marginBottom: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {SUGGESTED.slice(0, 2).map((s, i) => (
            <button key={i} onClick={() => send(s)}
              style={{
                background: 'var(--paper-2)', border: '1px solid var(--hair-2)',
                borderRadius: 999, padding: '6px 12px', fontSize: 11, color: 'var(--ink)',
              }}
            >{s.length > 28 ? s.slice(0, 26) + '…' : s}</button>
          ))}
        </div>
        <div className="row center" style={{ gap: 6, padding: 6, background: 'var(--paper-2)', borderRadius: 999 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), send(input))}
            placeholder="Ask about your skin…"
            style={{ flex: 1, border: 0, outline: 0, background: 'transparent', font: '13px var(--sans)', color: 'var(--ink)', height: 36, paddingLeft: 12 }}
          />
          <button onClick={() => send(input)} disabled={!input.trim() || loading}
            style={{
              width: 36, height: 36, border: 0, borderRadius: '50%',
              background: input.trim() ? 'var(--brand)' : 'var(--paper-3)',
              color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: input.trim() ? 'pointer' : 'default',
            }}
          ><IconArrow size={16} /></button>
        </div>
      </div>
    </MobileShell>
  );
};

export default function ChatPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <ChatMobile /> : <ChatDesktop />;
}
