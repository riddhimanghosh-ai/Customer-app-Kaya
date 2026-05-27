'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const BrandLockup = ({ size = 26, sub = false }: { size?: number; sub?: boolean }) => (
  <div>
    <div style={{ fontFamily: 'var(--serif)', fontSize: size, lineHeight: 0.9, letterSpacing: '-0.02em', fontWeight: 500 }}>
      kaya<span style={{ color: 'var(--brand)' }}>.</span>
    </div>
    {sub && <div className="brand-mark" style={{ marginTop: 4 }}>Skin · Hair · Body</div>}
  </div>
);

const Countdown = ({ days = 1, hours = 23, minutes = 59, seconds = 54 }) => (
  <div className="row" style={{ gap: 12 }}>
    {[
      [days, 'days'],
      [hours, 'hours'],
      [minutes, 'minutes'],
      [seconds, 'seconds'],
    ].map(([v, l], i) => (
      <div key={i}>
        <div className="count-tile">{String(v).padStart(2, '0')}</div>
        <div className="count-label">{l}</div>
      </div>
    ))}
  </div>
);

const IconShield = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3.5 L19 6 V12 C19 16 16 19.5 12 20.5 C8 19.5 5 16 5 12 V6 Z" />
    <path d="M9 12 L11 14 L15 10" />
  </svg>
);

const IconClock = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7 V12 L15.5 14" />
  </svg>
);

const IconStar = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4 L14.3 9 L19.5 9.6 L15.6 13.2 L16.7 18.5 L12 15.8 L7.3 18.5 L8.4 13.2 L4.5 9.6 L9.7 9 Z" />
  </svg>
);

const IconArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12 H19" />
    <path d="M14 7 L19 12 L14 17" />
  </svg>
);

const HomeDesktop = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="frame" style={{ overflow: 'auto' }}>
      {/* Soft promo banner */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 22 }}>
        <div className="promo-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="9" width="18" height="5" rx="1" />
            <path d="M3 14 V20 H21 V14" />
            <path d="M12 9 V20" />
            <path d="M8 6 C8 4.5 9.5 4 11 4.5 C12 5 12 8 12 9 C11 9 8 9 8 6 Z" />
            <path d="M16 6 C16 4.5 14.5 4 13 4.5 C12 5 12 8 12 9 C13 9 16 9 16 6 Z" />
          </svg>
          Upto 50% off on all Kaya services
        </div>
      </div>

      {/* Top nav */}
      <div className="row between center" style={{ padding: '14px 56px 0' }}>
        <div className="row center" style={{ gap: 36, fontSize: 13, fontWeight: 500 }}>
          <span>Treatments</span>
          <span>Doctors</span>
          <span>Locations</span>
          <span>Journal</span>
        </div>
        <BrandLockup size={28} sub />
        <div className="row center" style={{ gap: 10 }}>
          <Link href="/login" className="btn ghost sm">Sign in</Link>
          <Link href="/register" className="btn sm">Book consult</Link>
        </div>
      </div>

      {/* Hero */}
      <div className="row" style={{ padding: '36px 56px 56px', gap: 56, alignItems: 'flex-start' }}>
        {/* Left — copy + stats + offer */}
        <div style={{ flex: 1.15 }}>
          <div className="display" style={{ fontSize: 64 }}>
            Dermatologist-designed<br />
            <span style={{ color: 'var(--brand)' }}>Skin, hair &amp; anti-ageing</span><br />
            solutions.
          </div>
          <div className="h3" style={{ marginTop: 22, fontSize: 22 }}>Safe. Proven. Expert care.</div>
          <div style={{ fontSize: 15, color: 'var(--mute)', marginTop: 12, maxWidth: 460, lineHeight: 1.55 }}>
            From acne &amp; pigmentation to laser hair reduction and hair regrowth — clinic-grade protocols backed by 22+ years of dermatology expertise, designed for visible, lasting results.
          </div>

          <div className="row" style={{ marginTop: 30, gap: 14 }}>
            <div className="panel" style={{ flex: 1, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span className="icon-chip"><IconShield size={20} /></span>
              <div>
                <div className="h4" style={{ fontSize: 17 }}>22+ years</div>
                <div className="muted" style={{ fontSize: 12 }}>Trusted expertise</div>
              </div>
            </div>
            <div className="panel" style={{ flex: 1, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span className="icon-chip mint"><IconClock size={20} /></span>
              <div>
                <div className="h4" style={{ fontSize: 17 }}>Visible results</div>
                <div className="muted" style={{ fontSize: 12 }}>From 1st session</div>
              </div>
            </div>
            <div className="panel" style={{ flex: 1, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
              <span className="icon-chip lavender"><IconStar size={20} /></span>
              <div>
                <div className="h4" style={{ fontSize: 17 }}>4.9 / 5</div>
                <div className="muted" style={{ fontSize: 12 }}>450k+ patients</div>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="panel" style={{ marginTop: 22, padding: '22px 24px' }}>
            <div className="row center between" style={{ marginBottom: 16 }}>
              <div className="row center" style={{ gap: 10 }}>
                <span className="sparkle" />
                <div className="h4" style={{ fontSize: 16 }}>Offer ends in</div>
                <span className="sparkle" />
              </div>
              <div className="tag brand"><span className="led pulse" /> Limited</div>
            </div>
            <Countdown />
          </div>
        </div>

        {/* Right — sticky booking form */}
        <div style={{ flex: 0.85, position: 'sticky', top: 32 }}>
          <div className="panel" style={{ padding: 32 }}>
            <div className="eyebrow brand">· Book free consultation</div>
            <div className="h2 display" style={{ fontSize: 32, marginTop: 8 }}>Talk to <span style={{ color: 'var(--brand)' }}>experts</span></div>
            <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>One of our dermatologists will reach out within 24h.</div>

            <div className="col" style={{ marginTop: 22, gap: 14 }}>
              <div className="field">
                <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="field">
                <input placeholder="Mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} inputMode="tel" />
              </div>
              <div className="field">
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select or search city</option>
                  <option>Mumbai · Bandra West</option>
                  <option>Mumbai · Andheri</option>
                  <option>Delhi · Connaught Place</option>
                  <option>Bengaluru · Indiranagar</option>
                  <option>Pune · Koregaon Park</option>
                  <option>Hyderabad · Jubilee Hills</option>
                </select>
              </div>

              <label className="row center" style={{ gap: 10, fontSize: 13, marginTop: 4 }}>
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ width: 16, height: 16, accentColor: 'var(--brand)' }} />
                <span className="muted">I agree to Terms &amp; Conditions</span>
              </label>

              <button className="btn lg block" style={{ marginTop: 10 }}>
                Book appointment <span className="arrow" />
              </button>

              <div className="row center" style={{ gap: 12, justifyContent: 'center', marginTop: 6 }}>
                <span className="metric-pill"><span className="dot" /> 14 clinics</span>
                <span className="metric-pill brand"><span className="dot" /> Same-day</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatments band */}
      <div style={{ padding: '0 56px 56px' }}>
        <div className="row between center" style={{ marginBottom: 22, alignItems: 'flex-end' }}>
          <div>
            <div className="eyebrow brand dot">Our treatments</div>
            <div className="display" style={{ fontSize: 36, marginTop: 8 }}>What can we help with?</div>
          </div>
          <button className="btn ghost sm">All treatments <span className="arrow" /></button>
        </div>
        <div className="row" style={{ gap: 16 }}>
          {[
            { t: 'Pigmentation', d: 'Melasma · sun spots · tan', c: 'brand', icon: 'sun' },
            { t: 'Acne &amp; scars', d: 'Adult acne · post-acne', c: 'mint', icon: 'spot' },
            { t: 'Hair restoration', d: 'Regrowth · laser reduction', c: 'lavender', icon: 'hair' },
            { t: 'Anti-ageing', d: 'Firming · fine lines', c: 'sky', icon: 'time' },
          ].map((s, i) => (
            <div key={i} className="panel" style={{ flex: 1, padding: 20, position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: -30, right: -30, width: 100, height: 100, borderRadius: '50%',
                background: `var(--${s.c}-tint)`,
              }} />
              <span className={`icon-chip ${s.c === 'brand' ? '' : s.c}`} style={{ position: 'relative' }}>
                {s.icon === 'sun' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4" /><path d="M12 3 V5 M12 19 V21 M3 12 H5 M19 12 H21 M5.5 5.5 L7 7 M17 17 L18.5 18.5 M5.5 18.5 L7 17 M17 7 L18.5 5.5" /></svg>}
                {s.icon === 'spot' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="10" r="1.5" /><circle cx="15" cy="13" r="1.5" /><circle cx="11" cy="16" r="1.2" /><circle cx="12" cy="12" r="8" /></svg>}
                {s.icon === 'hair' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 18 C4 12 8 4 12 4 C16 4 20 12 20 18" /><path d="M7 12 C7 14 8 16 9 18" /><path d="M12 8 C12 12 12 16 12 18" /><path d="M17 12 C17 14 16 16 15 18" /></svg>}
                {s.icon === 'time' && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 4 V12 L17 14" /><circle cx="12" cy="12" r="8" /></svg>}
              </span>
              <div className="h4" style={{ marginTop: 16, position: 'relative' }} dangerouslySetInnerHTML={{ __html: s.t }} />
              <div className="muted" style={{ fontSize: 12, marginTop: 6, position: 'relative' }} dangerouslySetInnerHTML={{ __html: s.d }} />
              <div className="row between center" style={{ marginTop: 16, position: 'relative' }}>
                <span className="muted" style={{ fontSize: 11, fontFamily: 'var(--mono)' }}>12-week protocol</span>
                <IconArrow size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomeMobile = () => (
  <div className="frame" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <div className="statusbar">
      <span>9:41</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
        <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
        <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="0.5" y="0.5" width="13" height="10" rx="2" stroke="currentColor" /><rect x="2" y="2" width="9" height="7" fill="currentColor" /><rect x="14" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" /></svg>
      </span>
    </div>
    <div style={{ flex: 1, overflow: 'auto', padding: '8px 16px 100px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
        <div className="promo-pill" style={{ fontSize: 11, padding: '8px 16px' }}>Upto 50% off on all services</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
        <BrandLockup size={26} sub />
      </div>

      <div className="display" style={{ fontSize: 30 }}>
        Dermatologist-<br />designed <span style={{ color: 'var(--brand)' }}>skin, hair</span><br />&amp; anti-ageing.
      </div>
      <div className="muted" style={{ fontSize: 13, marginTop: 12, lineHeight: 1.5 }}>
        From acne &amp; pigmentation to hair regrowth — 22+ years of dermatology expertise.
      </div>

      <div className="row" style={{ marginTop: 16, gap: 8 }}>
        <div className="panel tight" style={{ flex: 1, padding: 12 }}>
          <span className="icon-chip sm"><IconShield size={16} /></span>
          <div className="h4" style={{ marginTop: 8, fontSize: 14 }}>22+ years</div>
          <div className="muted" style={{ fontSize: 10 }}>Trusted</div>
        </div>
        <div className="panel tight" style={{ flex: 1, padding: 12 }}>
          <span className="icon-chip sm mint"><IconClock size={16} /></span>
          <div className="h4" style={{ marginTop: 8, fontSize: 14 }}>Visible</div>
          <div className="muted" style={{ fontSize: 10 }}>1st session</div>
        </div>
        <div className="panel tight" style={{ flex: 1, padding: 12 }}>
          <span className="icon-chip sm lavender"><IconStar size={16} /></span>
          <div className="h4" style={{ marginTop: 8, fontSize: 14 }}>4.9 / 5</div>
          <div className="muted" style={{ fontSize: 10 }}>450k+</div>
        </div>
      </div>

      <div className="panel" style={{ marginTop: 16, padding: 18 }}>
        <div className="row center" style={{ gap: 8, justifyContent: 'center', marginBottom: 12 }}>
          <span className="sparkle" />
          <div className="h4" style={{ fontSize: 14 }}>Offer ends in</div>
          <span className="sparkle" />
        </div>
        <Countdown />
      </div>

      <div className="panel" style={{ marginTop: 16, padding: 18 }}>
        <div className="eyebrow brand">· Book free consult</div>
        <div className="display" style={{ fontSize: 22, marginTop: 6 }}>Talk to <span style={{ color: 'var(--brand)' }}>experts</span></div>
        <div className="col" style={{ marginTop: 14, gap: 10 }}>
          <input placeholder="Your name" style={{ height: 46, padding: '0 14px', background: 'var(--paper-2)', border: '1px solid var(--hair-2)', borderRadius: 'var(--r-3)', font: '14px var(--sans)', color: 'var(--ink)' }} />
          <input placeholder="Mobile number" style={{ height: 46, padding: '0 14px', background: 'var(--paper-2)', border: '1px solid var(--hair-2)', borderRadius: 'var(--r-3)', font: '14px var(--sans)', color: 'var(--ink)' }} />
          <select style={{ height: 46, padding: '0 14px', background: 'var(--paper-2)', border: '1px solid var(--hair-2)', borderRadius: 'var(--r-3)', font: '14px var(--sans)', color: 'var(--ink)' }}>
            <option>Select city</option>
          </select>
          <button className="btn block lg" style={{ marginTop: 6 }}>Book appointment</button>
        </div>
      </div>

      <div className="eyebrow" style={{ marginTop: 22 }}>Treatments</div>
      <div className="row wrap" style={{ marginTop: 12, gap: 10 }}>
        {[
          { t: 'Pigmentation', c: 'brand' },
          { t: 'Acne & scars', c: 'mint' },
          { t: 'Hair regrowth', c: 'lavender' },
          { t: 'Anti-ageing', c: 'sky' },
        ].map((s, i) => (
          <div key={i} className="panel" style={{ width: 'calc(50% - 5px)', padding: 14 }}>
            <span className={`icon-chip sm ${s.c === 'brand' ? '' : s.c}`}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 5 C19 12 14 18 5 19 C5 12 10 6 19 5 Z" /><path d="M5 19 L13 11" /></svg></span>
            <div className="h4" style={{ marginTop: 10, fontSize: 13 }}>{s.t}</div>
            <div className="muted" style={{ fontSize: 10, marginTop: 4 }}>12-week protocol</div>
          </div>
        ))}
      </div>
    </div>
    <div className="tabbar">
      <div className="tab active">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3.5 11 L12 4 L20.5 11 V20 H3.5 Z" /><path d="M10 20 V14 H14 V20" /></svg>
        <span>Home</span>
        <span className="dot" />
      </div>
      <div className="tab">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3.5" y="5" width="17" height="15" rx="1.5" /><path d="M3.5 9.5 H20.5" /><path d="M8 3.5 V6.5 M16 3.5 V6.5" /></svg>
        <span>Visits</span>
        <span className="dot" />
      </div>
      <div className="tab">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3.5" y="5.5" width="7.5" height="13" rx="1" /><rect x="13" y="5.5" width="7.5" height="13" rx="1" /><path d="M11 9 H13 M11 12 H13 M11 15 H13" strokeWidth="1" /></svg>
        <span>Progress</span>
        <span className="dot" />
      </div>
      <div className="tab">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="10" r="6" /><path d="M8.5 14.5 L7 21 L12 18.5 L17 21 L15.5 14.5" /></svg>
        <span>Rewards</span>
        <span className="dot" />
      </div>
      <div className="tab">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 5.5 H20 V16 H13 L9 19.5 V16 H4 Z" /><circle cx="9" cy="11" r="0.6" fill="currentColor" stroke="none" /><circle cx="12" cy="11" r="0.6" fill="currentColor" stroke="none" /></svg>
        <span>Dr. AI</span>
        <span className="dot" />
      </div>
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    const user = localStorage.getItem('user');
    window.location.replace(user ? '/dashboard' : '/login');
  }, []);
  return null;
}

