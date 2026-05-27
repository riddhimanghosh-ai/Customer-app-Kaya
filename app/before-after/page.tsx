'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function BeforeAfterPage() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
    }
  }, [router]);

  const galleryItems = [
    { id: 1, treatment: 'Acne Treatment', beforeImage: '📷 Before', afterImage: '📷 After', date: '2026-03-15' },
    { id: 2, treatment: 'Anti-Aging', beforeImage: '📷 Before', afterImage: '📷 After', date: '2026-02-20' },
    { id: 3, treatment: 'Skin Brightening', beforeImage: '📷 Before', afterImage: '📷 After', date: '2026-01-10' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)' }}>
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="h2" style={{ color: 'var(--ink)' }}>Before & After Gallery</h1>
          <Link href="/dashboard" className="btn sm">
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="panel">
              <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden mb-4" style={{ height: '240px', border: `1px solid var(--hair)` }}>
                {/* Before */}
                <div className="flex items-center justify-center" style={{ background: 'var(--paper-2)', borderRight: `1px solid var(--hair)` }}>
                  <div className="text-center">
                    <p style={{ fontSize: '28px', marginBottom: '8px' }}>📷</p>
                    <p style={{ fontSize: '12px', color: 'var(--mute)', fontWeight: 500 }}>Before</p>
                  </div>
                </div>
                {/* After */}
                <div className="flex items-center justify-center" style={{ background: 'var(--mint-tint)' }}>
                  <div className="text-center">
                    <p style={{ fontSize: '28px', marginBottom: '8px' }}>📷</p>
                    <p style={{ fontSize: '12px', color: 'var(--mint)', fontWeight: 500 }}>After</p>
                  </div>
                </div>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>{item.treatment}</p>
              <p className="num" style={{ fontSize: '12px', color: 'var(--mute)', marginBottom: '16px' }}>Dated: {item.date}</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn sm" style={{ flex: 1 }}>
                  View Full
                </button>
                <button className="btn ghost sm" style={{ flex: 1 }}>
                  Compare
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="panel" style={{ marginTop: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📸</div>
          <h2 className="h3" style={{ color: 'var(--ink)', marginBottom: '12px' }}>Upload Your Progress</h2>
          <p style={{ color: 'var(--mute)', marginBottom: '24px', fontSize: '14px' }}>Share your before & after photos to track your treatment journey with your doctor</p>
          <button className="btn">
            Upload Images
          </button>
        </div>
      </div>
    </div>
  );
}
