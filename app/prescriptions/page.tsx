'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Icon = ({ children, size = 24, className = '' }: { children: React.ReactNode; size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const IconDoc = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </Icon>
);

const IconMed = ({ size = 24 }: { size?: number }) => (
  <Icon size={size}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9h-7v2h7z"></path>
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

const Topbar = ({ subtitle = '', title = '', right }: { subtitle?: string; title?: string; right?: React.ReactNode }) => (
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
      {right}
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

const Stat = ({ label, value, suffix = '', sub = '' }: { label: string; value: string; suffix?: string; sub?: string }) => (
  <div>
    <div className="eyebrow">{label}</div>
    <div className="display h4" style={{ marginTop: 8, fontSize: 28 }}>{value}{suffix}</div>
    {sub && <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>{sub}</div>}
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

const MEDS = [
  { name: 'Tretinoin', dose: '0.025%', form: 'cream', sched: 'PM · qd', start: 'Apr 02', adh: 94, refill: 12, total: 30, qty: '15g', active: true, kind: 'rx' },
  { name: 'Azelaic acid', dose: '15%', form: 'gel', sched: 'PM · spot', start: 'Apr 16', adh: 88, refill: 8, total: 30, qty: '20g', active: true, kind: 'rx' },
  { name: 'Niacinamide', dose: '10%', form: 'serum', sched: 'AM + PM', start: 'Mar 14', adh: 96, refill: 22, total: 60, qty: '30ml', active: true, kind: 'otc' },
  { name: 'Vitamin C', dose: '15%', form: 'serum', sched: 'AM', start: 'Mar 14', adh: 91, refill: 18, total: 60, qty: '30ml', active: true, kind: 'otc' },
  { name: 'SPF 50', dose: 'PA++++', form: 'sunscreen', sched: 'AM · reapply 2h', start: 'Mar 14', adh: 100, refill: 5, total: 30, qty: '50g', active: true, kind: 'otc' },
];

const PAST_MEDS = [
  { name: 'Hydroquinone', dose: '4%', period: 'Jan 18 – Mar 14', adh: 87, reason: 'Completed pre-protocol' },
  { name: 'Doxycycline', dose: '100mg', period: 'Dec 02 – Jan 14', adh: 100, reason: 'Acute flare resolved' },
  { name: 'Adapalene', dose: '0.1%', period: 'Sep – Nov 2024', adh: 78, reason: 'Replaced w/ tretinoin' },
];

const PrescriptionsDesktop = () => {
  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="medications" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          subtitle="Medications"
          title="Active prescriptions & regimen"
          right={<button className="btn ghost sm"><IconDoc size={14} /> Download Rx</button>}
        />

        {/* Stat band */}
        <div className="row" style={{ padding: 'var(--pad-4)', borderBottom: '1px solid var(--hair)' }}>
          <div style={{ flex: 1 }}><Stat label="Active meds" value="5" /></div>
          <div style={{ width: 1, background: 'var(--hair)' }} />
          <div style={{ flex: 1, paddingLeft: 24 }}><Stat label="14-day adherence" value="94" suffix="%" sub="last reading: today 14:00" /></div>
          <div style={{ width: 1, background: 'var(--hair)' }} />
          <div style={{ flex: 1, paddingLeft: 24 }}><Stat label="Refills · 30 days" value="2" sub="Tretinoin · Azelaic" /></div>
          <div style={{ width: 1, background: 'var(--hair)' }} />
          <div style={{ flex: 1, paddingLeft: 24 }}>
            <Stat label="Next dose" value="21:00" sub="Azelaic acid · PM" />
          </div>
        </div>

        <div style={{ flex: 1, padding: 'var(--pad-4)', overflow: 'auto' }}>
          <div className="eyebrow">Active regimen · 5 medications</div>

          <div style={{ marginTop: 16, border: '1px solid var(--hair)' }}>
            {/* table header */}
            <div className="row" style={{ padding: '10px 16px', borderBottom: '1px solid var(--hair)', background: 'var(--paper-2)' }}>
              {['Medication', 'Schedule', 'Started', 'Adherence', 'Refill', 'Actions'].map((c, i) => (
                <div key={c} className="eyebrow" style={{
                  flex: i === 0 ? 2 : i === 5 ? 1.2 : 1,
                  fontSize: 9,
                }}>{c}</div>
              ))}
            </div>
            {MEDS.map((m, i) => (
              <div key={i} className="row center" style={{
                padding: '16px',
                borderBottom: i < MEDS.length - 1 ? '1px solid var(--hair)' : 0,
              }}>
                <div style={{ flex: 2 }}>
                  <div className="row center" style={{ gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, background: 'var(--paper-2)', border: '1px solid var(--hair-2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}><IconMed size={18} /></div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>
                        {m.name} <span className="muted">· {m.dose}</span>
                      </div>
                      <div className="muted" style={{ fontSize: 11 }}>{m.form} · {m.qty}</div>
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1, fontSize: 12 }}>{m.sched}</div>
                <div style={{ flex: 1 }} className="num muted">{m.start}</div>
                <div style={{ flex: 1 }}>
                  <div className="row center" style={{ gap: 8 }}>
                    <div style={{ flex: 1, maxWidth: 80 }}><AnimatedMeter pct={m.adh} gold={m.adh >= 90} /></div>
                    <div className="num" style={{ fontSize: 12, fontWeight: 500, width: 30 }}>{m.adh}%</div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="num" style={{ fontSize: 13 }}>{m.refill} <span className="muted" style={{ fontSize: 11 }}>/ {m.total} days</span></div>
                  {m.refill < 15 && <div className="tag alert" style={{ marginTop: 4 }}><span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--alert)', borderRadius: '50%', marginRight: 4 }} /> low</div>}
                </div>
                <div style={{ flex: 1.2 }} className="row" >
                  <button className="btn ghost sm" style={{ padding: '0 10px' }}>Log dose</button>
                  {m.refill < 15 && <button className="btn sm" style={{ padding: '0 10px', marginLeft: 6 }}>Refill</button>}
                </div>
              </div>
            ))}
          </div>

          {/* Today's compliance row */}
          <div className="row" style={{ marginTop: 28, gap: 24 }}>
            <div style={{ flex: 1 }}>
              <div className="eyebrow">14-day adherence by med</div>
              <div className="col" style={{ marginTop: 14, gap: 14 }}>
                {MEDS.map((m, i) => (
                  <div key={i}>
                    <div className="row between" style={{ marginBottom: 4 }}>
                      <span style={{ fontSize: 12 }}>{m.name}</span>
                      <span className="num" style={{ fontSize: 11, color: 'var(--mute)' }}>{m.adh}%</span>
                    </div>
                    <div className="row" style={{ height: 18, gap: 2 }}>
                      {Array.from({ length: 14 }).map((_, d) => {
                        const taken = (d * 7 + i * 3) % 11 !== (i + 2) && d > 0;
                        return <div key={d} style={{
                          height: taken ? '100%' : '30%',
                          background: taken ? (i === 0 ? 'var(--gold)' : 'var(--ink)') : 'var(--hair-2)',
                          flex: 1,
                        }} />;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="eyebrow">Past medications</div>
              <div className="col" style={{ marginTop: 14 }}>
                {PAST_MEDS.map((p, i) => (
                  <div key={i} className="row between center" style={{
                    padding: '14px 0', borderBottom: '1px solid var(--hair)',
                  }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name} <span className="muted">· {p.dose}</span></div>
                      <div className="muted" style={{ fontSize: 11 }}>{p.period}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="num" style={{ fontSize: 13 }}>{p.adh}%</div>
                      <div className="eyebrow" style={{ fontSize: 9 }}>{p.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrescriptionsMobile = () => (
  <MobileShell active="home">
    <div style={{ padding: '14px 16px 100px', height: '100%', overflow: 'auto' }}>
      <div className="display" style={{ fontSize: 28 }}>Your <span style={{ color: 'var(--brand)' }}>medications</span></div>
      <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>5 active · 94% adherence (14d)</div>

      {/* Today summary */}
      <div className="panel" style={{ marginTop: 16, padding: 18, background: 'var(--brand-tint-2)', borderColor: 'transparent' }}>
        <div className="row between center">
          <div>
            <div className="eyebrow brand">Today · regimen</div>
            <div className="h4" style={{ marginTop: 6, fontSize: 18 }}>4 of 6 taken</div>
          </div>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: `conic-gradient(var(--brand) 0% 66%, var(--paper-2) 66% 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%', background: 'var(--brand-tint-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 600, color: 'var(--brand)',
            }}>66%</div>
          </div>
        </div>
        <div className="muted" style={{ fontSize: 11, marginTop: 8 }}>Next dose · Azelaic acid · 21:00</div>
      </div>

      <div className="eyebrow" style={{ marginTop: 22 }}>Active medications</div>
      <div className="col" style={{ marginTop: 12, gap: 10 }}>
        {MEDS.slice(0, 4).map((m, i) => (
          <div key={i} className="panel" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconMed size={16} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="row between center">
                <div style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</div>
                <div className="num" style={{ fontSize: 11, color: m.adh >= 90 ? 'var(--mint)' : 'var(--brand)' }}>{m.adh}%</div>
              </div>
              <div className="muted" style={{ fontSize: 11 }}>{m.dose} · {m.sched}</div>
              <div style={{ marginTop: 6 }}><AnimatedMeter pct={m.adh} gold={m.adh >= 90} /></div>
            </div>
          </div>
        ))}
      </div>

      {/* Refills */}
      <div className="panel" style={{ marginTop: 16, padding: 16 }}>
        <div className="row between center">
          <div className="eyebrow brand dot">Refills needed</div>
          <span className="tag brand">2</span>
        </div>
        <div className="col" style={{ marginTop: 12, gap: 10 }}>
          {MEDS.filter(m => m.refill < 15).map((m, i) => (
            <div key={i} className="row between center">
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{m.name}</div>
                <div className="muted" style={{ fontSize: 11 }}>{m.refill} days left</div>
              </div>
              <button className="btn sm" style={{ height: 32, padding: '0 14px' }}>Refill</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </MobileShell>
);

export default function PrescriptionsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <PrescriptionsMobile /> : <PrescriptionsDesktop />;
}
