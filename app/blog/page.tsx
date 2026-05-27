'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SharedNavRail from '../components/NavRail';
import MobileTabBar from '../components/MobileTabBar';

const ARTICLES = [
  { tag: 'Pigmentation', title: 'The science of melasma — and why retinoids alone won\'t solve it',  author: 'Dr. Ananya Sharma', read: '8 min', date: 'May 22', feat: true },
  { tag: 'Acne',         title: 'Hormonal acne in adults: a 12-week protocol that actually works',  author: 'Dr. Ravi Krishnan', read: '6 min', date: 'May 18' },
  { tag: 'Sun care',     title: 'SPF in monsoon — humidity, sweat, and the science of reapplication', author: 'Dr. Ananya Sharma', read: '4 min', date: 'May 11' },
  { tag: 'Anti-ageing',  title: 'Tretinoin tolerance: the buffering technique you\'ve never tried',  author: 'Dr. Karan Bhatia', read: '7 min', date: 'May 04' },
  { tag: 'Sensitive',    title: 'When your barrier breaks: a clinician\'s recovery playbook',         author: 'Dr. Ananya Sharma', read: '5 min', date: 'Apr 28' },
  { tag: 'Procedures',   title: 'Chemical peels demystified — TCA, glycolic, lactic, salicylic',     author: 'Dr. Ravi Krishnan', read: '9 min', date: 'Apr 22' },
];

const IconHome = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M3 12l9-9 9 9v9H3z" /></svg>;
const IconAppt = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><rect x="3" y="4" width="18" height="18" rx="1" /><path d="M3 10h18" /><path d="M9 1v6M15 1v6" /></svg>;
const IconMed = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="10" /></svg>;
const IconProgress = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M3 12c0-5 2-7 9-7s9 2 9 7-2 7-9 7-9-2-9-7z" /><path d="M12 8v7" /></svg>;
const IconChat = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M3 3h15a2 2 0 012 2v10a2 2 0 01-2 2h-3l-4 4v-4H5a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>;
const IconRewards = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M9 3h6v3H9zM3 8h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /><path d="M8 8v2M12 8v2M16 8v2" /></svg>;
const IconRefer = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><circle cx="9" cy="8" r="3" /><circle cx="15" cy="14" r="3" /><path d="M12 2v4M20 12h4" /></svg>;
const IconBlog = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M4 4h16v16H4zM4 10h16M8 14h8M8 18h6" /></svg>;
const IconVideo = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M2 6l7 5-7 5v-10zM4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" /></svg>;
const IconBell = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M18 8a6 6 0 00-6-6 6 6 0 00-6 6v7l-3 3h18l-3-3V8z" /><path d="M9.5 21h5" /></svg>;
const IconSearch = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>;
const IconSummary = ({ size = 24, ...props }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}><path d="M5 4 H15 L19 8 V20 H5 Z" /><path d="M8 10 H16 M8 13 H16 M8 16 H12" /></svg>;

const Brand = () => <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.04em' }}>KAYA</span>;

const NavItem = ({ icon: Icon, label, active, href = '#' }: any) => (
  <Link href={href}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '12px 8px',
        background: active ? 'var(--paper-2)' : 'transparent',
        border: 0,
        cursor: 'pointer',
        fontSize: 9,
        color: active ? 'var(--ink)' : 'var(--mute)',
        transition: 'all 0.2s ease',
      }}
    >
      <Icon size={20} />
      {label}
    </div>
  </Link>
);

const NavRail = ({ active }: any) => <SharedNavRail active={active} />;

const Topbar = ({ subtitle, title, right }: any) => (
  <div className="topbar">
    <div>
      <div className="eyebrow">{subtitle}</div>
      <div className="h3" style={{ marginTop: 4 }}>{title}</div>
    </div>
    {right}
  </div>
);

const BlogsDesktop = () => {
  const [filter, setFilter] = React.useState('All');
  const tags = ['All', 'Pigmentation', 'Acne', 'Sun care', 'Anti-ageing', 'Sensitive', 'Procedures'];
  const filtered = filter === 'All' ? ARTICLES : ARTICLES.filter(a => a.tag === filter);

  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="blog" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          subtitle="The journal"
          title="Dermatology, in detail."
          right={<button className="btn ghost sm"><IconSearch size={14} /> Search articles</button>}
        />

        <div style={{ padding: '14px var(--pad-4)', borderBottom: '1px solid var(--hair)' }} className="row center" >
          {tags.map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              style={{
                appearance: 'none',
                padding: '6px 12px',
                marginRight: 8,
                background: filter === t ? 'var(--ink)' : 'transparent',
                color: filter === t ? 'var(--paper)' : 'var(--ink)',
                border: '1px solid ' + (filter === t ? 'var(--ink)' : 'var(--hair-2)'),
                font: '500 11px var(--mono)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >{t}</button>
          ))}
        </div>

        <div style={{ flex: 1, overflow: 'auto' }}>
          {filtered.filter((a) => a.feat).map((a, i) => (
            <div key={i} className="row" style={{ borderBottom: '1px solid var(--hair)' }}>
              <div style={{ flex: 1, background: `radial-gradient(120% 100% at 30% 30%, #f6e6d4 0%, #c69e76 60%, #4a2f1f 100%)`, minHeight: 360, position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, left: 20, color: 'rgba(255,255,255,0.85)' }}>
                  <div className="eyebrow" style={{ color: 'inherit' }}>FEATURED · {a.date.toUpperCase()}</div>
                </div>
              </div>
              <div style={{ flex: 1, padding: 'var(--pad-5)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="tag gold" style={{ alignSelf: 'flex-start' }}>{a.tag}</div>
                <div className="display" style={{ fontSize: 40, marginTop: 18 }}>
                  {a.title}
                </div>
                <div className="muted" style={{ fontSize: 14, marginTop: 18 }}>
                  Melasma is a story of UV, hormones, and inflammation working in concert. Topical retinoids address one of those — here's how to address the others, and why a 12-week protocol matters.
                </div>
                <div className="row center" style={{ marginTop: 28, gap: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 30%, #e6c9a8, #6b4628)',
                  }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{a.author}</div>
                    <div className="muted" style={{ fontSize: 11 }}>{a.read} read</div>
                  </div>
                  <button className="btn sm" style={{ marginLeft: 'auto' }}>Read article <span className="arrow" /></button>
                </div>
              </div>
            </div>
          ))}

          <div style={{ padding: 'var(--pad-4)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            {filtered.filter((a) => !a.feat).map((a, i) => (
              <div key={i} style={{
                padding: 'var(--pad-3) var(--pad-3) var(--pad-3) 0',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--hair)' : 0,
                paddingLeft: i % 3 !== 0 ? 'var(--pad-3)' : 0,
              }}>
                <div style={{
                  aspectRatio: '4 / 3',
                  background: `linear-gradient(${135 + i*30}deg, hsl(${28 + i*8} 45% ${60 - i*3}%), hsl(${24 + i*5} 30% ${30 - i*2}%))`,
                  position: 'relative',
                }}>
                  <div className="num" style={{
                    position: 'absolute', top: 12, left: 12,
                    fontSize: 10, color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'var(--mono)', letterSpacing: '0.14em',
                  }}>0{i + 2}</div>
                </div>
                <div className="tag" style={{ marginTop: 14 }}>{a.tag}</div>
                <div className="h4" style={{ marginTop: 12, fontSize: 17, lineHeight: 1.25 }}>{a.title}</div>
                <div className="row between center" style={{ marginTop: 14 }}>
                  <div className="muted" style={{ fontSize: 11 }}>{a.author}</div>
                  <div className="num muted" style={{ fontSize: 11 }}>{a.read} · {a.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileShell = ({ active = '', children }: any) => {
  return (
    <div className="frame" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="statusbar">
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
          <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
          <span style={{ display: 'inline-block', width: 4, height: 4, background: 'currentColor', borderRadius: '50%' }} />
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="0.5" y="0.5" width="13" height="10" rx="2" stroke="currentColor" /><rect x="2" y="2" width="9" height="7" fill="currentColor" /><rect x="14" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" /></svg>
        </span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>{children}</div>
      <MobileTabBar active={active} />
    </div>
  );
};

const BlogsMobile = () => {
  const [filter, setFilter] = React.useState('All');
  const tags = ['All', 'Pigmentation', 'Acne', 'Sun care', 'Anti-ageing'];
  const filtered = filter === 'All' ? ARTICLES : ARTICLES.filter(a => a.tag === filter);

  return (
    <MobileShell active="home">
      <div style={{ padding: '16px 16px 100px', height: '100%', overflow: 'auto' }}>
        <div className="eyebrow">The journal</div>
        <div className="display" style={{ fontSize: 32, marginTop: 8 }}>Dermatology, in detail.</div>

        <div style={{ marginTop: 16, display: 'flex', gap: 8, overflow: 'auto', paddingBottom: 8 }}>
          {tags.map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              style={{
                appearance: 'none',
                padding: '6px 12px',
                background: filter === t ? 'var(--ink)' : 'var(--paper-2)',
                color: filter === t ? 'var(--paper)' : 'var(--ink)',
                border: 0,
                font: '500 10px var(--mono)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '999px',
                whiteSpace: 'nowrap',
              }}
            >{t}</button>
          ))}
        </div>

        {filtered.filter((a) => a.feat).map((a, i) => (
          <div key={i} style={{ marginTop: 20 }}>
            <div style={{
              aspectRatio: '16 / 9',
              background: `radial-gradient(120% 100% at 30% 30%, #f6e6d4 0%, #c69e76 60%, #4a2f1f 100%)`,
              position: 'relative',
              borderRadius: 8,
            }}>
              <div style={{ position: 'absolute', top: 12, left: 12, color: 'rgba(255,255,255,0.85)' }}>
                <div className="eyebrow" style={{ color: 'inherit', fontSize: 9 }}>FEATURED</div>
              </div>
            </div>
            <div className="tag gold" style={{ marginTop: 12 }}>{a.tag}</div>
            <div className="h4" style={{ marginTop: 12, fontSize: 18, lineHeight: 1.2 }}>{a.title}</div>
            <div className="row between center" style={{ marginTop: 12 }}>
              <div className="muted" style={{ fontSize: 11 }}>{a.author}</div>
              <div className="num muted" style={{ fontSize: 11 }}>{a.read}</div>
            </div>
          </div>
        ))}

        {filtered.filter((a) => !a.feat).map((a, i) => (
          <div key={i} style={{ marginTop: 20, paddingBottom: 20, borderBottom: i < filtered.length - 2 ? '1px solid var(--hair)' : 0 }}>
            <div className="tag" style={{ fontSize: 10 }}>{a.tag}</div>
            <div className="h4" style={{ marginTop: 10, fontSize: 16, lineHeight: 1.25 }}>{a.title}</div>
            <div className="row between center" style={{ marginTop: 12 }}>
              <div className="muted" style={{ fontSize: 11 }}>{a.author}</div>
              <div className="num muted" style={{ fontSize: 11 }}>{a.read}</div>
            </div>
          </div>
        ))}
      </div>
    </MobileShell>
  );
};

export default function BlogPage() {
  return (
    <>
      <div className="desktop-only"><BlogsDesktop /></div>
      <div className="mobile-only"><BlogsMobile /></div>
    </>
  );
}
