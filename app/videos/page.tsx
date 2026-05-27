'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function VideosPage() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
    }
  }, [router]);

  const videos = [
    {
      id: 1,
      title: 'Skincare Routine for Beginners',
      category: 'Tutorial',
      duration: '12:34',
      views: '5.2K',
      thumbnail: '🎥',
    },
    {
      id: 2,
      title: 'How to Apply Skincare Products Correctly',
      category: 'Tutorial',
      duration: '8:45',
      views: '3.8K',
      thumbnail: '✋',
    },
    {
      id: 3,
      title: 'Understanding Your Prescription',
      category: 'Education',
      duration: '6:20',
      views: '2.1K',
      thumbnail: '💊',
    },
    {
      id: 4,
      title: 'Laser Treatment: What to Expect',
      category: 'Procedure',
      duration: '15:10',
      views: '4.5K',
      thumbnail: '⚡',
    },
    {
      id: 5,
      title: 'Post-Treatment Care Guide',
      category: 'Care',
      duration: '9:55',
      views: '2.9K',
      thumbnail: '🏥',
    },
    {
      id: 6,
      title: 'Best Foods for Skin Health',
      category: 'Lifestyle',
      duration: '11:20',
      views: '6.1K',
      thumbnail: '🍎',
    },
    {
      id: 7,
      title: 'Anti-Aging Tips from Our Doctors',
      category: 'Expert Talk',
      duration: '18:45',
      views: '7.3K',
      thumbnail: '👨‍⚕️',
    },
    {
      id: 8,
      title: 'Managing Acne: Real Results',
      category: 'Case Study',
      duration: '14:00',
      views: '5.8K',
      thumbnail: '📸',
    },
  ];

  const categories = ['All', ...new Set(videos.map((v) => v.category))];

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)' }}>
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="h2" style={{ color: 'var(--ink)' }}>Video Library</h1>
          <Link href="/dashboard" className="btn sm">
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter */}
        <div style={{ marginBottom: '32px' }}>
          <input
            type="text"
            placeholder="Search videos..."
            className="field-input"
            style={{ width: '100%', padding: '12px 16px', border: `1px solid var(--hair)`, borderRadius: 'var(--r-2)', color: 'var(--ink)', fontSize: '14px' }}
          />
        </div>

        {/* Categories */}
        <div style={{ marginBottom: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                padding: '8px 16px',
                background: 'white',
                border: `1px solid var(--hair)`,
                borderRadius: '999px',
                color: cat === 'All' ? 'white' : 'var(--ink)',
                background: cat === 'All' ? 'var(--brand)' : 'white',
                fontWeight: 500,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'var(--brand)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = cat === 'All' ? 'var(--brand)' : 'white';
                e.currentTarget.style.color = cat === 'All' ? 'white' : 'var(--ink)';
                e.currentTarget.style.borderColor = 'var(--hair)';
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="panel"
              style={{ overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: 'relative',
                  background: 'var(--paper-2)',
                  height: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  overflow: 'hidden',
                  marginBottom: '16px',
                }}
              >
                <div style={{ transition: 'transform 0.3s ease' }}>{video.thumbnail}</div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.3)';
                    e.currentTarget.querySelector('div')!.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0)';
                    e.currentTarget.querySelector('div')!.style.opacity = '0';
                  }}
                >
                  <div style={{ fontSize: '28px', opacity: 0, transition: 'opacity 0.15s ease' }}>▶️</div>
                </div>
              </div>

              {/* Duration Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '16px',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: 'var(--r-1)',
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                {video.duration}
              </div>

              {/* Info */}
              <div>
                <p style={{ fontSize: '10px', color: 'var(--mute)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>{video.category}</p>
                <h3 style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '8px', lineHeight: 1.3, fontSize: '14px' }}>{video.title}</h3>
                <p style={{ fontSize: '12px', color: 'var(--mute-2)' }}>{video.views} views</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div style={{ textAlign: 'center' }}>
          <button className="btn">
            Load More Videos
          </button>
        </div>
      </div>
    </div>
  );
}
