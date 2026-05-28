'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SharedNavRail from './NavRail';
import MobileTabBar from './MobileTabBar';

/* Icon Components */
const Icon = ({ size = 18, children, stroke = 1.4, style }: any) => (
  <svg
    width={size} height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, ...style }}
  >
    {children}
  </svg>
);

const GoldNode = ({ cx, cy, r = 1.6 }: any) => (
  <circle cx={cx} cy={cy} r={r} fill="var(--gold)" stroke="none" />
);

const IconHome = (p: any) => (
  <Icon {...p}>
    <path d="M3.5 11 L12 4 L20.5 11 V20 H3.5 Z" />
    <path d="M10 20 V14 H14 V20" />
    <GoldNode cx={12} cy={8} />
  </Icon>
);

const IconAppt = (p: any) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
    <path d="M3.5 9.5 H20.5" />
    <path d="M8 3.5 V6.5 M16 3.5 V6.5" />
    <GoldNode cx={16} cy={14.5} />
  </Icon>
);

const IconMed = (p: any) => (
  <Icon {...p}>
    <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-30 12 12)" />
    <path d="M8.5 7.5 L15.5 16.5" />
    <GoldNode cx={15} cy={9.5} />
  </Icon>
);

const IconProgress = (p: any) => (
  <Icon {...p}>
    <rect x="3.5" y="5.5" width="7.5" height="13" rx="1" />
    <rect x="13" y="5.5" width="7.5" height="13" rx="1" />
    <path d="M11 9 H13 M11 12 H13 M11 15 H13" strokeWidth="1" />
    <GoldNode cx={17} cy={9} />
  </Icon>
);

const IconChat = (p: any) => (
  <Icon {...p}>
    <path d="M4 5.5 H20 V16 H13 L9 19.5 V16 H4 Z" />
    <circle cx="9" cy="11" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11" r="0.6" fill="currentColor" stroke="none" />
    <GoldNode cx={15} cy={11} />
  </Icon>
);

const IconRewards = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="10" r="6" />
    <path d="M8.5 14.5 L7 21 L12 18.5 L17 21 L15.5 14.5" />
    <GoldNode cx={12} cy={10} r={2} />
  </Icon>
);

const IconRefer = (p: any) => (
  <Icon {...p}>
    <circle cx="8" cy="9" r="3" />
    <path d="M2.5 19 C2.5 15.5 5 13.5 8 13.5 C11 13.5 13.5 15.5 13.5 19" />
    <circle cx="17" cy="11" r="2.4" />
    <path d="M14 19 C14 16.5 15.5 15 17 15 C18.5 15 20.5 16.5 20.5 19" />
    <GoldNode cx={17} cy={11} />
  </Icon>
);

const IconBlog = (p: any) => (
  <Icon {...p}>
    <path d="M5 4 H17 L19.5 6.5 V20 H5 Z" />
    <path d="M8 9 H16 M8 12 H16 M8 15 H13" />
    <GoldNode cx={17.5} cy={6.5} />
  </Icon>
);

const IconVideo = (p: any) => (
  <Icon {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="M10.5 9.5 L14.5 12 L10.5 14.5 Z" fill="currentColor" stroke="none" />
    <GoldNode cx={20} cy={8} r={1.2} />
  </Icon>
);

const IconBell = (p: any) => (
  <Icon {...p}>
    <path d="M6 16 V11 C6 7.5 8.5 5 12 5 C15.5 5 18 7.5 18 11 V16 L19.5 18 H4.5 Z" />
    <path d="M10 20 C10.5 21 11.2 21.5 12 21.5 C12.8 21.5 13.5 21 14 20" />
    <GoldNode cx={17} cy={7} />
  </Icon>
);

const IconSearch = (p: any) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="M15 15 L20 20" />
  </Icon>
);

const IconCheck = (p: any) => (
  <Icon {...p}>
    <path d="M4 12 L9.5 17.5 L20 7" />
  </Icon>
);

const IconSummary = (p: any) => (
  <Icon {...p}>
    <path d="M5 4 H15 L19 8 V20 H5 Z" />
    <path d="M8 10 H16 M8 13 H16 M8 16 H12" />
    <GoldNode cx={15} cy={8} />
  </Icon>
);

const IconPackage = (p: any) => (
  <Icon {...p}>
    <path d="M3.5 7 L12 4 L20.5 7 V17 L12 20 L3.5 17 Z" />
    <path d="M3.5 7 L12 10 L20.5 7" />
    <path d="M12 10 V20" />
    <GoldNode cx={12} cy={10} />
  </Icon>
);

const IconChevron = (p: any) => (
  <Icon {...p}>
    <path d="M6 9 L12 15 L18 9" />
  </Icon>
);

/* Shared Components */
const Brand = ({ tag = "Skin · Hair · Body" }: any) => (
  <div>
    <div className="brand" style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
      <span>kaya</span><i>.</i>
    </div>
    <div className="brand-mark">{tag}</div>
  </div>
);

const NavItem = ({ icon: I, label, active, badge, onClick }: any) => (
  <div className={`nav-item${active ? ' active' : ''}`} onClick={onClick}>
    <span className="nav-icon"><I size={15} stroke={1.6} /></span>
    <span>{label}</span>
    {badge && <span className={`badge${active ? '' : ' mute'}`}>{badge}</span>}
  </div>
);

const AccordionSection = ({ label, open, onToggle, children }: any) => (
  <div style={{ marginTop: 8 }}>
    <div
      className="group-label"
      onClick={onToggle}
      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', userSelect: 'none' }}
    >
      <span>{label}</span>
      <IconChevron size={11} style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.5 }} />
    </div>
    {open && <div>{children}</div>}
  </div>
);

const NavRail = ({ active = 'dashboard' }: any) => <SharedNavRail active={active} />;

const Topbar = ({ title, subtitle, right }: any) => (
  <div className="topbar">
    <div>
      <div className="eyebrow gold dot">{subtitle}</div>
      <div className="h3" style={{ marginTop: 6 }}>{title}</div>
    </div>
    <div className="row center" style={{ gap: 10 }}>
      {right}
      <button className="btn ghost sm" title="Search"><IconSearch size={14} /> Search</button>
      <button className="btn ghost sm" title="Notifications" style={{ position: 'relative' }}>
        <IconBell size={14} />
        <span style={{
          position: 'absolute', top: 4, right: 6,
          width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)'
        }} />
      </button>
    </div>
  </div>
);

const Stat = ({ label, value, sub, suffix, big }: any) => (
  <div>
    <div className="eyebrow">{label}</div>
    <div className="num" style={{
      fontSize: big ? 44 : 32,
      lineHeight: 1.05,
      letterSpacing: '-0.04em',
      marginTop: 6,
      fontWeight: 400,
    }}>
      {value}
      {suffix && <span style={{ fontSize: '0.45em', color: 'var(--mute)', marginLeft: 4 }}>{suffix}</span>}
    </div>
    {sub && <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>{sub}</div>}
  </div>
);

const AnimatedMeter = ({ pct, gold, brand, mint, sky, lavender }: any) => {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(pct), 100);
    return () => clearTimeout(t);
  }, [pct]);
  const cls = brand || gold ? ' brand' : mint ? ' mint' : sky ? ' sky' : lavender ? ' lavender' : '';
  return <div className={`meter${cls}`}><i style={{ width: `${w}%` }} /></div>;
};

const AnimatedNum = ({ value, duration = 1200, format = (n: number) => n.toLocaleString() }: any) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return <>{format(n)}</>;
};

const Spark = ({ data, gold, brand, mint }: any) => {
  const cls = brand || gold ? ' brand' : mint ? ' mint' : '';
  return (
    <div className={`spark${cls}`}>
      {data.map((h: number, i: number) => (
        <i key={i} style={{ height: `${h}%`, opacity: h < 20 ? 0.4 : 1 }} className={h < 20 ? 'mute' : ''} />
      ))}
    </div>
  );
};

const MobileShell = ({ active = 'home', children, dark }: any) => {
  return (
    <div className={`frame${dark ? ' dark' : ''}`} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className="statusbar">
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
          <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
          <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="0.5" y="0.5" width="13" height="10" rx="2" stroke="currentColor" /><rect x="2" y="2" width="9" height="7" fill="currentColor" /><rect x="14" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" /></svg>
        </span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
      <MobileTabBar active={active} />
    </div>
  );
};

const DashboardDesktop = () => {
  const today = "Wed · 27 May";

  const phases = [
    { p: 'Phase 1', s: 'Consultation + skin map', d: 'Mar 14', done: true },
    { p: 'Phase 2', s: 'Chemical peel · 3 sessions', d: 'Apr 2 – Apr 30', done: true },
    { p: 'Phase 3', s: 'Hydrafacial · 4 sessions', d: 'May 7 – Jun 6', done: false, current: true },
    { p: 'Phase 4', s: 'Maintenance review', d: 'Jun 18', done: false }
  ];

  const meds = [
    { t: 'Tretinoin 0.025%', sub: 'PM · pea-sized', taken: true, time: '08:00' },
    { t: 'Vitamin C serum', sub: 'AM · 3 drops', taken: true, time: '08:05' },
    { t: 'Niacinamide 10%', sub: 'AM + PM', taken: true, time: '12:30' },
    { t: 'SPF 50 PA++++', sub: 'reapply 2h', taken: true, time: '14:00' },
    { t: 'Azelaic acid 15%', sub: 'PM · spot', taken: false, time: '21:00', up: true },
    { t: 'Moisturizer ceramide', sub: 'PM', taken: false, time: '22:00' }
  ];

  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="dashboard" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          subtitle={`Good afternoon · ${today}`}
          title="Priya, your skin is on schedule."
          right={<div className="tag signal"><span className="led pulse" /> Plan active</div>}
        />

        <div className="row" style={{ padding: 'var(--pad-4) var(--pad-4) 0', gap: 0 }}>
          <div style={{ flex: 1.2, paddingRight: 32, borderRight: '1px solid var(--hair)' }}>
            <div className="eyebrow">Ongoing care · Mar 14 – Jun 18</div>
            <div className="display h2" style={{ marginTop: 12 }}>
              9 sessions completed.<br />
              Regimen <em>94% compliant</em>. Review in <em>3 weeks</em>.
            </div>
            <div className="row" style={{ marginTop: 22, gap: 24 }}>
              <Stat label="Sessions done" value={<AnimatedNum value={9} />} suffix="/ 12" />
              <div className="vr" style={{ height: 56, alignSelf: 'center' }} />
              <Stat label="Compliance" value={<AnimatedNum value={94} />} suffix="%" />
              <div className="vr" style={{ height: 56, alignSelf: 'center' }} />
              <Stat label="Next review" value="14d" />
            </div>
          </div>
          <div style={{ flex: 1, paddingLeft: 32 }}>
            <div className="eyebrow gold dot">Next visit</div>
            <div className="h3" style={{ marginTop: 12 }}>Dr. Ananya Sharma</div>
            <div className="muted" style={{ marginTop: 4 }}>Hydrafacial · Phase 2 follow-up</div>
            <div className="row between center" style={{ marginTop: 16 }}>
              <div>
                <div className="num" style={{ fontSize: 30, lineHeight: 1, fontWeight: 400, letterSpacing: '-0.03em' }}>
                  Sat 31 / 11:30
                </div>
                <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>Bandra West clinic · Suite 04</div>
              </div>
              <button className="btn sm">Confirm <span className="arrow" /></button>
            </div>
            <div className="row" style={{ marginTop: 14, gap: 6 }}>
              <span className="tag">in 4 days</span>
              <span className="tag">30 min</span>
              <span className="tag gold"><span className="led" /> Pre-visit checklist</span>
            </div>
          </div>
        </div>

        <div className="hr" style={{ margin: '32px 0 0' }} />

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 0, overflow: 'hidden' }}>
          <div style={{ padding: 'var(--pad-4)', borderRight: '1px solid var(--hair)' }}>
            <div className="row between center">
              <div className="eyebrow">Treatment timeline</div>
              <div className="muted" style={{ fontSize: 11 }}>Mar — Jun · 12 weeks</div>
            </div>
            <div style={{ marginTop: 14 }}>
              <AnimatedMeter pct={75} gold />
            </div>
            <div className="row between" style={{ marginTop: 10, fontSize: 11, color: 'var(--mute)', fontFamily: 'var(--mono)' }}>
              <span>W01</span><span>W04</span><span>W08</span><span style={{ color: 'var(--gold)' }}>● W09</span><span>W12</span>
            </div>

            <div style={{ marginTop: 22 }} className="col">
              {phases.map((x, i) => (
                <div key={i} className="row" style={{ gap: 14, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 18, height: 18, marginTop: 2, flexShrink: 0,
                    border: '1px solid ' + (x.done ? 'var(--ink)' : x.current ? 'var(--gold)' : 'var(--hair-2)'),
                    background: x.done ? 'var(--ink)' : x.current ? 'var(--gold)' : 'transparent',
                    color: 'var(--paper)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {x.done && <IconCheck size={12} />}
                    {x.current && <span style={{ width: 6, height: 6, background: 'var(--paper)', borderRadius: '50%' }} />}
                  </div>
                  <div style={{ flex: 1, paddingBottom: 6, borderBottom: i < 3 ? '1px solid var(--hair)' : '0' }}>
                    <div className="row between center">
                      <div style={{ fontWeight: 500, fontSize: 13 }}>{x.p} · <span className="muted" style={{ fontWeight: 400 }}>{x.s}</span></div>
                      <div className="num muted" style={{ fontSize: 11 }}>{x.d}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: 'var(--pad-4)', borderRight: '1px solid var(--hair)' }}>
            <div className="eyebrow">Today · regimen</div>
            <div className="h4" style={{ marginTop: 8 }}>4 of 6 taken</div>
            <div style={{ marginTop: 12 }}><AnimatedMeter pct={66} /></div>

            <div className="col" style={{ marginTop: 22, gap: 10 }}>
              {meds.map((m, i) => (
                <div key={i} className="row between center" style={{
                  padding: '8px 10px',
                  background: m.up ? 'var(--gold-tint)' : 'transparent',
                  border: m.up ? '1px solid var(--gold-rule)' : '1px solid transparent',
                  borderRadius: 2,
                  margin: '0 -10px'
                }}>
                  <div className="row center" style={{ gap: 10 }}>
                    <div style={{
                      width: 14, height: 14, borderRadius: 2,
                      border: '1px solid ' + (m.taken ? 'var(--ink)' : 'var(--hair-2)'),
                      background: m.taken ? 'var(--ink)' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--paper)'
                    }}>{m.taken && <IconCheck size={9} />}</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 500, textDecoration: m.taken ? 'line-through' : 'none', color: m.taken ? 'var(--mute)' : 'var(--ink)' }}>{m.t}</div>
                      <div style={{ fontSize: 11, color: 'var(--mute-2)' }}>{m.sub}</div>
                    </div>
                  </div>
                  <div className="num" style={{ fontSize: 11, color: m.up ? 'var(--gold)' : 'var(--mute-2)' }}>{m.time}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: 'var(--pad-4)', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <div className="row between center">
                <div className="eyebrow">Loyalty status</div>
                <div className="tier-chip"><span className="swatch gold" /> Gold</div>
              </div>
              <div className="num" style={{ fontSize: 40, fontWeight: 400, letterSpacing: '-0.03em', marginTop: 8 }}>
                <AnimatedNum value={2840} />
                <span style={{ fontSize: 14, color: 'var(--mute)', marginLeft: 6 }}>pts</span>
              </div>
              <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>660 to <span style={{ color: 'var(--ink)' }}>Elite</span></div>
              <div style={{ marginTop: 10 }}><AnimatedMeter pct={81} gold /></div>
              <div className="row between" style={{ marginTop: 8, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--mute-2)' }}>
                <span>SILVER</span><span style={{ color: 'var(--gold)' }}>● GOLD</span><span>ELITE</span><span>PLATINUM</span>
              </div>
            </div>

            <div className="hr" />

            <div>
              <div className="eyebrow">Reminders</div>
              <div className="col" style={{ gap: 12, marginTop: 12 }}>
                <div className="rail-l" style={{ borderLeftColor: 'var(--gold)' }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>Pre-visit fasting</div>
                  <div className="muted" style={{ fontSize: 11 }}>No retinoids 48h before Sat 31</div>
                </div>
                <div className="rail-l" style={{ borderLeftColor: 'var(--hair-strong)' }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>Lab results ready</div>
                  <div className="muted" style={{ fontSize: 11 }}>Skin microbiome panel · view PDF</div>
                </div>
                <div className="rail-l" style={{ borderLeftColor: 'var(--hair-strong)' }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>Photo log overdue</div>
                  <div className="muted" style={{ fontSize: 11 }}>Last upload 9 days ago · add new</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--hair)' }}>
              <div className="eyebrow gold dot">Tagline</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.15, marginTop: 6, letterSpacing: '-0.01em' }}>
                Expert dermatology <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>care</em>, personalised for you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardMobile = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [meds, setMeds] = useState([
    { t: 'Tretinoin 0.025% Cream', sub: 'PM · pea-sized amount', taken: true, time: '08:00' },
    { t: 'Kaya Antox Vit-C Serum', sub: 'AM · 3 drops', taken: true, time: '08:05' },
    { t: 'Kaya Niacinamide 10% Serum', sub: 'AM + PM', taken: true, time: '12:30' },
    { t: 'Kaya Daily Shield SPF 50', sub: 'AM · reapply every 2h', taken: true, time: '14:00' },
    { t: 'Azelaic Acid 15% Gel', sub: 'PM · spot treatment', taken: false, time: '21:00' },
    { t: 'Kaya Replenishing Night Cream', sub: 'PM · last step', taken: false, time: '22:00' },
  ]);
  const toggleMed = (i: number) => setMeds(m => m.map((x, j) => j === i ? { ...x, taken: !x.taken } : x));
  const takenCount = meds.filter(m => m.taken).length;

  const pageTabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'sessions', label: 'Sessions' },
    { id: 'progress', label: 'Progress' },
    { id: 'rx', label: 'Rx' },
    { id: 'offers', label: 'Offers' },
    { id: 'purchases', label: 'Purchases' },
  ];

  const summaries = [
    { date: '13 May', type: 'Consultation', title: 'Post-peel review · Dr. Sharma', preview: 'Skin tone improving. Phase 3 HydraFacial sessions initiated. Follow up Jun 18.' },
    { date: '30 Apr', type: 'Treatment', title: 'Kaya Chemical Peel Treatment · TCA', preview: 'Mild erythema, resolved within 24h. Phase 2 complete.' },
    { date: '14 Apr', type: 'Treatment', title: 'Kaya HydraFacial · Phase 3 · Session 1', preview: 'Deep cleanse + hydration infusion. Skin responded well.' },
  ];

  const products = [
    { name: 'Tretinoin 0.025% Cream', qty: '15g · 12 days left', low: true },
    { name: 'Kaya Antox Vit-C Serum', qty: '30ml · 18 days left', low: false },
    { name: 'Kaya Daily Shield SPF 50', qty: '50ml · runs out Jun 20', low: false },
  ];

  const reminders = [
    { text: 'No retinoids 48h before Sat 31 session', hi: true },
    { text: 'Photo log overdue · last upload 9 days ago', hi: false },
  ];

  const offers = [
    { title: '20% off Hydrafacial', subtitle: 'Book before June 30 · Save ₹800', tag: 'MEMBER' },
    { title: 'Free skin analysis', subtitle: 'With any treatment in June', tag: 'LIMITED' },
    { title: 'Refer & earn ₹500', subtitle: 'For every friend who completes a booking', tag: 'REFERRAL' },
  ];

  return (
    <MobileShell active="home">
      <div style={{ height: '100%', overflow: 'auto' }}>

        {/* Profile Header */}
        <div style={{
          background: 'var(--ink)',
          padding: '18px 20px 0',
          color: 'white',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{
                width: 46, height: 46,
                background: 'var(--paper-3)',
                color: 'var(--ink)',
                border: '1px solid var(--rule)',
                borderRadius: '0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 600,
                flexShrink: 0,
              }}>PR</div>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em' }}>Priya R.</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--mono)', marginTop: 1 }}>ID · 8842-G</div>
              </div>
            </div>
            <div style={{
              background: 'var(--accent)',
              fontSize: 9, fontWeight: 700, letterSpacing: '0.07em',
              padding: '4px 10px', borderRadius: 999, marginTop: 2,
            }}>GOLD</div>
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 12, paddingBottom: 14, fontSize: 10, color: 'rgba(255,255,255,0.75)', flexWrap: 'wrap' }}>
            <span>+91 98XX XXXX 21</span>
            <span>Bandra West, Mumbai</span>
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: 'var(--paper-2)',
          borderBottom: '1px solid var(--hair)',
        }}>
          {[
            { label: 'Sessions', val: '9' },
            { label: 'Packages', val: '2' },
            { label: 'Photos', val: '5' },
            { label: 'Compliance', val: '94%' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '10px 4px', textAlign: 'center',
              borderRight: i < 3 ? '1px solid var(--hair)' : 'none',
            }}>
              <div className="num" style={{ fontSize: 17 }}>{s.val}</div>
              <div style={{ fontSize: 9, color: 'var(--mute)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* In-page Tab Navigation */}
        <div style={{
          display: 'flex', overflowX: 'auto',
          borderBottom: '1px solid var(--hair)',
          background: 'var(--paper)',
          scrollbarWidth: 'none',
        }}>
          {pageTabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              flexShrink: 0, padding: '9px 16px',
              background: 'none', border: 'none',
              borderBottom: activeTab === t.id ? '2px solid var(--brand)' : '2px solid transparent',
              color: activeTab === t.id ? 'var(--brand)' : 'var(--mute)',
              fontSize: 12, fontWeight: activeTab === t.id ? 600 : 400,
              cursor: 'pointer', letterSpacing: '0.02em',
            }}>{t.label}</button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ padding: '16px 16px 100px' }}>

          {activeTab === 'overview' && <>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.01em' }}>Hi Priya</div>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>27 May · Wednesday</div>
            </div>

            {/* Next appointment */}
            <div className="panel" style={{ padding: 16, background: 'var(--ink)', color: 'white', borderColor: 'var(--ink)' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.06em', fontFamily: 'var(--mono)' }}>NEXT VISIT · IN 4 DAYS</div>
              <div style={{ color: 'white', marginTop: 6, fontSize: 15, fontWeight: 600 }}>Dr. Ananya Sharma</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, marginTop: 2 }}>Hydrafacial · Phase 2 · Bandra West</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                <div className="num" style={{ fontSize: 20, letterSpacing: '-0.02em' }}>Sat 31 · 11:30</div>
                <button className="btn sm" style={{ background: 'var(--paper)', borderColor: 'var(--rule)', color: 'var(--ink)', boxShadow: 'none' }}>Confirm</button>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
              {[
                { Icon: IconAppt, label: 'Session History', sub: '9 sessions total', action: () => router.push('/sessions') },
                { Icon: IconSummary, label: 'Summary', sub: 'Session summaries', action: () => router.push('/summary') },
                { Icon: IconMed, label: 'My Rx', sub: '6 items active', action: () => router.push('/prescriptions') },
                { Icon: IconRewards, label: 'Loyalty', sub: 'Gold · 2,840 pts', action: () => router.push('/loyalty') },
              ].map((card, i) => (
                <div key={i} className="panel" onClick={card.action} style={{ padding: 14, cursor: 'pointer' }}>
                  <div style={{ width: 32, height: 32, border: '1px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                    <card.Icon size={16} stroke={1.4} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{card.label}</div>
                  <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 3 }}>{card.sub}</div>
                </div>
              ))}
            </div>

            {/* Reminders / Nudges */}
            <div className="panel" style={{ marginTop: 12, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="eyebrow gold dot">Reminders</div>
                <span style={{ fontSize: 10, color: 'var(--mute)' }}>{reminders.length} active</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
                {reminders.map((r, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: '10px 12px',
                    background: r.hi ? 'var(--accent-soft)' : 'var(--paper-2)',
                    borderRadius: 0,
                    borderLeft: `3px solid ${r.hi ? 'var(--accent)' : 'var(--hair-strong)'}`,
                  }}>
                    <div style={{ fontSize: 12, lineHeight: 1.4 }}>{r.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </>}

          {activeTab === 'sessions' && <>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Recent sessions</div>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>9 total · 2 packages active</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {summaries.map((s, i) => (
                <div key={i} className="panel" onClick={() => router.push('/summary')} style={{ padding: 14, cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="num" style={{ fontSize: 11, color: 'var(--mute)' }}>{s.date}</div>
                    <span className="tag" style={{ fontSize: 10 }}>{s.type}</span>
                  </div>
                  <div style={{ fontWeight: 500, fontSize: 13, marginTop: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 4, lineHeight: 1.4 }}>{s.preview}</div>
                  <div style={{ fontSize: 11, color: 'var(--brand)', marginTop: 8, fontWeight: 500 }}>View summary →</div>
                </div>
              ))}
            </div>
            <button className="btn ghost sm" onClick={() => router.push('/sessions')} style={{ marginTop: 12, width: '100%' }}>
              View all sessions
            </button>
          </>}

          {activeTab === 'progress' && <>
            {/* Compliance */}
            <div className="panel" style={{ padding: 16, marginBottom: 12 }}>
              <div className="eyebrow">Regimen compliance</div>
              <div className="num" style={{ fontSize: 30, marginTop: 6 }}>94<span style={{ fontSize: 12, color: 'var(--mute)' }}>%</span></div>
              <div style={{ marginTop: 8 }}><AnimatedMeter pct={94} brand /></div>
              <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 6 }}>Mar 14 – Jun 18 · {takenCount} of {meds.length} taken today</div>
            </div>

            {/* Medication tracking */}
            <div className="panel" style={{ padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="eyebrow">Today · regimen</div>
                <div className="num" style={{ fontSize: 12, color: 'var(--mute)' }}>{takenCount} / {meds.length}</div>
              </div>
              <div style={{ marginTop: 8 }}><AnimatedMeter pct={(takenCount / meds.length) * 100} /></div>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {meds.map((m, i) => (
                  <div key={i} onClick={() => toggleMed(i)} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '8px 0', borderBottom: i < meds.length - 1 ? '1px solid var(--hair)' : 'none', cursor: 'pointer',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 16, height: 16, borderRadius: 2, flexShrink: 0,
                        border: '1px solid ' + (m.taken ? 'var(--ink)' : 'var(--hair-2)'),
                        background: m.taken ? 'var(--ink)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--paper)',
                      }}>{m.taken && <IconCheck size={10} />}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 500, textDecoration: m.taken ? 'line-through' : 'none', color: m.taken ? 'var(--mute)' : 'var(--ink)' }}>{m.t}</div>
                        <div style={{ fontSize: 10, color: 'var(--mute-2)' }}>{m.sub}</div>
                      </div>
                    </div>
                    <div className="num" style={{ fontSize: 11, color: 'var(--mute-2)' }}>{m.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </>}

          {activeTab === 'rx' && <>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Active prescriptions</div>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>Prescribed by Dr. Ananya Sharma</div>
            </div>
            <div className="panel" style={{ padding: 16, marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="eyebrow">My products</div>
                <button className="btn ghost sm">Reorder all</button>
              </div>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {products.map((p, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < products.length - 1 ? '1px solid var(--hair)' : 'none' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: p.low ? 'var(--gold)' : 'var(--mute-2)', marginTop: 2 }}>{p.qty}</div>
                    </div>
                    {p.low && <button className="btn sm" style={{ fontSize: 10, padding: '4px 10px', height: 28 }}>Order now</button>}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--hair)', marginTop: 8, paddingTop: 12 }}>
                <a href="https://www.kaya.in/products" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 500, textDecoration: 'none' }}>
                  View more products from Kaya →
                </a>
              </div>
            </div>
            <div className="panel" style={{ padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="eyebrow">Loyalty</div>
                <div className="tier-chip"><span className="swatch gold" /> Gold</div>
              </div>
              <div style={{ marginTop: 8, fontSize: 13 }}>3 referrals · <span style={{ color: 'var(--gold)', fontWeight: 600 }}>₹900 saved</span> total</div>
              <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 4 }}>5 more referrals to reach Platinum · ₹500 each</div>
              <div style={{ marginTop: 10 }}><AnimatedMeter pct={38} gold /></div>
            </div>
          </>}

          {activeTab === 'purchases' && <>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>My purchases</div>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>Products, sessions & treatments</div>
            </div>
            <div className="panel" style={{ padding: 16, marginBottom: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Products ordered</div>
              {[
                { name: 'Tretinoin 0.025% Cream', date: '02 May 2025', price: '₹580' },
                { name: 'Kaya Daily Shield SPF 50', date: '14 Mar 2025', price: '₹650' },
                { name: 'Azelaic Acid 15% Gel', date: '16 Apr 2025', price: '₹490' },
                { name: 'Kaya Niacinamide 10% Serum', date: '14 Mar 2025', price: '₹420' },
              ].map((p, i, arr) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--hair)' : 'none' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--mute)', marginTop: 2 }}>{p.date}</div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{p.price}</div>
                </div>
              ))}
            </div>
            <div className="panel" style={{ padding: 16 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Sessions & treatments</div>
              {[
                { name: 'Post-peel review · Dr. Sharma', date: '13 May 2025', price: '₹800', type: 'Consultation' },
                { name: 'Chemical Peel · TCA · Phase 2', date: '30 Apr 2025', price: '₹2,800', type: 'Treatment' },
                { name: 'HydraFacial · Phase 3 · Session 1', date: '14 Apr 2025', price: '₹3,200', type: 'Treatment' },
                { name: 'Consultation · Dr. Ananya Sharma', date: '14 Mar 2025', price: '₹600', type: 'Consultation' },
              ].map((s, i, arr) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--hair)' : 'none' }}>
                  <div style={{ flex: 1, minWidth: 0, paddingRight: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</div>
                    <div style={{ display: 'flex', gap: 6, marginTop: 4, alignItems: 'center' }}>
                      <span className="tag" style={{ fontSize: 10 }}>{s.type}</span>
                      <span style={{ fontSize: 11, color: 'var(--mute)' }}>{s.date}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, flexShrink: 0 }}>{s.price}</div>
                </div>
              ))}
            </div>
          </>}

          {activeTab === 'offers' && <>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Latest offers</div>
              <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 2 }}>Exclusive Gold member deals</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {offers.map((o, i) => (
                <div key={i} style={{ overflow: 'hidden', border: '1px solid var(--rule)' }}>
                  <div style={{ background: 'var(--paper-3)', padding: '18px 16px' }}>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.06em', fontFamily: 'var(--mono)', background: 'var(--paper-2)', padding: '2px 8px', border: '1px solid var(--rule)' }}>{o.tag}</span>
                    <div style={{ fontSize: 16, fontWeight: 700, marginTop: 10, letterSpacing: '-0.01em' }}>{o.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 4 }}>{o.subtitle}</div>
                  </div>
                  <div style={{ padding: '10px 16px', background: 'var(--paper)', display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn sm" style={{ fontSize: 11 }}>Claim offer</button>
                  </div>
                </div>
              ))}
            </div>
          </>}

        </div>
      </div>
    </MobileShell>
  );
};

export default function Dashboard() {
  return (
    <>
      <div className="desktop-only"><DashboardDesktop /></div>
      <div className="mobile-only"><DashboardMobile /></div>
    </>
  );
}
