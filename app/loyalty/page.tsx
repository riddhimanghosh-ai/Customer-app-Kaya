'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface User {
  loyalty_tier: string;
  loyalty_points: number;
}

export default function LoyaltyPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const tiers = [
    { name: 'Silver', minPoints: 0, maxPoints: 999, benefits: ['5% discount on all services'], color: 'bg-gray-100 text-gray-800' },
    { name: 'Gold', minPoints: 1000, maxPoints: 4999, benefits: ['10% discount', 'Free consultation quarterly'], color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Elite', minPoints: 5000, maxPoints: 9999, benefits: ['15% discount', 'Priority booking', 'Free products quarterly'], color: 'bg-blue-100 text-blue-800' },
    { name: 'Platinum', minPoints: 10000, maxPoints: Infinity, benefits: ['20% discount', 'VIP support', 'Free products monthly', 'Exclusive events'], color: 'bg-purple-100 text-purple-800' },
  ];

  const pointsToNextTier = user ? (
    user.loyalty_tier === 'Platinum' ? 0 : Math.max(0, (tiers.find((t) => t.name === user.loyalty_tier)?.maxPoints || 0) + 1 - user.loyalty_points)
  ) : 0;

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)' }}>
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="h2" style={{ color: 'var(--ink)' }}>Loyalty Rewards</h1>
          <Link href="/dashboard" className="btn sm">
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Current Status */}
        <div className="panel ink" style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '48px', fontWeight: 600, marginBottom: '8px', color: 'white' }}>{user.loyalty_tier}</p>
          <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>{user.loyalty_points} Points</p>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>{pointsToNextTier > 0 ? `${pointsToNextTier} points to next tier` : 'Platinum tier - highest status!'}</p>
          <div style={{ width: '100%', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', height: '8px', maxWidth: '240px', margin: '0 auto', overflow: 'hidden' }}>
            <div
              style={{
                background: 'white',
                height: '100%',
                borderRadius: '999px',
                transition: 'width 0.3s ease',
                width: `${Math.min(100, (user.loyalty_points % 1000) / 10)}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Tier Progression */}
        <div className="panel" style={{ marginBottom: '32px' }}>
          <h3 className="h3" style={{ marginBottom: '24px' }}>Tier Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  padding: '16px',
                  borderRadius: 'var(--r-2)',
                  border: `2px solid ${user.loyalty_tier === tier.name ? 'var(--brand)' : 'var(--hair)'}`,
                  background: user.loyalty_tier === tier.name ? 'var(--brand-tint)' : 'var(--paper-2)',
                }}
              >
                <p style={{ fontWeight: 600, fontSize: '16px', marginBottom: '8px', color: 'var(--ink)' }}>{tier.name}</p>
                <p style={{ fontSize: '11px', color: 'var(--mute)', marginBottom: '12px' }}>
                  {tier.minPoints.toLocaleString()} - {tier.maxPoints === Infinity ? '∞' : tier.maxPoints.toLocaleString()} pts
                </p>
                <ul style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--ink)' }}>
                      <span style={{ marginRight: '8px' }}>✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                {user.loyalty_tier === tier.name && <p style={{ marginTop: '12px', color: 'var(--brand)', fontWeight: 600, fontSize: '12px' }}>🎯 Current Tier</p>}
              </div>
            ))}
          </div>
        </div>

        {/* How to Earn Points */}
        <div className="panel" style={{ marginBottom: '32px' }}>
          <h3 className="h3" style={{ marginBottom: '24px' }}>How to Earn Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div style={{ border: `2px solid var(--mint)`, borderRadius: 'var(--r-2)', padding: '16px', background: 'var(--mint-tint)' }}>
              <p style={{ fontSize: '24px', marginBottom: '8px' }}>🛍️</p>
              <p style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}>Shop & Services</p>
              <p style={{ fontSize: '13px', color: 'var(--mute)' }}>Earn 1 point per ₹100 spent on any service or product</p>
            </div>
            <div style={{ border: `2px solid var(--sky)`, borderRadius: 'var(--r-2)', padding: '16px', background: 'var(--sky-tint)' }}>
              <p style={{ fontSize: '24px', marginBottom: '8px' }}>📣</p>
              <p style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}>Referrals</p>
              <p style={{ fontSize: '13px', color: 'var(--mute)' }}>Earn 100 bonus points when a friend signs up using your code</p>
            </div>
            <div style={{ border: `2px solid var(--coral)`, borderRadius: 'var(--r-2)', padding: '16px', background: 'var(--coral-tint)' }}>
              <p style={{ fontSize: '24px', marginBottom: '8px' }}>⭐</p>
              <p style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--ink)' }}>Reviews & Feedback</p>
              <p style={{ fontSize: '13px', color: 'var(--mute)' }}>Earn 25 points for every review or feedback you submit</p>
            </div>
          </div>
        </div>

        {/* Redeem Points */}
        <div style={{ background: 'var(--brand-tint-2)', border: `1px solid var(--brand-rule)`, borderRadius: 'var(--r-3)', padding: '32px', textAlign: 'center' }}>
          <h3 className="h3" style={{ marginBottom: '16px' }}>Redeem Your Points</h3>
          <p style={{ color: 'var(--ink-3)', marginBottom: '24px' }}>
            You have {user.loyalty_points} points available. Use them to get discounts on your next purchase!
          </p>
          <button className="btn">
            Browse Rewards Catalog
          </button>
        </div>
      </div>
    </div>
  );
}
