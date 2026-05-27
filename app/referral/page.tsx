'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface User {
  referral_code: string;
  name: string;
}

export default function ReferralPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const referralLink = user ? `https://kaya.clinic/register?ref=${user.referral_code}` : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)' }}>
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="h2" style={{ color: 'var(--ink)' }}>Referral Program</h1>
          <Link href="/dashboard" className="btn sm">
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="panel" style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'var(--ink)', marginBottom: '12px' }}>Share the Love, Earn Rewards</h2>
          <p style={{ color: 'var(--mute)', fontSize: '16px' }}>Refer a friend and both of you get exclusive discounts!</p>
        </div>

        {/* Your Referral Code */}
        <div className="panel" style={{ marginBottom: '32px' }}>
          <h3 className="h3" style={{ color: 'var(--ink)', marginBottom: '24px' }}>Your Referral Code</h3>
          <div style={{ background: 'var(--paper-2)', borderRadius: 'var(--r-2)', padding: '32px', textAlign: 'center', border: `1px solid var(--hair)` }}>
            <p style={{ fontSize: '12px', color: 'var(--mute)', marginBottom: '12px' }}>Share this code with friends</p>
            <p style={{ fontSize: '32px', fontWeight: 600, fontFamily: 'monospace', color: 'var(--ink)', marginBottom: '24px', letterSpacing: '0.1em' }}>{user.referral_code}</p>
            <button
              onClick={copyToClipboard}
              className="btn"
            >
              {copied ? '✓ Copied!' : '📋 Copy Code'}
            </button>
          </div>
        </div>

        {/* Referral Link */}
        <div className="panel" style={{ marginBottom: '32px' }}>
          <h3 className="h3" style={{ color: 'var(--ink)', marginBottom: '24px' }}>Your Referral Link</h3>
          <div style={{ background: 'var(--paper-2)', borderRadius: 'var(--r-2)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', border: `1px solid var(--hair)` }}>
            <input
              type="text"
              value={referralLink}
              readOnly
              style={{ flex: 1, background: 'transparent', outline: 'none', color: 'var(--ink)', fontFamily: 'monospace', fontSize: '13px', border: 'none' }}
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(referralLink);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="btn sm"
              style={{ marginLeft: '12px', whiteSpace: 'nowrap' }}
            >
              {copied ? '✓' : '📋'}
            </button>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--mute)' }}>Share on WhatsApp, email, or social media</p>
        </div>

        {/* How It Works */}
        <div className="panel" style={{ marginBottom: '32px' }}>
          <h3 className="h3" style={{ color: 'var(--ink)', marginBottom: '24px' }}>How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>👥</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Share Your Code</p>
              <p style={{ color: 'var(--mute)', fontSize: '13px' }}>Send your referral code or link to friends</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>✍️</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>They Sign Up</p>
              <p style={{ color: 'var(--mute)', fontSize: '13px' }}>Friend registers using your code</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎁</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>You Earn Rewards</p>
              <p style={{ color: 'var(--mute)', fontSize: '13px' }}>Both get 10% discount on next purchase</p>
            </div>
          </div>
        </div>

        {/* Referral Benefits */}
        <div className="panel" style={{ marginBottom: '32px' }}>
          <h3 className="h3" style={{ color: 'var(--ink)', marginBottom: '24px' }}>Referral Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div style={{ borderLeft: `4px solid var(--brand)`, paddingLeft: '16px', paddingY: '8px' }}>
              <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--ink)', marginBottom: '6px' }}>10% Discount</p>
              <p style={{ fontSize: '13px', color: 'var(--mute)' }}>You & your friend get 10% off next purchase</p>
            </div>
            <div style={{ borderLeft: `4px solid var(--mint)`, paddingLeft: '16px', paddingY: '8px' }}>
              <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--ink)', marginBottom: '6px' }}>100 Bonus Points</p>
              <p style={{ fontSize: '13px', color: 'var(--mute)' }}>Earn 100 loyalty points per referral</p>
            </div>
            <div style={{ borderLeft: `4px solid var(--sky)`, paddingLeft: '16px', paddingY: '8px' }}>
              <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--ink)', marginBottom: '6px' }}>Tier Benefits</p>
              <p style={{ fontSize: '13px', color: 'var(--mute)' }}>Points help you climb loyalty tiers</p>
            </div>
            <div style={{ borderLeft: `4px solid var(--coral)`, paddingLeft: '16px', paddingY: '8px' }}>
              <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--ink)', marginBottom: '6px' }}>Unlimited Referrals</p>
              <p style={{ fontSize: '13px', color: 'var(--mute)' }}>Earn unlimited rewards with no cap</p>
            </div>
          </div>
        </div>

        {/* My Referrals */}
        <div className="panel">
          <h3 className="h3" style={{ color: 'var(--ink)', marginBottom: '16px' }}>My Referrals</h3>
          <p style={{ color: 'var(--mute)', marginBottom: '24px', fontSize: '14px' }}>You haven't made any referrals yet. Start sharing your code today!</p>
          <button className="btn">
            Share My Code
          </button>
        </div>
      </div>
    </div>
  );
}
