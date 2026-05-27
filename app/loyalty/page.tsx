'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Icon = ({ children, size = 24, className = '' }: { children: React.ReactNode; size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const IconCheck = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <Icon size={size} style={style}>
    <polyline points="20 6 9 17 4 12"></polyline>
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

const NavItem = ({ icon: Icon, label, active = false, href = '#' }: { icon: React.ComponentType<any>; label: string; active?: boolean; href?: string }) => (
  <Link href={href} style={{ textDecoration: 'none', width: '100%' }}>
    <div style={{
      padding: 'var(--pad-2) var(--pad-3)',
      fontSize: 13,
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
    </div>
  </Link>
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
          { k: 'home', icon: IconHome, label: 'Home', href: '/' },
          { k: 'appointments', icon: IconAppt, label: 'Sessions', href: '/sessions' },
          { k: 'progress', icon: IconProgress, label: 'Progress', href: '/before-after' },
          { k: 'medications', icon: IconMed, label: 'Medications', href: '/prescriptions' },
          { k: 'chat', icon: IconChat, label: 'Chat', href: '/chat' },
        ].map((item) => (
          <NavItem key={item.k} icon={item.icon} label={item.label} href={item.href} active={active === item.k} />
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--hair)', padding: 'var(--pad-2) 0' }}>
        {[
          { k: 'loyalty', icon: IconRewards, label: 'Loyalty', href: '/loyalty' },
          { k: 'referral', icon: IconRefer, label: 'Refer', href: '/referral' },
          { k: 'blog', icon: IconBlog, label: 'Blog', href: '/blog' },
          { k: 'video', icon: IconVideo, label: 'Videos', href: '/videos' },
        ].map((item) => (
          <NavItem key={item.k} icon={item.icon} label={item.label} href={item.href} active={active === item.k} />
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
        { k: 'home', icon: IconHome, label: 'Home', href: '/' },
        { k: 'appointments', icon: IconAppt, label: 'Sessions', href: '/sessions' },
        { k: 'rewards', icon: IconRewards, label: 'Loyalty', href: '/loyalty' },
        { k: 'chat', icon: IconChat, label: 'Chat', href: '/chat' },
      ].map((item) => (
        <Link key={item.k} href={item.href}>
          <div style={{
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
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const TIERS = [
  { k: 'silver', name: 'Silver', pts: 0, perks: ['Basic appointment access', 'Standard pricing', 'Welcome consultation'] },
  { k: 'gold', name: 'Gold', pts: 2000, perks: ['10% off treatments', 'Priority booking', 'Quarterly skin analysis', 'Free product samples'] },
  { k: 'elite', name: 'Elite', pts: 3500, perks: ['18% off treatments', 'Dedicated dermatologist', '2 complimentary facials / yr', 'Lab panels included', 'Concierge messaging'] },
  { k: 'platinum', name: 'Platinum', pts: 6000, perks: ['25% off treatments', 'Same-day appointments', 'Annual full-body assessment', 'Quarterly take-home kits', 'After-hours access', 'Travel skincare program'] },
];

const LoyaltyDesktop = () => {
  const [hover, setHover] = useState('gold');
  const current = TIERS.findIndex((t) => t.k === 'gold');
  const points = 2840;
  const nextTier = TIERS[current + 1];
  const pctToNext = ((points - TIERS[current].pts) / (nextTier.pts - TIERS[current].pts)) * 100;

  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="loyalty" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar subtitle="Membership" title="Skin loyalty program" />

        {/* Hero: current tier */}
        <div className="row" style={{ padding: 'var(--pad-4)', gap: 0, borderBottom: '1px solid var(--hair)' }}>
          <div style={{ flex: 1.4, paddingRight: 32 }}>
            <div className="eyebrow gold dot">You are · Gold</div>
            <div className="display h1" style={{ marginTop: 12 }}>
              <em>2,840</em><br />
              skin points.
            </div>
            <div className="muted" style={{ fontSize: 14, marginTop: 16, maxWidth: 440 }}>
              Earn one point per ₹100 spent on treatments, products and consultations. Redeem against any service or save for tier upgrades.
            </div>
            <div className="row" style={{ marginTop: 22, gap: 10 }}>
              <button className="btn">Redeem points <span className="arrow" /></button>
              <button className="btn ghost">Earn faster</button>
            </div>
          </div>

          {/* Tier-to-tier progression bar */}
          <div style={{ flex: 1.4, paddingLeft: 32, borderLeft: '1px solid var(--hair)' }}>
            <div className="row between center">
              <div className="eyebrow">Progress to Elite</div>
              <div className="num" style={{ fontSize: 12, color: 'var(--mute)' }}>660 pts remaining</div>
            </div>

            {/* Progression rail */}
            <div style={{ position: 'relative', marginTop: 24, paddingBottom: 60 }}>
              <div style={{ height: 2, background: 'var(--hair-2)', position: 'relative' }}>
                <div style={{
                  height: 2, background: 'var(--gold)',
                  width: `${(current / (TIERS.length - 1)) * 100 + (pctToNext / 100) * (100 / (TIERS.length - 1))}%`,
                  transition: 'width 1s ease',
                }} />
              </div>
              {TIERS.map((t, i) => {
                const left = (i / (TIERS.length - 1)) * 100;
                const reached = i <= current;
                const isHover = hover === t.k;
                return (
                  <div key={t.k}
                    onMouseEnter={() => setHover(t.k)}
                    style={{
                      position: 'absolute', top: -8, left: `${left}%`, transform: 'translateX(-50%)',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{
                      width: 18, height: 18, borderRadius: 0,
                      transform: 'rotate(45deg)',
                      background: reached ? 'var(--gold)' : 'var(--paper)',
                      border: '1px solid ' + (reached ? 'var(--gold)' : 'var(--hair-strong)'),
                      transition: 'all .3s ease',
                      boxShadow: isHover ? '0 0 0 4px var(--gold-tint)' : 'none',
                    }} />
                    <div style={{
                      position: 'absolute', top: 28, left: '50%', transform: 'translateX(-50%)',
                      whiteSpace: 'nowrap', textAlign: 'center',
                    }}>
                      <div className="tier-chip" style={{ justifyContent: 'center' }}>
                        <span className={`swatch ${t.k}`} /> {t.name}
                      </div>
                      <div className="num" style={{ fontSize: 11, color: 'var(--mute)', marginTop: 2 }}>{t.pts.toLocaleString()} pts</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hovered tier benefits */}
            <div className="panel" style={{ marginTop: 18, padding: 18 }}>
              <div className="row between center">
                <div className="tier-chip"><span className={`swatch ${hover}`} /> {TIERS.find(t => t.k === hover)?.name} benefits</div>
                {hover === 'gold' && <span className="tag gold"><span className="led" /> Current</span>}
                {hover === 'elite' && <span className="tag">Next · 660 pts</span>}
              </div>
              <div className="col" style={{ marginTop: 12, gap: 6 }}>
                {TIERS.find(t => t.k === hover)?.perks.map((p, i) => (
                  <div key={i} className="row center" style={{ gap: 8, fontSize: 13 }}>
                    <IconCheck size={12} style={{ color: 'var(--gold)' }} /> {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lower: earnings + redemptions */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', overflow: 'hidden' }}>
          {/* Earnings ledger */}
          <div style={{ padding: 'var(--pad-4)', borderRight: '1px solid var(--hair)', overflow: 'auto' }}>
            <div className="eyebrow">Recent earnings</div>
            <div className="col" style={{ marginTop: 14 }}>
              {[
                ['13 May', 'Hydrafacial · Phase 2', '+450', 'earned'],
                ['08 May', 'Vitamin C serum 30ml', '+85', 'earned'],
                ['30 Apr', 'Chemical peel · TCA', '+520', 'earned'],
                ['22 Apr', 'Redeemed · facial mask', '-200', 'redeem'],
                ['11 Apr', 'Chemical peel · TCA', '+520', 'earned'],
                ['28 Mar', 'Referral · Aisha Kapoor', '+250', 'referral'],
                ['14 Mar', 'Initial consultation', '+150', 'earned'],
              ].map(([d, t, p, kind], i) => (
                <div key={i} className="row between center" style={{
                  padding: '12px 0',
                  borderBottom: '1px solid var(--hair)',
                }}>
                  <div className="row center" style={{ gap: 14 }}>
                    <div className="num" style={{ fontSize: 11, color: 'var(--mute)', width: 50 }}>{d}</div>
                    <div>
                      <div style={{ fontSize: 13 }}>{t}</div>
                      <div className="eyebrow" style={{ fontSize: 9 }}>{kind}</div>
                    </div>
                  </div>
                  <div className="num" style={{
                    fontSize: 14,
                    color: kind === 'redeem' ? 'var(--alert)' : 'var(--ink)',
                    fontWeight: 500,
                  }}>{p}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Redemption catalog */}
          <div style={{ padding: 'var(--pad-4)', borderRight: '1px solid var(--hair)', overflow: 'auto' }}>
            <div className="eyebrow">Redeem · marketplace</div>
            <div className="col" style={{ marginTop: 14, gap: 12 }}>
              {[
                { t: 'Hydrating sheet mask', sub: 'Pack of 5', p: 800, avail: true },
                { t: 'Vitamin C serum', sub: '30ml', p: 1500, avail: true },
                { t: 'Mini facial', sub: '30 min', p: 2200, avail: true },
                { t: 'Premium hydrafacial', sub: '60 min', p: 4500, avail: false, until: 'Elite' },
                { t: 'LED light therapy', sub: '45 min', p: 3800, avail: false, until: 'Elite' },
              ].map((r, i) => (
                <div key={i} className="panel" style={{ padding: 12 }}>
                  <div className="row between center">
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{r.t}</div>
                      <div className="muted" style={{ fontSize: 11 }}>{r.sub}</div>
                    </div>
                    <div className="num" style={{ fontSize: 16, color: r.avail ? 'var(--ink)' : 'var(--mute-2)' }}>{r.p.toLocaleString()}<span style={{ fontSize: 11, color: 'var(--mute)', marginLeft: 2 }}>pts</span></div>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    {r.avail
                      ? <button className="btn ghost sm" style={{ width: '100%' }}>Redeem</button>
                      : <div className="tag" style={{ width: '100%', justifyContent: 'center', color: 'var(--mute)' }}>Unlock at {r.until}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side panel: 12-month projection */}
          <div style={{ padding: 'var(--pad-4)', background: 'var(--ink)', color: 'var(--paper)' }}>
            <div className="eyebrow" style={{ color: 'var(--mute-2)' }}>12-month projection</div>
            <div className="display" style={{ fontSize: 30, color: 'var(--paper)', marginTop: 10 }}>
              At your current pace, you'll reach <em>Platinum</em> by <em>Apr 2027</em>.
            </div>

            <div className="axis" style={{ marginTop: 28, borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.55)' }}>
              <span>JUN</span><span>SEP</span><span>DEC</span><span>MAR</span><span>JUN '27</span>
            </div>
            <div className="spark gold" style={{ height: 100, marginTop: 8, alignItems: 'flex-end' }}>
              {[14, 18, 22, 28, 34, 40, 48, 56, 64, 72, 80, 88, 96].map((h, i) => (
                <i key={i} style={{ height: `${h}%`, width: 8, background: i > 8 ? 'var(--gold)' : 'rgba(255,255,255,0.4)' }} />
              ))}
            </div>

            <div className="hr" style={{ background: 'rgba(255,255,255,0.12)', margin: '24px 0' }} />

            <div className="eyebrow" style={{ color: 'var(--mute-2)' }}>Stats this year</div>
            <div className="row" style={{ marginTop: 12, gap: 22 }}>
              <div>
                <div className="num" style={{ fontSize: 30 }}>14</div>
                <div className="eyebrow" style={{ fontSize: 9 }}>visits</div>
              </div>
              <div>
                <div className="num" style={{ fontSize: 30 }}>3</div>
                <div className="eyebrow" style={{ fontSize: 9 }}>referrals</div>
              </div>
              <div>
                <div className="num" style={{ fontSize: 30 }}>₹48k</div>
                <div className="eyebrow" style={{ fontSize: 9 }}>saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoyaltyMobile = () => (
  <MobileShell active="rewards">
    <div style={{ padding: '16px 20px 100px', height: '100%', overflow: 'auto', color: 'var(--paper)' }}>
      <div className="eyebrow gold dot">Loyalty · Gold member</div>
      <div className="display" style={{ fontSize: 56, marginTop: 12, color: 'var(--paper)' }}>
        <em>2,840</em>
      </div>
      <div className="eyebrow" style={{ color: 'var(--mute-2)' }}>skin points</div>

      {/* progression */}
      <div style={{ marginTop: 28 }}>
        <div className="row between" style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mute-2)' }}>
          <span>Gold</span><span style={{ color: 'var(--gold)' }}>660 to Elite</span>
        </div>
        <div style={{ marginTop: 8, height: 4, background: 'rgba(255,255,255,0.12)' }}>
          <div style={{ height: '100%', background: 'var(--gold)', width: '81%', transition: 'width 1s ease' }} />
        </div>
        <div className="row between" style={{ marginTop: 14 }}>
          {TIERS.map((t, i) => (
            <div key={t.k} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: 14, height: 14, transform: 'rotate(45deg)',
                background: i <= 1 ? 'var(--gold)' : 'transparent',
                border: '1px solid ' + (i <= 1 ? 'var(--gold)' : 'rgba(255,255,255,0.3)'),
                margin: '0 auto',
              }} />
              <div className="eyebrow" style={{ marginTop: 12, fontSize: 9, color: i === 1 ? 'var(--gold)' : 'var(--mute-2)' }}>{t.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel" style={{ marginTop: 28, padding: 16, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>Up next · Elite benefits</div>
        <div className="col" style={{ marginTop: 12, gap: 6 }}>
          {['18% off treatments', 'Dedicated dermatologist', '2 free facials per year', 'Lab panels included'].map((p, i) => (
            <div key={i} className="row center" style={{ gap: 8, fontSize: 13 }}>
              <IconCheck size={12} style={{ color: 'var(--gold)' }} /> {p}
            </div>
          ))}
        </div>
      </div>

      <div className="eyebrow" style={{ marginTop: 28, color: 'var(--mute-2)' }}>Recent</div>
      <div className="col" style={{ marginTop: 10 }}>
        {[['13 May', 'Hydrafacial', '+450'], ['30 Apr', 'Chemical peel', '+520'], ['28 Mar', 'Referral · Aisha', '+250']].map(([d, t, p], i) => (
          <div key={i} className="row between center" style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <div style={{ fontSize: 13 }}>{t}</div>
              <div className="num" style={{ fontSize: 10, color: 'var(--mute-2)' }}>{d}</div>
            </div>
            <div className="num" style={{ fontSize: 14, color: 'var(--gold)' }}>{p}</div>
          </div>
        ))}
      </div>
    </div>
  </MobileShell>
);

export default function LoyaltyPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <LoyaltyMobile /> : <LoyaltyDesktop />;
}
