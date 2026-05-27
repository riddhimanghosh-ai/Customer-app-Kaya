'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BrandLockup = ({ size = 26, sub = false }: { size?: number; sub?: boolean }) => (
  <div>
    <div style={{ fontFamily: 'var(--serif)', fontSize: size, lineHeight: 0.9, letterSpacing: '-0.02em', fontWeight: 500 }}>
      kaya<span style={{ color: 'var(--brand)' }}>.</span>
    </div>
    {sub && <div className="brand-mark" style={{ marginTop: 4 }}>Skin · Hair · Body</div>}
  </div>
);

const IconProgress = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="5.5" width="7.5" height="13" rx="1" />
    <rect x="13" y="5.5" width="7.5" height="13" rx="1" />
    <path d="M11 9 H13 M11 12 H13 M11 15 H13" strokeWidth="1" />
  </svg>
);

const IconCheck = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12 L9.5 17.5 L20 7" />
  </svg>
);

const IconRewards = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="6" />
    <path d="M8.5 14.5 L7 21 L12 18.5 L17 21 L15.5 14.5" />
  </svg>
);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('priya.r@gmail.com');
  const [pw, setPw] = useState('');
  const [touched, setTouched] = useState({ email: false, pw: false });
  const [success, setSuccess] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const pwValid = pw.length >= 8;
  const showEmailErr = touched.email && !emailValid;
  const showPwErr = touched.pw && !pwValid;

  const submit = () => {
    setTouched({ email: true, pw: true });
    if (emailValid && pwValid) {
      setSuccess(true);
      localStorage.setItem('user', JSON.stringify({ email, name: 'Priya R.' }));
      setTimeout(() => router.push('/dashboard'), 800);
    }
  };

  return (
    <div className="frame row" style={{ height: '100vh' }}>
      {/* Left — editorial visual (hidden on mobile) */}
      <div className="desktop-only" style={{
        flex: 1.1,
        padding: '48px 56px',
        background: `
          radial-gradient(800px 600px at 80% 20%, var(--brand-tint-2) 0%, transparent 50%),
          radial-gradient(700px 500px at 10% 90%, var(--lavender-tint) 0%, transparent 60%),
          var(--paper-grad)
        `,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <BrandLockup size={32} sub />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: -40 }}>
          <div className="eyebrow brand">· Patient portal</div>
          <div className="display" style={{ fontSize: 56, marginTop: 16 }}>
            Welcome back<br />
            to your <span style={{ color: 'var(--brand)' }}>protocol</span>.
          </div>
          <div className="muted" style={{ fontSize: 15, marginTop: 22, maxWidth: 380 }}>
            Three weeks until your next review with Dr. Sharma.
          </div>

          {/* live stats */}
          <div className="row" style={{ marginTop: 36, gap: 16 }}>
            <div className="panel" style={{ padding: 16, flex: 1 }}>
              <span className="icon-chip sm"><IconProgress size={16} /></span>
              <div className="h4" style={{ marginTop: 10, fontSize: 22 }}>−34%</div>
              <div className="muted" style={{ fontSize: 11 }}>pigment · 9 weeks</div>
            </div>
            <div className="panel" style={{ padding: 16, flex: 1 }}>
              <span className="icon-chip sm mint"><IconCheck size={16} /></span>
              <div className="h4" style={{ marginTop: 10, fontSize: 22 }}>94%</div>
              <div className="muted" style={{ fontSize: 11 }}>compliance</div>
            </div>
            <div className="panel" style={{ padding: 16, flex: 1 }}>
              <span className="icon-chip sm lavender"><IconRewards size={16} /></span>
              <div className="h4" style={{ marginTop: 10, fontSize: 22 }}>Gold</div>
              <div className="muted" style={{ fontSize: 11 }}>2,840 pts</div>
            </div>
          </div>
        </div>

        <div className="row between" style={{ alignItems: 'center' }}>
          <div className="eyebrow muted">· Est 2003 · 14 clinics</div>
          <div className="row" style={{ gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-tint)' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-tint)' }} />
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div style={{
        flex: 1,
        padding: 'clamp(32px, 8vw, 64px) clamp(24px, 8vw, 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--paper-2)',
        minWidth: 0,
      }}>
        <div className="eyebrow">Sign in</div>
        <div className="display" style={{ fontSize: 40, marginTop: 12 }}>
          Continue your <span style={{ color: 'var(--brand)' }}>care</span>.
        </div>

        <div className="col" style={{ marginTop: 32, gap: 20 }}>
          <div className={`field ${showEmailErr ? 'error' : ''}`}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            />
            {showEmailErr
              ? <div className="hint err">· Enter a valid email address</div>
              : (emailValid && <div className="hint" style={{ color: 'var(--mint)' }}>✓ Registered account found</div>)
            }
          </div>
          <div className={`field ${showPwErr ? 'error' : ''}`}>
            <label>Password</label>
            <input
              type="password"
              value={pw}
              placeholder="••••••••"
              onChange={(e) => setPw(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, pw: true }))}
            />
            <div className={`hint ${showPwErr ? 'err' : ''}`}>· {showPwErr ? 'Must be at least 8 characters' : 'At least 8 characters'}</div>
          </div>

          <div className="row between center">
            <label className="row center" style={{ gap: 8, fontSize: 12 }}>
              <input type="checkbox" defaultChecked style={{ width: 14, height: 14, accentColor: 'var(--brand)' }} />
              Stay signed in on this device
            </label>
            <a style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 500, cursor: 'pointer' }}>Forgot password →</a>
          </div>

          <button className="btn lg block" style={{ marginTop: 8 }} onClick={submit}>
            {success ? <><IconCheck size={14} /> Signed in</> : <>Sign in <span className="arrow" /></>}
          </button>

          <div className="row center" style={{ gap: 16, marginTop: 8 }}>
            <div className="hr" style={{ flex: 1 }} />
            <div className="eyebrow">or</div>
            <div className="hr" style={{ flex: 1 }} />
          </div>

          <button className="btn ghost block">
            Continue with OTP · +91 9X XXXX 4421
          </button>
        </div>

        <div className="muted" style={{ fontSize: 12, marginTop: 32, textAlign: 'center' }}>
          New here? <Link href="/register" style={{ color: 'var(--brand)', fontWeight: 500, borderBottom: '1px solid var(--brand-rule)', textDecoration: 'none' }}>Create an account →</Link>
        </div>
      </div>
    </div>
  );
}
