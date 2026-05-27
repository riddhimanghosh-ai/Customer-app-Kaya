'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

/* Icons */
const Icon = ({ size = 18, children, stroke = 1.4, style }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
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

const IconPlus = (p: any) => (
  <Icon {...p}>
    <path d="M12 5 V19" />
    <path d="M5 12 H19" />
  </Icon>
);

const IconPin = (p: any) => (
  <Icon {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);

const IconClock = (p: any) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </Icon>
);

const IconDoc = (p: any) => (
  <Icon {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M10 9H8M14 13H8M14 17H8" />
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

const NavItem = ({ icon: I, label, active, badge, href }: any) => (
  <Link href={href}>
    <div className={`nav-item${active ? ' active' : ''}`}>
      <span className="nav-icon"><I size={15} stroke={1.6} /></span>
      <span>{label}</span>
      {badge && <span className={`badge${active ? '' : ' mute'}`}>{badge}</span>}
    </div>
  </Link>
);

const NavRail = ({ active = 'appointments' }: any) => (
  <div className="nav-rail">
    <div>
      <Brand />
    </div>

    <div style={{ marginTop: 22 }}>
      <div className="group-label">Care</div>
      <NavItem icon={IconHome} label="Overview" href="/" active={active === 'dashboard'} />
      <NavItem icon={IconAppt} label="Appointments" href="/sessions" badge="2" active={active === 'appointments'} />
      <NavItem icon={IconMed} label="Medications" href="/prescriptions" badge="4" active={active === 'prescriptions'} />
      <NavItem icon={IconProgress} label="Progress" href="/before-after" active={active === 'before-after'} />
      <NavItem icon={IconChat} label="Dr. AI" href="/chat" active={active === 'chatbot'} />
    </div>

    <div style={{ marginTop: 8 }}>
      <div className="group-label">Membership</div>
      <NavItem icon={IconRewards} label="Loyalty" href="/loyalty" active={active === 'loyalty'} />
      <NavItem icon={IconRefer} label="Referrals" href="/referral" active={active === 'referral'} />
    </div>

    <div style={{ marginTop: 8 }}>
      <div className="group-label">Learn</div>
      <NavItem icon={IconBlog} label="Articles" href="/blog" active={active === 'blog'} />
      <NavItem icon={IconVideo} label="Videos" href="/videos" active={active === 'videos'} />
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

const DoctorCard = ({ name, spec, since, sessions, initials, rating = 4.9, mini }: any) => (
  <div className="panel" style={{ padding: mini ? 12 : 16 }}>
    <div className="row" style={{ gap: 14, alignItems: 'flex-start' }}>
      <div style={{
        width: mini ? 44 : 60, height: mini ? 44 : 60,
        background: 'radial-gradient(60% 60% at 50% 30%, #e6c9a8 0%, #b08866 55%, #5a3c24 100%)',
        position: 'relative',
        flexShrink: 0,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 6,
        fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.1em',
      }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="row between center" style={{ gap: 6 }}>
          <div className="h4" style={{ fontSize: mini ? 14 : 16 }}>{name}</div>
          <div className="num" style={{ fontSize: 11, color: 'var(--gold)' }}>★ {rating}</div>
        </div>
        <div className="eyebrow" style={{ marginTop: 4 }}>{spec}</div>
        {!mini && (
          <div className="row" style={{ gap: 18, marginTop: 10 }}>
            <div>
              <div className="num" style={{ fontSize: 16 }}>{since}</div>
              <div style={{ fontSize: 10, color: 'var(--mute)', fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>practicing</div>
            </div>
            <div className="vr" />
            <div>
              <div className="num" style={{ fontSize: 16 }}>{sessions}</div>
              <div style={{ fontSize: 10, color: 'var(--mute)', fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>sessions</div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const MobileShell = ({ active = 'appt', children }: any) => (
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
      <Link href="/">
        <div className={`tab${active === 'home' ? ' active' : ''}`}>
          <IconHome size={20} stroke={1.4} />
          <span>Home</span>
          <span className="dot" />
        </div>
      </Link>
      <Link href="/sessions">
        <div className={`tab${active === 'appt' ? ' active' : ''}`}>
          <IconAppt size={20} stroke={1.4} />
          <span>Visits</span>
          <span className="dot" />
        </div>
      </Link>
      <Link href="/before-after">
        <div className={`tab${active === 'progress' ? ' active' : ''}`}>
          <IconProgress size={20} stroke={1.4} />
          <span>Progress</span>
          <span className="dot" />
        </div>
      </Link>
      <Link href="/loyalty">
        <div className={`tab${active === 'rewards' ? ' active' : ''}`}>
          <IconRewards size={20} stroke={1.4} />
          <span>Rewards</span>
          <span className="dot" />
        </div>
      </Link>
      <Link href="/chat">
        <div className={`tab${active === 'ai' ? ' active' : ''}`}>
          <IconChat size={20} stroke={1.4} />
          <span>Dr. AI</span>
          <span className="dot" />
        </div>
      </Link>
    </div>
  </div>
);

const APPOINTMENTS = [
  { d: 'Sat', dt: '31', mon: 'May', time: '11:30', doc: 'Dr. Anika Mehra', spec: 'Dermatology · Cosmetic', treat: 'Hydrafacial · Phase 2', loc: 'Bandra West · Suite 04', tag: 'upcoming', confirm: true, in: 'in 4 days' },
  { d: 'Thu', dt: '12', mon: 'Jun', time: '15:00', doc: 'Dr. Ravi Krishnan', spec: 'Dermatology · Medical', treat: 'Acne consultation', loc: 'Bandra West · Suite 02', tag: 'pending', in: 'in 16 days' },
  { d: 'Tue', dt: '24', mon: 'Jun', time: '10:00', doc: 'Dr. Anika Mehra', spec: 'Dermatology · Cosmetic', treat: 'Phase 3 review', loc: 'Bandra West · Suite 04', tag: 'upcoming', in: 'in 28 days' },
];

const PAST = [
  { d: 'Tue', dt: '13', mon: 'May', doc: 'Dr. Anika Mehra', treat: 'Hydrafacial · Phase 2', notes: 'Mild erythema · resolved 24h' },
  { d: 'Wed', dt: '30', mon: 'Apr', doc: 'Dr. Anika Mehra', treat: 'Chemical peel · TCA 15%', notes: 'Tolerated well · -12% pigment' },
  { d: 'Fri', dt: '11', mon: 'Apr', doc: 'Dr. Anika Mehra', treat: 'Chemical peel · TCA 10%', notes: 'Baseline reading taken' },
  { d: 'Thu', dt: '14', mon: 'Mar', doc: 'Dr. Ravi Krishnan', treat: 'Initial consultation', notes: 'Plan: 12-week protocol' },
];

const AppointmentsDesktop = () => {
  const [filter, setFilter] = useState('upcoming');

  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="appointments" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          subtitle="Appointments"
          title="Sessions & consultations"
          right={<button className="btn"><IconPlus size={14} /> Book a visit</button>}
        />

        <div className="row" style={{ padding: '14px var(--pad-4)', borderBottom: '1px solid var(--hair)', gap: 4, alignItems: 'center' }}>
          {[['upcoming', 'Upcoming', 3], ['pending', 'Pending', 1], ['past', 'Past', 12], ['cancelled', 'Cancelled', 2]].map(([k, l, c]) => (
            <button key={k}
              onClick={() => setFilter(k)}
              style={{
                appearance: 'none',
                background: filter === k ? 'var(--ink)' : 'transparent',
                color: filter === k ? 'var(--paper)' : 'var(--ink)',
                border: '1px solid ' + (filter === k ? 'var(--ink)' : 'var(--hair-2)'),
                padding: '6px 12px',
                font: '500 12px var(--mono)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                marginRight: 6,
              }}
            >{l} · <span style={{ opacity: 0.6 }}>{c}</span></button>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14, color: 'var(--mute)', fontSize: 12 }}>
            <span><kbd style={{ background: 'var(--paper-2)', padding: '2px 6px', borderRadius: 2, fontSize: 11 }}>⌘</kbd> <kbd style={{ background: 'var(--paper-2)', padding: '2px 6px', borderRadius: 2, fontSize: 11 }}>N</kbd> new</span>
          </div>
        </div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.5fr 1fr', overflow: 'hidden' }}>
          <div style={{ overflow: 'auto', padding: 'var(--pad-4)' }}>
            <div className="eyebrow">{filter === 'past' ? 'Treatment history' : 'Upcoming · 3 visits'}</div>
            <div className="col" style={{ marginTop: 16, gap: 14 }}>
              {APPOINTMENTS.map((a, i) => (
                <div key={i} className="panel" style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="row" style={{ gap: 0 }}>
                    <div style={{
                      width: 110, padding: 18, borderRight: '1px solid var(--hair)',
                      background: i === 0 ? 'var(--ink)' : 'var(--paper-2)',
                      color: i === 0 ? 'var(--paper)' : 'var(--ink)',
                    }}>
                      <div className="eyebrow" style={{ color: i === 0 ? 'var(--mute-2)' : 'var(--mute)' }}>{a.mon}</div>
                      <div className="num" style={{ fontSize: 42, fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 6 }}>{a.dt}</div>
                      <div className="num" style={{ fontSize: 11, marginTop: 6, opacity: 0.7 }}>{a.d.toUpperCase()}</div>
                      <div className="num" style={{ fontSize: 13, marginTop: 14, fontWeight: 500 }}>{a.time}</div>
                    </div>

                    <div style={{ flex: 1, padding: 18 }}>
                      <div className="row between" style={{ alignItems: 'flex-start' }}>
                        <div>
                          <div className="h4">{a.treat}</div>
                          <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{a.doc} · <span style={{ color: 'var(--mute-2)' }}>{a.spec}</span></div>
                        </div>
                        <span className={`tag ${a.tag === 'upcoming' ? 'gold' : ''}`}>
                          <span className="led" /> {a.in}
                        </span>
                      </div>
                      <div className="row" style={{ marginTop: 14, gap: 18, fontSize: 12, color: 'var(--mute)' }}>
                        <span><IconPin size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{a.loc}</span>
                        <span><IconClock size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />30 min</span>
                        <span><IconDoc size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />Pre-visit checklist</span>
                      </div>
                      <div className="row" style={{ marginTop: 14, gap: 8 }}>
                        {a.confirm
                          ? <><button className="btn sm">Confirm</button><button className="btn ghost sm">Reschedule</button><button className="btn ghost sm" style={{ marginLeft: 'auto', color: 'var(--mute)' }}>Cancel</button></>
                          : <><button className="btn ghost sm">View details</button><button className="btn ghost sm">Reschedule</button></>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="eyebrow" style={{ marginTop: 36 }}>Recent past visits</div>
            <div style={{ marginTop: 12, border: '1px solid var(--hair)' }}>
              {PAST.map((p, i) => (
                <div key={i} className="row between center" style={{
                  padding: '14px 18px',
                  borderBottom: i < PAST.length - 1 ? '1px solid var(--hair)' : '0',
                }}>
                  <div className="row center" style={{ gap: 16 }}>
                    <div className="num" style={{ fontSize: 14, color: 'var(--mute)', width: 70 }}>{p.mon} {p.dt}</div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 13 }}>{p.treat}</div>
                      <div className="muted" style={{ fontSize: 11 }}>{p.doc}</div>
                    </div>
                  </div>
                  <div className="muted" style={{ fontSize: 11, fontStyle: 'italic', maxWidth: 280, textAlign: 'right' }}>{p.notes}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderLeft: '1px solid var(--hair)', padding: 'var(--pad-4)', overflow: 'auto', background: 'var(--paper-2)' }}>
            <div className="eyebrow gold dot">Your care team</div>
            <div className="display" style={{ fontSize: 30, marginTop: 8 }}>
              Board-certified, <br /><em>20+ years</em> experience.
            </div>

            <div className="col" style={{ marginTop: 22, gap: 14 }}>
              <DoctorCard name="Dr. Anika Mehra" spec="Cosmetic dermatology" since="14y" sessions="2,400+" initials="AM" rating={4.9} />
              <DoctorCard name="Dr. Ravi Krishnan" spec="Medical dermatology" since="22y" sessions="6,800+" initials="RK" rating={4.8} />
            </div>

            <div className="hr" style={{ margin: '24px 0' }} />

            <div className="eyebrow">Clinic</div>
            <div className="h4" style={{ marginTop: 6 }}>Bandra West</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
              204, Linking Road · Mumbai 400050<br />
              Mon – Sat · 09:00 – 20:00
            </div>

            <div className="panel" style={{ marginTop: 14, padding: 14, background: 'var(--paper)' }}>
              <div className="row between center">
                <div className="eyebrow">Pre-visit checklist · Sat 31</div>
                <div className="num" style={{ fontSize: 11, color: 'var(--gold)' }}>3 / 5</div>
              </div>
              <div className="col" style={{ marginTop: 10, gap: 6 }}>
                {[['No retinoids 48h prior', true], ['No sun exposure 24h', true], ['Photo log uploaded', true], ['Consent form e-signed', false], ['Arrival 10 min early', false]].map(([t, done], i) => (
                  <div key={i} className="row center" style={{ gap: 8, fontSize: 12 }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: 2,
                      border: '1px solid ' + (done ? 'var(--ink)' : 'var(--hair-2)'),
                      background: done ? 'var(--ink)' : 'transparent',
                      color: 'var(--paper)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{done && <IconCheck size={8} />}</div>
                    <span style={{ color: done ? 'var(--mute)' : 'var(--ink)', textDecoration: done ? 'line-through' : 'none' }}>{t}</span>
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

const AppointmentsMobile = () => (
  <MobileShell active="appt">
    <div style={{ padding: '12px 20px 100px', height: '100%', overflow: 'auto' }}>
      <div className="display" style={{ fontSize: 28 }}>Your <em>visits</em></div>

      <div className="row" style={{ marginTop: 14, gap: 6 }}>
        {['Upcoming', 'Past', 'Cancelled'].map((t, i) => (
          <button key={i} style={{
            appearance: 'none',
            padding: '6px 10px',
            background: i === 0 ? 'var(--ink)' : 'transparent',
            color: i === 0 ? 'var(--paper)' : 'var(--ink)',
            border: '1px solid ' + (i === 0 ? 'var(--ink)' : 'var(--hair-2)'),
            font: '500 11px var(--mono)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>{t}</button>
        ))}
      </div>

      <div className="col" style={{ marginTop: 16, gap: 12 }}>
        {APPOINTMENTS.map((a, i) => (
          <div key={i} className="panel" style={{ padding: 0 }}>
            <div className="row">
              <div style={{
                width: 80, padding: 14, borderRight: '1px solid var(--hair)',
                background: i === 0 ? 'var(--ink)' : 'var(--paper-2)',
                color: i === 0 ? 'var(--paper)' : 'var(--ink)',
              }}>
                <div className="eyebrow" style={{ color: i === 0 ? 'var(--mute-2)' : 'var(--mute)', fontSize: 9 }}>{a.mon}</div>
                <div className="num" style={{ fontSize: 28, lineHeight: 1, marginTop: 4 }}>{a.dt}</div>
                <div className="num" style={{ fontSize: 10, marginTop: 6, opacity: 0.7 }}>{a.time}</div>
              </div>
              <div style={{ flex: 1, padding: 14 }}>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{a.treat}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{a.doc}</div>
                <div className="row" style={{ marginTop: 10, gap: 6 }}>
                  <span className={`tag ${i === 0 ? 'gold' : ''}`}>{a.in}</span>
                  <span className="tag">30 min</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 22 }}>
        <div className="eyebrow">Care team</div>
        <div className="col" style={{ marginTop: 10, gap: 8 }}>
          <DoctorCard name="Dr. Anika Mehra" spec="Cosmetic dermatology" initials="AM" rating={4.9} mini />
          <DoctorCard name="Dr. Ravi Krishnan" spec="Medical dermatology" initials="RK" rating={4.8} mini />
        </div>
      </div>
    </div>
  </MobileShell>
);

export default function AppointmentsPage() {
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
    return <AppointmentsMobile />;
  }

  return <AppointmentsDesktop />;
}
