'use client';

import React, { useState, useEffect, useRef } from 'react';

/* Icons */
const Icon = ({ size = 18, children, stroke = 1.4, style }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    {children}
  </svg>
);

const GoldNode = ({ cx, cy, r = 1.6 }: any) => (
  <circle cx={cx} cy={cy} r={r} fill="var(--gold)" stroke="none" />
);

const IconCamera = (p: any) => (
  <Icon {...p}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </Icon>
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

const NavRail = ({ active = 'before-after' }: any) => (
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

const AnimatedMeter = ({ pct, gold }: any) => {
  const [w, setW] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setW(pct), 100);
    return () => clearTimeout(t);
  }, [pct]);
  return <div className={`meter${gold ? ' gold' : ''}`}><i style={{ width: `${w}%` }} /></div>;
};

const MobileShell = ({ active = 'progress', children }: any) => (
  <div className="frame" style={{ display: 'flex', flexDirection: 'column' }}>
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

/* Slider Component */
const Slider = ({ height = 460 }: any) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handle = (e: any) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.touches?.[0]?.clientX ?? e.clientX) - r.left;
    setPos(Math.max(0, Math.min(100, (x / r.width) * 100)));
  };

  const BABefore = () => (
    <div className="photo-ph" style={{
      width: '100%', height: '100%',
      background: `
        radial-gradient(35% 25% at 32% 38%, rgba(140,80,55,0.55) 0%, transparent 70%),
        radial-gradient(28% 22% at 58% 42%, rgba(130,75,50,0.5) 0%, transparent 70%),
        radial-gradient(18% 14% at 48% 56%, rgba(120,65,40,0.45) 0%, transparent 70%),
        radial-gradient(120% 80% at 30% 20%, #f3dcc6 0%, #d8b89a 35%, #b08866 70%, #6a4a32 100%)
      `,
    }} />
  );

  const BAAfter = () => (
    <div className="photo-ph" style={{
      width: '100%', height: '100%',
      background: `
        radial-gradient(120% 80% at 30% 20%, #f6e6d4 0%, #e6c8a8 40%, #c39a72 75%, #7a553a 100%)
      `,
    }} />
  );

  return (
    <div
      ref={ref}
      onPointerDown={(e) => { dragging.current = true; ref.current?.setPointerCapture(e.pointerId); handle(e); }}
      onPointerMove={(e) => dragging.current && handle(e)}
      onPointerUp={() => dragging.current = false}
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'none',
        background: 'var(--paper-2)',
      }}
    >
      <BABefore />
      <div style={{
        position: 'absolute', inset: 0, width: `${pos}%`, overflow: 'hidden',
        borderRight: '1px solid var(--paper)',
      }}>
        <BAAfter />
      </div>

      <div style={{ position: 'absolute', top: 14, left: 14 }}>
        <div className="tag solid">After · Week 9</div>
      </div>
      <div style={{ position: 'absolute', top: 14, right: 14 }}>
        <div className="tag" style={{ background: 'var(--paper)' }}>Before · Week 1</div>
      </div>

      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: `${pos}%`,
        width: 1, background: 'var(--paper)',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 40, height: 40, borderRadius: '50%',
          background: 'var(--paper)',
          border: '1px solid var(--ink)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ink)',
          cursor: 'ew-resize',
        }}>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M5 3 L1 7 L5 11" />
            <path d="M13 3 L17 7 L13 11" />
            <path d="M1 7 H17" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const SESSIONS = [
  { wk: 'W01', date: 'Mar 14', pigment: 100, texture: 100 },
  { wk: 'W04', date: 'Apr 04', pigment: 88, texture: 92 },
  { wk: 'W07', date: 'Apr 30', pigment: 78, texture: 84 },
  { wk: 'W09', date: 'May 13', pigment: 66, texture: 76 },
];

const BeforeAfterDesktop = () => {
  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="before-after" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          subtitle="Progress · Phase 2"
          title="Pigmentation protocol"
          right={<button className="btn"><IconCamera size={14} /> New photo log</button>}
        />

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--pad-4)', borderRight: '1px solid var(--hair)', display: 'flex', flexDirection: 'column' }}>
            <div className="row between" style={{ alignItems: 'flex-end' }}>
              <div>
                <div className="eyebrow gold dot">Week 1 → Week 9 · 56 days</div>
                <div className="display" style={{ fontSize: 32, marginTop: 8 }}>
                  Pigmentation reduced by <em>34%</em>.
                </div>
              </div>
              <div className="row" style={{ gap: 6 }}>
                <button className="btn ghost sm">Front</button>
                <button className="btn ghost sm" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>Left ¾</button>
                <button className="btn ghost sm">Right ¾</button>
              </div>
            </div>

            <div style={{ marginTop: 16, border: '1px solid var(--hair-2)' }}>
              <Slider height={420} />
            </div>

            <div className="muted" style={{ fontSize: 11, marginTop: 10, textAlign: 'center', fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              ← Drag to compare · Captured under standardised clinic light
            </div>

            <div className="eyebrow" style={{ marginTop: 22 }}>Photo log · 4 sessions</div>
            <div className="row" style={{ marginTop: 12, gap: 10 }}>
              {SESSIONS.map((s, i) => (
                <div key={i} style={{ flex: 1 }}>
                  <div style={{
                    aspectRatio: '1 / 1.1',
                    background: `radial-gradient(70% 60% at 40% 30%, hsl(28 ${50 - i * 3}% ${60 + i * 4}%) 0%, hsl(24 ${40 - i * 3}% ${30 + i * 2}%) 100%)`,
                    border: i === 3 ? '1px solid var(--gold)' : '1px solid var(--hair-2)',
                    position: 'relative',
                  }}>
                    {i === 3 && (
                      <div style={{
                        position: 'absolute', top: 6, left: 6,
                        width: 8, height: 8, background: 'var(--gold)', borderRadius: '50%',
                      }} />
                    )}
                  </div>
                  <div className="num" style={{ fontSize: 11, marginTop: 6, fontWeight: 500 }}>{s.wk}</div>
                  <div className="muted" style={{ fontSize: 10 }}>{s.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 'var(--pad-4)' }}>
              <div className="eyebrow">Skin metrics · clinic capture</div>
              <div className="col" style={{ marginTop: 16, gap: 18 }}>
                {[
                  { label: 'Pigmentation', from: 100, to: 66, unit: 'index' },
                  { label: 'Even tone', from: 62, to: 84, unit: '%', positive: true },
                  { label: 'Texture', from: 100, to: 76, unit: 'index' },
                  { label: 'Pore index', from: 100, to: 82, unit: 'index' },
                  { label: 'Hydration', from: 48, to: 71, unit: '%', positive: true },
                ].map((m, i) => {
                  const change = m.positive ? m.to - m.from : m.from - m.to;
                  const sign = change > 0 ? '+' : '';
                  return (
                    <div key={i}>
                      <div className="row between center">
                        <div style={{ fontSize: 13, fontWeight: 500 }}>{m.label}</div>
                        <div className="row center" style={{ gap: 6 }}>
                          <div className="num muted" style={{ fontSize: 11 }}>{m.from} →</div>
                          <div className="num" style={{ fontSize: 14, fontWeight: 500 }}>{m.to}</div>
                          <div className="num" style={{ fontSize: 11, color: 'var(--gold)' }}>
                            {sign}{Math.abs(change)}{m.unit === '%' ? 'pp' : ''}
                          </div>
                        </div>
                      </div>
                      <div style={{ marginTop: 6, position: 'relative', height: 22 }}>
                        <div style={{ position: 'absolute', top: 10, left: 0, right: 0, height: 1, background: 'var(--hair)' }} />
                        <div style={{ position: 'absolute', top: 6, left: `${m.from - 30}%`, width: 9, height: 9, border: '1px solid var(--hair-strong)', background: 'var(--paper-2)' }} />
                        <div style={{ position: 'absolute', top: 6, left: `${m.to - 30}%`, width: 9, height: 9, background: 'var(--gold)', transition: 'left 1s ease', transform: 'rotate(45deg)' }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ background: 'var(--paper-2)', padding: 'var(--pad-4)', flex: 1 }}>
              <div className="eyebrow gold dot">Clinician note · Dr. A. Mehra</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.35, marginTop: 12, letterSpacing: '-0.005em' }}>
                "Pigment regression is well within projected range. Recommend tapering retinoid frequency and introducing tranexamic acid topical from Week 10."
              </div>
              <div className="muted" style={{ fontSize: 11, marginTop: 14, fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}>
                · Logged 13 May, 12:42 IST
              </div>

              <div className="hr" style={{ margin: '22px 0' }} />

              <div className="eyebrow">Next milestone</div>
              <div style={{ marginTop: 10 }}>
                <div className="row between center">
                  <div className="num" style={{ fontSize: 22 }}>W12 review</div>
                  <div className="num muted" style={{ fontSize: 12 }}>Jun 18</div>
                </div>
                <div style={{ marginTop: 8 }}><AnimatedMeter pct={75} gold /></div>
                <div className="muted" style={{ fontSize: 11, marginTop: 6 }}>3 weeks remaining · 1 photo log due</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterMobile = () => (
  <MobileShell active="progress">
    <div style={{ padding: '14px 20px 100px', height: '100%', overflow: 'auto' }}>
      <div className="eyebrow gold dot">Week 1 → Week 9</div>
      <div className="display" style={{ fontSize: 28, marginTop: 6 }}>
        Pigment <em>−34%</em>
      </div>

      <div style={{ marginTop: 16, border: '1px solid var(--hair-2)' }}>
        <Slider height={320} />
      </div>
      <div className="muted" style={{ fontSize: 10, marginTop: 8, textAlign: 'center', fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        ← Drag to compare
      </div>

      <div className="row" style={{ marginTop: 18, gap: 6 }}>
        {SESSIONS.map((s, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{
              aspectRatio: '1 / 1.1',
              background: `radial-gradient(70% 60% at 40% 30%, hsl(28 ${50 - i * 3}% ${60 + i * 4}%) 0%, hsl(24 ${40 - i * 3}% ${30 + i * 2}%) 100%)`,
              border: i === 3 ? '1px solid var(--gold)' : '1px solid var(--hair-2)',
            }} />
            <div className="num" style={{ fontSize: 10, marginTop: 4 }}>{s.wk}</div>
          </div>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 20, padding: 14 }}>
        <div className="eyebrow">Skin metrics</div>
        <div className="col" style={{ marginTop: 12, gap: 12 }}>
          {[
            ['Pigment', '100 → 66', '−34', 'pp'],
            ['Even tone', '62 → 84', '+22', 'pp'],
            ['Texture', '100 → 76', '−24', 'idx'],
          ].map(([l, v, c, u], i) => (
            <div key={i}>
              <div className="row between center">
                <div style={{ fontSize: 12, fontWeight: 500 }}>{l}</div>
                <div className="num" style={{ fontSize: 12, color: 'var(--gold)' }}>{c}{u}</div>
              </div>
              <div className="num muted" style={{ fontSize: 11 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel" style={{ marginTop: 14, padding: 14, background: 'var(--paper-2)' }}>
        <div className="eyebrow gold dot">Dr. A. Mehra · note</div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 15, lineHeight: 1.4, marginTop: 8 }}>
          "Pigment regression well within projected range. Tapering retinoids week 10."
        </div>
      </div>
    </div>
  </MobileShell>
);

export default function BeforeAfterPage() {
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
    return <BeforeAfterMobile />;
  }

  return <BeforeAfterDesktop />;
}
