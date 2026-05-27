'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const IconCheck = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12 L9.5 17.5 L20 7" />
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

  const Form = () => (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={{ fontSize: 11, color: 'var(--mute)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--mono)' }}>Sign in</div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 36, marginTop: 10, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
        Continue your <span style={{ color: 'var(--brand)' }}>care</span>.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
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
          <div className={`hint ${showPwErr ? 'err' : ''}`}>
            · {showPwErr ? 'Must be at least 8 characters' : 'At least 8 characters'}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked style={{ width: 14, height: 14, accentColor: 'var(--brand)' }} />
            Stay signed in
          </label>
          <a style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 500, cursor: 'pointer' }}>Forgot password →</a>
        </div>

        <button className="btn lg block" style={{ marginTop: 4 }} onClick={submit}>
          {success ? <><IconCheck size={14} /> Signed in</> : <>Sign in <span className="arrow" /></>}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 4 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />
          <span style={{ fontSize: 11, color: 'var(--mute)', fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}>OR</span>
          <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />
        </div>

        <button className="btn ghost block">Continue with OTP · +91 9X XXXX 4421</button>
      </div>

      <div style={{ fontSize: 12, color: 'var(--mute)', marginTop: 28, textAlign: 'center' }}>
        New here?{' '}
        <Link href="/register" style={{ color: 'var(--brand)', fontWeight: 500, borderBottom: '1px solid var(--brand-rule)', textDecoration: 'none' }}>
          Create an account →
        </Link>
      </div>
    </div>
  );

  /* ── Mobile ── */
  const Mobile = (
    <div style={{
      minHeight: '100vh',
      background: 'var(--paper-grad)',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 0 40px',
    }}>
      {/* Brand header */}
      <div style={{
        padding: '40px 24px 28px',
        background: 'linear-gradient(160deg, var(--brand-tint-2) 0%, transparent 70%)',
        borderBottom: '1px solid var(--hair)',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em' }}>
          kaya<span style={{ color: 'var(--brand)' }}>.</span>
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--mute)', marginTop: 6, textTransform: 'uppercase' }}>
          Skin · Hair · Body
        </div>

        {/* Stats strip */}
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          {[
            { v: '−34%', s: 'pigment · 9w', color: 'var(--brand-tint)' },
            { v: '94%', s: 'compliance', color: '#e8f5ee' },
            { v: 'Gold', s: '2,840 pts', color: '#fff8ee' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1, padding: '10px 10px 8px',
              background: stat.color, borderRadius: 10,
              border: '1px solid var(--hair)',
            }}>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>{stat.v}</div>
              <div style={{ fontSize: 10, color: 'var(--mute)', marginTop: 2 }}>{stat.s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div style={{ flex: 1, padding: '32px 24px 0', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Form />
      </div>
    </div>
  );

  /* ── Desktop ── */
  const Desktop = (
    <div className="frame row" style={{ height: '100vh' }}>
      {/* Left editorial */}
      <div style={{
        flex: 1.1, padding: '48px 56px',
        background: `
          radial-gradient(800px 600px at 80% 20%, var(--brand-tint-2) 0%, transparent 50%),
          radial-gradient(700px 500px at 10% 90%, var(--lavender-tint) 0%, transparent 60%),
          var(--paper-grad)
        `,
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em' }}>
          kaya<span style={{ color: 'var(--brand)' }}>.</span>
        </div>
        <div style={{ fontSize: 9, fontFamily: 'var(--mono)', letterSpacing: '0.2em', color: 'var(--mute)', marginTop: 6, textTransform: 'uppercase' }}>Skin · Hair · Body</div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: -40 }}>
          <div style={{ fontSize: 11, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--mono)' }}>· Patient portal</div>
          <div className="display" style={{ fontSize: 56, marginTop: 16 }}>
            Welcome back<br />to your <span style={{ color: 'var(--brand)' }}>protocol</span>.
          </div>
          <div className="muted" style={{ fontSize: 15, marginTop: 22, maxWidth: 380 }}>
            Three weeks until your next review with Dr. Sharma.
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
            {[
              { v: '−34%', s: 'pigment · 9 weeks', chip: 'brand' },
              { v: '94%', s: 'compliance', chip: 'mint' },
              { v: 'Gold', s: '2,840 pts', chip: 'lavender' },
            ].map((stat, i) => (
              <div key={i} className="panel" style={{ padding: 16, flex: 1 }}>
                <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>{stat.v}</div>
                <div className="muted" style={{ fontSize: 11, marginTop: 4 }}>{stat.s}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 10, color: 'var(--mute)', fontFamily: 'var(--mono)', letterSpacing: '0.1em' }}>· EST 2003 · 14 CLINICS</div>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand)' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-tint)' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-tint)' }} />
          </div>
        </div>
      </div>

      {/* Right form */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(32px, 6vw, 64px) clamp(32px, 6vw, 80px)',
        background: 'var(--paper-2)', minWidth: 0, overflow: 'auto',
      }}>
        <Form />
      </div>
    </div>
  );

  return (
    <>
      <div className="desktop-only">{Desktop}</div>
      <div className="mobile-only">{Mobile}</div>
    </>
  );
}
