'use client';

import React, { useState, useEffect } from 'react';

const Icon = ({ children, size = 24, className = '' }: { children: React.ReactNode; size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const IconCheck = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </Icon>
);

const IconCopy = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </Icon>
);

const IconShare = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
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

const Topbar = ({ subtitle = '', title = '' }: { subtitle?: string; title?: string }) => (
  <div style={{
    padding: 'var(--pad-3) var(--pad-4)',
    borderBottom: '1px solid var(--hair)',
    background: 'var(--paper)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    <div>
      <div style={{ fontSize: 12, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{subtitle}</div>
      <div style={{ fontSize: 24, fontWeight: 600, marginTop: 4, color: 'var(--ink)' }}>{title}</div>
    </div>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
        <IconSearch size={20} style={{ color: 'var(--mute-2)' }} />
      </button>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
        <IconBell size={20} style={{ color: 'var(--mute-2)' }} />
      </button>
    </div>
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

const AnimatedMeter = ({ pct, gold = false }: { pct: number; gold?: boolean }) => (
  <div style={{ height: 4, background: 'var(--hair-2)', borderRadius: 2, overflow: 'hidden' }}>
    <div style={{
      height: '100%',
      width: `${pct}%`,
      background: gold ? 'var(--gold)' : 'var(--ink)',
      transition: 'width 1s ease',
    }} />
  </div>
);

const ReferralDesktop = () => {
  const code = "KAYA-PRIYA-8842";
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="referral" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar subtitle="Membership · Referrals" title="Share what works." />

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr', overflow: 'hidden' }}>
          {/* Hero card */}
          <div style={{ padding: 'var(--pad-4)', overflow: 'auto' }}>
            <div className="eyebrow gold dot">Refer & earn</div>
            <div className="display" style={{ fontSize: 56, marginTop: 12 }}>
              You give <em>₹1,500</em>.<br />
              They give back <em>250 pts</em>.
            </div>
            <div className="muted" style={{ fontSize: 14, marginTop: 18, maxWidth: 480 }}>
              Every friend who joins your protocol receives ₹1,500 off their first consultation. You earn 250 loyalty points the moment they book.
            </div>

            <div className="panel ink" style={{ marginTop: 32, padding: 24 }}>
              <div className="row between center">
                <div>
                  <div className="eyebrow" style={{ color: 'var(--mute-2)' }}>Your referral code</div>
                  <div className="num" style={{ fontSize: 28, marginTop: 6, letterSpacing: '0.04em' }}>{code}</div>
                </div>
                <button className="btn gold" onClick={copy}>
                  {copied ? <><IconCheck size={14} /> Copied</> : <><IconCopy size={14} /> Copy code</>}
                </button>
              </div>
              <div className="row" style={{ marginTop: 18, gap: 10 }}>
                <button className="btn ghost sm" style={{ color: 'var(--paper)', borderColor: 'rgba(255,255,255,0.18)' }}><IconShare size={14} /> Share link</button>
                <button className="btn ghost sm" style={{ color: 'var(--paper)', borderColor: 'rgba(255,255,255,0.18)' }}>WhatsApp</button>
                <button className="btn ghost sm" style={{ color: 'var(--paper)', borderColor: 'rgba(255,255,255,0.18)' }}>Email</button>
                <button className="btn ghost sm" style={{ color: 'var(--paper)', borderColor: 'rgba(255,255,255,0.18)' }}>SMS</button>
              </div>
            </div>

            {/* How it works */}
            <div className="row" style={{ marginTop: 32, gap: 16 }}>
              {[
                ['01', 'Share', 'Send your code or referral link via any channel.'],
                ['02', 'They book', 'Friend redeems ₹1,500 off their first consultation.'],
                ['03', 'You earn', '250 points credited the day after their first visit.'],
              ].map(([n, t, d], i) => (
                <div key={i} style={{ flex: 1, borderTop: '1px solid var(--hair)', paddingTop: 14 }}>
                  <div className="num gold" style={{ fontSize: 11 }}>{n}</div>
                  <div className="h4" style={{ marginTop: 12, fontSize: 16 }}>{t}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — your referrals */}
          <div style={{ borderLeft: '1px solid var(--hair)', padding: 'var(--pad-4)', overflow: 'auto', background: 'var(--paper-2)' }}>
            <div className="row between center">
              <div className="eyebrow">Your referrals</div>
              <div className="num" style={{ fontSize: 12, color: 'var(--gold)' }}>+750 pts earned</div>
            </div>
            <div className="row" style={{ marginTop: 14, gap: 16 }}>
              <div>
                <div className="num" style={{ fontSize: 28 }}>3</div>
                <div className="eyebrow" style={{ fontSize: 9 }}>Booked</div>
              </div>
              <div>
                <div className="num" style={{ fontSize: 28 }}>2</div>
                <div className="eyebrow" style={{ fontSize: 9 }}>Pending</div>
              </div>
              <div>
                <div className="num" style={{ fontSize: 28 }}>1</div>
                <div className="eyebrow" style={{ fontSize: 9 }}>This month</div>
              </div>
            </div>

            <div className="col" style={{ marginTop: 22 }}>
              {[
                ['Aisha Kapoor', 'A first consultation booked', '+250', 'Mar 28', 'booked'],
                ['Rohan Verma', 'Initial consultation done', '+250', 'Feb 14', 'booked'],
                ['Maya Sharma', 'Consultation booked', '+250', 'Jan 09', 'booked'],
                ['Tanvi Mukherjee', 'Code claimed · awaiting visit', '—', 'May 14', 'pending'],
                ['Kabir Singh', 'Link opened · 2x', '—', 'May 22', 'pending'],
              ].map(([n, s, p, d, k], i) => (
                <div key={i} className="row between center" style={{
                  padding: '14px 0',
                  borderBottom: '1px solid var(--hair)',
                }}>
                  <div className="row center" style={{ gap: 10 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: `radial-gradient(circle at 35% 30%, hsl(${30 + i * 20} 40% 75%), hsl(${20 + i * 15} 30% 35%))`,
                    }} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{n}</div>
                      <div className="muted" style={{ fontSize: 11 }}>{s}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="num" style={{ fontSize: 13, color: k === 'booked' ? 'var(--gold)' : 'var(--mute)' }}>{p}</div>
                    <div className="num" style={{ fontSize: 10, color: 'var(--mute-2)' }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel" style={{ marginTop: 28, padding: 16, background: 'var(--paper)' }}>
              <div className="eyebrow gold dot">Bonus opportunity</div>
              <div className="h4" style={{ marginTop: 8 }}>Refer 2 more → Elite</div>
              <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
                Two more booked referrals (500 pts) get you to Elite tier with dedicated dermatologist access.
              </div>
              <div style={{ marginTop: 12 }}><AnimatedMeter pct={60} gold /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReferralMobile = () => {
  const code = "KAYA-PRIYA-8842";
  const [copied, setCopied] = useState(false);
  return (
    <MobileShell active="rewards">
      <div style={{ padding: '14px 16px 100px', height: '100%', overflow: 'auto' }}>
        <div className="display" style={{ fontSize: 28 }}>Share what <span style={{ color: 'var(--brand)' }}>works</span>.</div>

        {/* Hero card */}
        <div className="panel" style={{
          marginTop: 16, padding: 20, position: 'relative',
          background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-deep) 100%)',
          color: 'white', borderColor: 'transparent',
        }}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>You give · they give back</div>
          <div className="display" style={{ fontSize: 32, marginTop: 8, color: 'white' }}>
            ₹1,500 <span style={{ opacity: 0.5 }}>·</span> 250 pts
          </div>
          <div style={{ fontSize: 12, marginTop: 8, color: 'rgba(255,255,255,0.85)' }}>
            ₹1,500 off for them on first consult. 250 loyalty points for you when they book.
          </div>

          {/* Code */}
          <div style={{ marginTop: 16, padding: 14, background: 'rgba(255,255,255,0.12)', borderRadius: 12 }}>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Your code</div>
            <div className="row between center" style={{ marginTop: 6 }}>
              <div className="num" style={{ fontSize: 18, letterSpacing: '0.05em' }}>{code}</div>
              <button onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                style={{
                  width: 36, height: 36, border: 0, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.18)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                }}>{copied ? <IconCheck size={14} /> : <IconCopy size={14} />}</button>
            </div>
          </div>

          <div className="row" style={{ marginTop: 12, gap: 6 }}>
            {['WhatsApp', 'SMS', 'Email', 'Copy link'].map((t, i) => (
              <button key={i} style={{
                flex: 1,
                background: 'rgba(255,255,255,0.16)',
                color: 'white', border: 0,
                borderRadius: 999, padding: '8px 0',
                fontSize: 11, fontWeight: 500,
              }}>{t}</button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="row" style={{ marginTop: 16, gap: 10 }}>
          <div className="panel" style={{ flex: 1, padding: 14, textAlign: 'center' }}>
            <div className="num" style={{ fontSize: 22 }}>3</div>
            <div className="eyebrow" style={{ fontSize: 9 }}>Booked</div>
          </div>
          <div className="panel" style={{ flex: 1, padding: 14, textAlign: 'center' }}>
            <div className="num brand" style={{ fontSize: 22 }}>+750</div>
            <div className="eyebrow" style={{ fontSize: 9 }}>Earned</div>
          </div>
          <div className="panel" style={{ flex: 1, padding: 14, textAlign: 'center' }}>
            <div className="num" style={{ fontSize: 22 }}>2</div>
            <div className="eyebrow" style={{ fontSize: 9 }}>Pending</div>
          </div>
        </div>

        <div className="eyebrow" style={{ marginTop: 22 }}>Your referrals</div>
        <div className="col" style={{ marginTop: 10 }}>
          {[
            ['Aisha Kapoor', '+250', 'Mar 28', 'mint'],
            ['Rohan Verma', '+250', 'Feb 14', 'mint'],
            ['Tanvi Mukherjee', '—', 'pending', 'mute'],
          ].map(([n, p, d, c], i) => (
            <div key={i} className="row between center" style={{ padding: '12px 0', borderBottom: '1px solid var(--hair)' }}>
              <div className="row center" style={{ gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: `radial-gradient(circle at 35% 30%, hsl(${30 + i * 25} 40% 75%), hsl(${20 + i * 15} 30% 35%))` }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{n}</div>
                  <div className="num muted" style={{ fontSize: 10 }}>{d}</div>
                </div>
              </div>
              <div className="num" style={{ fontSize: 13, color: c === 'mint' ? 'var(--mint)' : 'var(--mute-2)' }}>{p}</div>
            </div>
          ))}
        </div>
      </div>
    </MobileShell>
  );
};

export default function ReferralPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <ReferralMobile /> : <ReferralDesktop />;
}
