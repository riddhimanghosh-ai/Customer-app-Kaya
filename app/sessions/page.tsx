'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Session {
  id: string;
  doctor_name: string;
  session_date: string;
  session_time: string;
  status: string;
  treatment_type: string;
  notes: string;
}

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    fetchSessions();
  }, [router]);

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

  const upcoming = sessions.filter((s) => s.status === 'upcoming').sort((a, b) => new Date(a.session_date).getTime() - new Date(b.session_date).getTime());
  const completed = sessions.filter((s) => s.status === 'completed').sort((a, b) => new Date(b.session_date).getTime() - new Date(a.session_date).getTime());

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)' }}>
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="h2" style={{ color: 'var(--ink)' }}>Your Appointments</h1>
          <Link href="/dashboard" className="btn sm">
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upcoming Sessions */}
        {upcoming.length > 0 && (
          <div className="mb-8">
            <h3 className="h3" style={{ marginBottom: '24px', color: 'var(--ink)' }}>Next Appointments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcoming.map((session) => (
                <div key={session.id} className="panel">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <p className="eyebrow mb-1">Dermatologist</p>
                      <p className="h4" style={{ color: 'var(--ink)' }}>Dr. {session.doctor_name}</p>
                      <p style={{ fontSize: '13px', color: 'var(--mute)', marginTop: '8px' }}>{session.treatment_type || 'Consultation'}</p>
                    </div>
                    <span className="tag signal" style={{ whiteSpace: 'nowrap', marginLeft: '16px' }}>
                      <span className="led"></span>
                      Upcoming
                    </span>
                  </div>
                  <div style={{ background: 'var(--paper-3)', borderRadius: 'var(--r-2)', padding: '16px', marginBottom: '16px' }}>
                    <p className="eyebrow mb-1">Date & Time</p>
                    <p style={{ fontWeight: 600, color: 'var(--ink)' }}>
                      {session.session_date} at {session.session_time}
                    </p>
                  </div>
                  {session.notes && <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginBottom: '16px' }}>{session.notes}</p>}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="btn sm" style={{ flex: 1 }}>
                      Reschedule
                    </button>
                    <button className="btn ghost sm" style={{ flex: 1 }}>
                      Add Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {upcoming.length === 0 && (
          <div className="panel" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <p style={{ fontSize: '18px', color: 'var(--mute)', marginBottom: '16px' }}>No upcoming appointments</p>
            <button className="btn">
              Schedule Appointment
            </button>
          </div>
        )}

        {/* Completed Sessions */}
        {completed.length > 0 && (
          <div>
            <h3 className="h3" style={{ marginBottom: '24px', color: 'var(--ink)' }}>Appointment History</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {completed.map((session) => (
                <div key={session.id} className="panel">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--ink)' }}>Dr. {session.doctor_name}</p>
                      <p style={{ fontSize: '13px', color: 'var(--mute)' }}>{session.treatment_type || 'Consultation'}</p>
                      <p className="num" style={{ fontSize: '11px', color: 'var(--mute-2)', marginTop: '8px' }}>
                        {session.session_date} at {session.session_time}
                      </p>
                    </div>
                    <button style={{ color: 'var(--ink)', textDecoration: 'none', fontWeight: 600, fontSize: '13px' }} className="hover:underline">View Details →</button>
                  </div>
                  {session.notes && <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--hair)' }}>{session.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
