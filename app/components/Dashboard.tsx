'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface User {
  id: string;
  email: string;
  name: string;
  loyalty_tier: string;
  loyalty_points: number;
  referral_code: string;
}

interface Reminder {
  id: string;
  title: string;
  message: string;
  reminder_type: string;
  reminder_date: string;
  reminder_time: string;
  is_read: boolean;
}

interface Session {
  id: string;
  doctor_name: string;
  session_date: string;
  session_time: string;
  status: string;
  treatment_type: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }

    setUser(JSON.parse(userData));
    fetchReminders();
    fetchSessions();
  }, [router]);

  const fetchReminders = async () => {
    try {
      const res = await fetch('/api/reminders');
      if (res.ok) {
        const data = await res.json();
        setReminders(data.reminders);
      }
    } catch (err) {
      console.error('Failed to fetch reminders:', err);
    }
  };

  const fetchSessions = async () => {
    try {
      const res = await fetch('/api/sessions');
      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions);
      }
    } catch (err) {
      console.error('Failed to fetch sessions:', err);
    } finally {
      setLoading(false);
    }
  };

  const getLoyaltyColor = (tier: string) => {
    const colors: Record<string, string> = {
      Silver: 'bg-gray-200 text-gray-900',
      Gold: 'bg-yellow-100 text-yellow-900',
      Elite: 'bg-blue-100 text-blue-900',
      Platinum: 'bg-purple-100 text-purple-900',
    };
    return colors[tier] || 'bg-gray-200 text-gray-900';
  };

  const upcomingSessions = sessions.filter((s) => s.status === 'upcoming').sort((a, b) => new Date(a.session_date).getTime() - new Date(b.session_date).getTime());
  const unreadReminders = reminders.filter((r) => !r.is_read).slice(0, 5);

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)' }}>
      {/* Header */}
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <p style={{ color: 'var(--mute)' }} className="text-sm mb-1">Welcome back</p>
            <h1 style={{ color: 'var(--ink)' }} className="text-3xl font-bold">{user.name}</h1>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('user');
              router.push('/login');
            }}
            className="btn sm"
          >
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="panel">
            <p className="eyebrow mb-2">Loyalty Tier</p>
            <div className="tag brand" style={{ display: 'inline-flex' }}>
              <span>{user.loyalty_tier}</span>
            </div>
          </div>
          <div className="panel">
            <p className="eyebrow mb-2">Loyalty Points</p>
            <p className="num" style={{ fontSize: '28px', color: 'var(--ink)' }}>{user.loyalty_points}</p>
            <p className="text-xs muted mt-2">Earn more on each visit</p>
          </div>
          <div className="panel">
            <p className="eyebrow mb-2">Referral Code</p>
            <p className="num" style={{ fontSize: '16px', color: 'var(--ink)', background: 'var(--paper-3)', padding: '8px 12px', borderRadius: 'var(--r-2)' }}>
              {user.referral_code}
            </p>
          </div>
        </div>

        {/* Quick Actions - Main Navigation */}
        <div className="mb-8">
          <h3 className="h3 mb-4">Your Care Center</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/sessions"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip sky" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>📅</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Appointments</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>{upcomingSessions.length} upcoming</p>
            </Link>

            <Link
              href="/prescriptions"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip mint" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>💊</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Medications</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>Track & Reminders</p>
            </Link>

            <Link
              href="/before-after"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip brand" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>📸</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Progress</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>Before & After</p>
            </Link>

            <Link
              href="/chatbot"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip lavender" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>💬</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Ask Dr. AI</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>Instant Help</p>
            </Link>

            <Link
              href="/loyalty"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip coral" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>🏆</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Rewards</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>Loyalty Program</p>
            </Link>

            <Link
              href="/referral"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip sky" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>👥</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Refer</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>Share & Earn</p>
            </Link>

            <Link
              href="/blogs"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip mint" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>📖</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Learn</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>Skin Care Tips</p>
            </Link>

            <Link
              href="/videos"
              className="panel transition"
              style={{ textAlign: 'center', border: `1px solid var(--hair-2)`, cursor: 'pointer' }}
            >
              <div className="icon-chip lavender" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '12px' }}>🎥</div>
              <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>Videos</p>
              <p style={{ fontSize: '12px', color: 'var(--mute)', marginTop: '6px' }}>Tutorials</p>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Upcoming Sessions */}
          <div className="panel">
            <h4 className="h4 mb-4">Next Appointments</h4>
            {upcomingSessions.length === 0 ? (
              <div className="text-center py-8">
                <p className="muted">No upcoming appointments</p>
                <Link href="/sessions" style={{ color: 'var(--ink)', textDecoration: 'underline' }} className="font-medium text-sm mt-2 inline-block">
                  Schedule an appointment →
                </Link>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {upcomingSessions.slice(0, 3).map((session) => (
                  <div key={session.id} className="rail-l mint" style={{ padding: '12px', background: 'var(--mint-tint)', borderRadius: 'var(--r-2)' }}>
                    <p style={{ fontWeight: 600, color: 'var(--ink)' }}>{session.doctor_name}</p>
                    <p className="muted" style={{ fontSize: '13px' }}>{session.treatment_type || 'Consultation'}</p>
                    <p className="num" style={{ fontSize: '12px', fontWeight: 500, color: 'var(--ink-3)', marginTop: '6px' }}>
                      {session.session_date} at {session.session_time}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Reminders */}
          <div className="panel">
            <h4 className="h4 mb-4">Active Reminders</h4>
            {unreadReminders.length === 0 ? (
              <div className="text-center py-8">
                <p className="muted">All caught up!</p>
                <p className="muted-2" style={{ fontSize: '12px', marginTop: '6px' }}>No active reminders</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {unreadReminders.map((reminder) => (
                  <div key={reminder.id} className="rail-l alert" style={{ padding: '12px', background: 'var(--alert-tint)', borderRadius: 'var(--r-2)' }}>
                    <p style={{ fontWeight: 600, color: 'var(--ink)' }}>{reminder.title}</p>
                    <p style={{ fontSize: '13px', color: 'var(--ink-3)' }}>{reminder.message}</p>
                    <p className="muted-2" style={{ fontSize: '11px', marginTop: '6px' }}>
                      {reminder.reminder_date} at {reminder.reminder_time}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Educational Resources */}
        <div className="panel ink">
          <h4 className="h4" style={{ color: 'white', marginBottom: '16px' }}>Learn About Your Skin</h4>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '16px', fontSize: '13px' }}>
            Watch expert dermatologists explain skin conditions, treatment options, and skincare routines tailored for your skin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Acne Treatment Guide', type: 'Video' },
              { title: 'Skin Care Routine', type: 'Video' },
              { title: 'Treatment Results', type: 'Video' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--r-2)', padding: '16px', cursor: 'pointer', transition: 'background 0.15s ease' }} className="hover:bg-opacity-12">
                <p style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', fontWeight: 500 }}>{item.type}</p>
                <p style={{ fontWeight: 600, color: 'white', fontSize: '13px' }}>{item.title}</p>
              </div>
            ))}
          </div>
          <Link href="/videos" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', display: 'inline-block', marginTop: '16px' }} className="hover:text-white">
            View all content →
          </Link>
        </div>
      </div>
    </div>
  );
}
