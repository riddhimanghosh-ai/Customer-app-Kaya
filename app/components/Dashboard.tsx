'use client';

import React, { useState, useEffect } from 'react';

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

const NavRail = ({ active = 'dashboard' }: any) => (
  <div className="nav-rail">
    <div>
      <Brand />
    </div>

    <div style={{ marginTop: 22 }}>
      <div className="group-label">Care</div>
      <NavItem icon={IconHome} label="Overview" active={active === 'dashboard'} />
      <NavItem icon={IconAppt} label="Appointments" badge="2" active={active === 'appointments'} />
      <NavItem icon={IconMed} label="Medications" badge="4" active={active === 'prescriptions'} />
      <NavItem icon={IconProgress} label="Progress" active={active === 'before-after'} />
      <NavItem icon={IconChat} label="Dr. AI" active={active === 'chatbot'} />
    </div>

    <div style={{ marginTop: 8 }}>
      <div className="group-label">Membership</div>
      <NavItem icon={IconRewards} label="Loyalty" active={active === 'loyalty'} />
      <NavItem icon={IconRefer} label="Referrals" active={active === 'referral'} />
    </div>

    <div style={{ marginTop: 8 }}>
      <div className="group-label">Learn</div>
      <NavItem icon={IconBlog} label="Articles" active={active === 'blogs'} />
      <NavItem icon={IconVideo} label="Videos" active={active === 'videos'} />
    </div>

    <div style={{ marginTop: 'auto', borderTop: '1px solid var(--hair)', paddingTop: 14 }}>
      <div className="row center" style={{ gap: 10 }}>
        <div style={{
          width: 32, height: 32,
          background: 'radial-gradient(circle at 35% 30%, #e6c9a8, #6b4628)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--mono)', fontSize: 9, paddingBottom: 4,
        }}>PR</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Priya R.</div>
          <div className="num" style={{ fontSize: 10, color: 'var(--mute)' }}>ID · 8842·G</div>
        </div>
      </div>
    </div>
  </div>
);

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

const MobileShell = ({ active = 'home', children, dark }: any) => (
  <div className={`frame${dark ? ' dark' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
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
    <div className="tabbar">
      <div className={`tab${active === 'home' ? ' active' : ''}`}>
        <IconHome size={20} stroke={1.4} />
        <span>Home</span>
        <span className="dot" />
      </div>
      <div className={`tab${active === 'appt' ? ' active' : ''}`}>
        <IconAppt size={20} stroke={1.4} />
        <span>Visits</span>
        <span className="dot" />
      </div>
      <div className={`tab${active === 'progress' ? ' active' : ''}`}>
        <IconProgress size={20} stroke={1.4} />
        <span>Progress</span>
        <span className="dot" />
      </div>
      <div className={`tab${active === 'rewards' ? ' active' : ''}`}>
        <IconRewards size={20} stroke={1.4} />
        <span>Rewards</span>
        <span className="dot" />
      </div>
      <div className={`tab${active === 'ai' ? ' active' : ''}`}>
        <IconChat size={20} stroke={1.4} />
        <span>Dr. AI</span>
        <span className="dot" />
      </div>
    </div>
  </div>
);

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
            <div className="eyebrow">12-week protocol · cleared</div>
            <div className="display h2" style={{ marginTop: 12 }}>
              Pigmentation down <em>34%</em>.<br />
              Texture even. <em>On track</em> for review in <em>3</em> weeks.
            </div>
            <div className="row" style={{ marginTop: 22, gap: 24 }}>
              <Stat label="Treatment week" value={<AnimatedNum value={9} />} suffix="/ 12" />
              <div className="vr" style={{ height: 56, alignSelf: 'center' }} />
              <Stat label="Compliance" value={<AnimatedNum value={94} />} suffix="%" />
              <div className="vr" style={{ height: 56, alignSelf: 'center' }} />
              <Stat label="Next review" value="14d" />
            </div>
          </div>
          <div style={{ flex: 1, paddingLeft: 32 }}>
            <div className="eyebrow gold dot">Next visit</div>
            <div className="h3" style={{ marginTop: 12 }}>Dr. Ananya Mehra</div>
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
  const medsShort = [
    ['Tretinoin 0.025%', 'PM · pea-sized', true],
    ['Vitamin C serum', 'AM · 3 drops', true],
    ['Azelaic acid 15%', 'PM · spot', false]
  ];

  return (
    <MobileShell active="home">
      <div style={{ padding: '16px 20px 100px', height: '100%', overflow: 'auto' }}>
        <div className="row between center">
          <div>
            <div className="eyebrow">27 May · Wed</div>
            <div className="display" style={{ fontSize: 28, marginTop: 4 }}>
              Hello, <em>Priya</em>
            </div>
          </div>
          <div style={{
            width: 36, height: 36,
            background: 'radial-gradient(circle at 35% 30%, #e6c9a8, #6b4628)',
            borderRadius: '50%'
          }} />
        </div>

        <div className="panel" style={{ marginTop: 16, padding: 18, background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-deep) 100%)', color: 'white', borderColor: 'transparent' }}>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Next visit · in 4 days</div>
          <div className="h4" style={{ color: 'white', marginTop: 6, fontSize: 17 }}>Dr. Anika Mehra</div>
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, marginTop: 2 }}>Hydrafacial · Phase 2</div>
          <div className="row between center" style={{ marginTop: 14 }}>
            <div className="num" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>Sat 31 · 11:30</div>
            <button className="btn sm" style={{ background: 'white', borderColor: 'white', color: 'var(--brand)', boxShadow: 'none' }}>Confirm</button>
          </div>
        </div>

        <div className="row" style={{ marginTop: 14, gap: 10 }}>
          <div className="panel" style={{ flex: 1, padding: 14 }}>
            <span className="icon-chip sm"><IconProgress size={14} /></span>
            <div className="eyebrow" style={{ marginTop: 10 }}>Week</div>
            <div className="num" style={{ fontSize: 24, marginTop: 2 }}>9<span style={{ color: 'var(--mute)', fontSize: 12 }}>/12</span></div>
            <div style={{ marginTop: 6 }}><AnimatedMeter pct={75} brand /></div>
          </div>
          <div className="panel" style={{ flex: 1, padding: 14 }}>
            <span className="icon-chip sm mint"><IconCheck size={14} /></span>
            <div className="eyebrow" style={{ marginTop: 10 }}>Pigment</div>
            <div className="num" style={{ fontSize: 24, marginTop: 2 }}>−34<span style={{ fontSize: 12, color: 'var(--mute)' }}>%</span></div>
            <Spark data={[40, 35, 30, 28, 25, 22, 20, 18]} brand />
          </div>
        </div>

        <div className="panel" style={{ marginTop: 14, padding: 16 }}>
          <div className="row between center">
            <div className="eyebrow">Today · regimen</div>
            <div className="num" style={{ fontSize: 12, color: 'var(--mute)' }}>4 / 6</div>
          </div>
          <div className="col" style={{ marginTop: 12, gap: 8 }}>
            {medsShort.map(([t, s, done], i) => (
              <div key={i} className="row center" style={{ gap: 10 }}>
                <div style={{
                  width: 16, height: 16, borderRadius: 2,
                  border: '1px solid ' + (done ? 'var(--ink)' : 'var(--hair-2)'),
                  background: done ? 'var(--ink)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--paper)'
                }}>{done && <IconCheck size={10} />}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, textDecoration: done ? 'line-through' : 'none', color: done ? 'var(--mute)' : 'var(--ink)' }}>{t}</div>
                  <div style={{ fontSize: 11, color: 'var(--mute-2)' }}>{s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel" style={{ marginTop: 14, padding: 16 }}>
          <div className="row between center">
            <div className="eyebrow">Loyalty</div>
            <div className="tier-chip"><span className="swatch gold" /> Gold</div>
          </div>
          <div className="num" style={{ fontSize: 32, marginTop: 6 }}>2,840 <span style={{ fontSize: 12, color: 'var(--mute)' }}>pts</span></div>
          <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>660 to Elite</div>
          <div style={{ marginTop: 10 }}><AnimatedMeter pct={81} gold /></div>
        </div>
      </div>
    </MobileShell>
  );
};

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <DashboardMobile />;
  }

  return <DashboardDesktop />;
}
