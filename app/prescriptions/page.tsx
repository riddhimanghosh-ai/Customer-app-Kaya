'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Prescription {
  id: string;
  medication_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  start_date: string;
  end_date: string;
  doctor_name: string;
  notes: string;
}

export default function PrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    fetchPrescriptions();
  }, [router]);

  const fetchPrescriptions = async () => {
    try {
      const res = await fetch('/api/prescriptions');
      if (res.ok) {
        const data = await res.json();
        setPrescriptions(data.prescriptions);
      }
    } catch (err) {
      console.error('Failed to fetch prescriptions:', err);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const active = prescriptions.filter((p) => !p.end_date || p.end_date >= today);
  const expired = prescriptions.filter((p) => p.end_date && p.end_date < today);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen" style={{ background: 'var(--paper-grad)' }}>
      <header style={{ borderColor: 'var(--hair)', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(6px)' }} className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="h2" style={{ color: 'var(--ink)' }}>Medications</h1>
          <Link href="/dashboard" className="btn sm">
            Back
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Prescriptions */}
        {active.length > 0 && (
          <div className="mb-8">
            <h3 className="h3" style={{ marginBottom: '24px', color: 'var(--ink)' }}>Current Medications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {active.map((prescription) => (
                <div key={prescription.id} className="panel">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div>
                      <p className="eyebrow mb-1">Medication</p>
                      <p className="h4" style={{ color: 'var(--ink)' }}>{prescription.medication_name}</p>
                      <p style={{ fontSize: '13px', color: 'var(--mute)', marginTop: '8px' }}>Dr. {prescription.doctor_name}</p>
                    </div>
                    <span className="tag signal">
                      <span className="led pulse"></span>
                      Active
                    </span>
                  </div>
                  <div style={{ background: 'var(--paper-3)', borderRadius: 'var(--r-2)', padding: '16px', marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <p className="eyebrow mb-1">Dosage</p>
                      <p style={{ fontWeight: 600, color: 'var(--ink)' }}>{prescription.dosage}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <p className="eyebrow mb-1">Frequency</p>
                        <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--ink)' }}>{prescription.frequency}</p>
                      </div>
                      <div>
                        <p className="eyebrow mb-1">Duration</p>
                        <p style={{ fontWeight: 600, fontSize: '13px', color: 'var(--ink)' }}>{prescription.duration}</p>
                      </div>
                    </div>
                  </div>
                  <p className="num" style={{ fontSize: '11px', color: 'var(--mute-2)', marginBottom: '16px' }}>
                    Started: {prescription.start_date}
                    {prescription.end_date && ` • Ends: ${prescription.end_date}`}
                  </p>
                  {prescription.notes && <p style={{ fontSize: '13px', color: 'var(--ink-3)', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--hair)' }}>{prescription.notes}</p>}
                  <button className="btn block">
                    Log Dose Today
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {active.length === 0 && (
          <div className="panel" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <p style={{ fontSize: '18px', color: 'var(--mute)' }}>No active medications</p>
          </div>
        )}

        {/* Expired Prescriptions */}
        {expired.length > 0 && (
          <div className="mb-8">
            <h3 className="h3" style={{ marginBottom: '24px', color: 'var(--ink)' }}>Past Medications ({expired.length})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {expired.map((prescription) => (
                <div key={prescription.id} className="panel">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontWeight: 600, color: 'var(--ink)' }}>{prescription.medication_name}</p>
                      <p style={{ fontSize: '13px', color: 'var(--mute)' }}>Dr. {prescription.doctor_name} • {prescription.dosage}</p>
                      <p className="num" style={{ fontSize: '11px', color: 'var(--mute-2)', marginTop: '8px' }}>
                        {prescription.start_date} to {prescription.end_date}
                      </p>
                    </div>
                    <button style={{ color: 'var(--ink)', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }} className="hover:underline">View</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compliance Stats */}
        <div className="panel">
          <h4 className="h4" style={{ marginBottom: '24px' }}>Medication Compliance</h4>
          <p className="muted mb-6">Track your medicine intake consistency.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div style={{ background: 'var(--paper-3)', border: `1px solid var(--hair-2)`, padding: '16px', borderRadius: 'var(--r-2)', textAlign: 'center' }}>
              <p style={{ fontSize: '28px', fontWeight: 600, color: 'var(--ink)' }}>7</p>
              <p className="muted" style={{ marginTop: '8px', fontSize: '13px' }}>Doses This Week</p>
            </div>
            <div style={{ background: 'var(--paper-3)', border: `1px solid var(--hair-2)`, padding: '16px', borderRadius: 'var(--r-2)', textAlign: 'center' }}>
              <p style={{ fontSize: '28px', fontWeight: 600, color: 'var(--ink)' }}>28</p>
              <p className="muted" style={{ marginTop: '8px', fontSize: '13px' }}>Doses This Month</p>
            </div>
            <div style={{ background: 'var(--mint-tint)', border: `1px solid rgba(77,160,136,0.3)`, padding: '16px', borderRadius: 'var(--r-2)', textAlign: 'center' }}>
              <p style={{ fontSize: '28px', fontWeight: 600, color: 'var(--mint)' }}>95%</p>
              <p style={{ color: 'var(--mint)', marginTop: '8px', fontSize: '13px' }}>Compliance Rate</p>
            </div>
          </div>
          <button className="btn block" style={{ marginTop: '24px' }}>
            View Detailed Log
          </button>
        </div>
      </div>
    </div>
  );
}
