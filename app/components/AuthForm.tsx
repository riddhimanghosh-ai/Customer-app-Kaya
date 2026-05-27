'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  mode: 'login' | 'register';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const body = mode === 'login' ? { email, password } : { email, password, name, phone, dob };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }

      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--paper-grad)' }}>
      <div className="panel w-full max-w-md">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--ink)', fontFamily: 'var(--serif)' }}>KAYA</h1>
          <p style={{ fontSize: '13px', color: 'var(--mute)', marginTop: '8px' }}>
            {mode === 'login' ? 'Welcome Back to Your Care' : 'Start Your Skin Health Journey'}
          </p>
        </div>

        {error && (
          <div style={{ background: 'var(--alert-tint)', border: `1px solid rgba(214,120,98,0.3)`, color: 'var(--alert)', padding: '12px 16px', borderRadius: 'var(--r-2)', marginBottom: '16px', fontSize: '13px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mode === 'register' && (
            <>
              <div className="field">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="field">
                <label>Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="field">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="At least 6 characters"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn block"
            style={{ marginTop: '24px', opacity: loading ? 0.5 : 1 }}
          >
            {loading ? 'Processing...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div style={{ borderTop: '1px solid var(--hair)', marginTop: '24px', paddingTop: '24px' }}>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--mute)' }}>
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <a
              href={mode === 'login' ? '/register' : '/login'}
              style={{ color: 'var(--ink)', fontWeight: 600, textDecoration: 'none' }}
              className="hover:underline"
            >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
