'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const VIDEOS = [
  { dur: '8:24', title: 'Building your morning skincare routine', cat: 'Routines', host: 'Dr. Anika Mehra', views: '124k', big: true },
  { dur: '12:50', title: 'Understanding melasma: causes and treatment', cat: 'Conditions', host: 'Dr. Anika Mehra', views: '88k' },
  { dur: '6:15', title: 'How to use tretinoin without irritation', cat: 'Products', host: 'Dr. Karan Bhatia', views: '212k' },
  { dur: '9:48', title: 'Acne in adults: a clinical walkthrough', cat: 'Conditions', host: 'Dr. Ravi Krishnan', views: '74k' },
  { dur: '4:32', title: 'SPF: how much, how often, which one', cat: 'Products', host: 'Dr. Anika Mehra', views: '156k' },
  { dur: '11:20', title: 'What happens during a chemical peel', cat: 'Procedures', host: 'Dr. Ravi Krishnan', views: '92k' },
  { dur: '7:08', title: 'Building barrier resilience in 14 days', cat: 'Routines', host: 'Dr. Karan Bhatia', views: '58k' },
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

const Brand = () => <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.04em' }}>KAYA</span>;

const NavItem = ({ icon: Icon, label, active, href = '#' }) => (
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

const NavRail = ({ active }) => (
  <div style={{ width: 80, background: 'var(--paper)', borderRight: '1px solid var(--hair)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 0', gap: 4 }}>
    <div style={{ paddingBottom: 12, marginBottom: 12, borderBottom: '1px solid var(--hair)', width: '100%', textAlign: 'center' }}>
      <Brand />
    </div>
    <NavItem icon={IconHome} label="Home" active={active === 'home'} href="/" />
    <NavItem icon={IconAppt} label="Sessions" active={active === 'sessions'} href="/sessions" />
    <NavItem icon={IconMed} label="Prescriptions" active={active === 'prescriptions'} href="/prescriptions" />
    <NavItem icon={IconProgress} label="Progress" active={active === 'progress'} href="/before-after" />
    <NavItem icon={IconChat} label="Chat" active={active === 'chat'} href="/chat" />
    <NavItem icon={IconRewards} label="Loyalty" active={active === 'loyalty'} href="/loyalty" />
    <NavItem icon={IconRefer} label="Refer" active={active === 'refer'} href="/referral" />
    <NavItem icon={IconBlog} label="Blog" active={active === 'blog'} href="/blog" />
    <NavItem icon={IconVideo} label="Videos" active={active === 'videos'} href="/videos" />
  </div>
);

const Topbar = ({ subtitle, title, right }) => (
  <div className="topbar">
    <div>
      <div className="eyebrow">{subtitle}</div>
      <div className="h3" style={{ marginTop: 4 }}>{title}</div>
    </div>
    {right}
  </div>
);

const VideosDesktop = () => {
  const big = VIDEOS[0];

  return (
    <div className="frame" style={{ display: 'flex' }}>
      <NavRail active="videos" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Topbar
          subtitle="Video library"
          title="Watch · learn · apply"
          right={<button className="btn ghost sm">My playlist · 3</button>}
        />

        <div style={{ flex: 1, overflow: 'auto', padding: 'var(--pad-4)' }}>
          {/* Hero video */}
          <div className="row" style={{ gap: 28 }}>
            <div style={{
              flex: 1.4,
              aspectRatio: '16 / 9',
              background: 'radial-gradient(70% 60% at 40% 40%, #c69e76 0%, #5a3c24 80%)',
              position: 'relative',
              cursor: 'pointer',
            }}>
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 70, height: 70,
                background: 'var(--paper)', color: 'var(--ink)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 V19 L19 12 Z" /></svg>
              </div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, color: 'rgba(255,255,255,0.95)' }}>
                <div className="tag" style={{ color: 'inherit', borderColor: 'rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.3)' }}>FEATURED · {big.cat.toUpperCase()}</div>
              </div>
              <div style={{ position: 'absolute', bottom: 16, right: 16, color: 'rgba(255,255,255,0.95)' }}>
                <div className="num" style={{ fontSize: 13, letterSpacing: '0.04em' }}>{big.dur}</div>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="eyebrow gold dot">Featured</div>
              <div className="display" style={{ fontSize: 36, marginTop: 14 }}>{big.title}</div>
              <div className="muted" style={{ fontSize: 14, marginTop: 16, lineHeight: 1.5 }}>
                Dr. Mehra walks through her clinic's morning skincare framework: cleanse, treat, protect — with the rationale behind each product order and timing.
              </div>
              <div className="row" style={{ marginTop: 24, gap: 16 }}>
                <div className="row center" style={{ gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #e6c9a8, #6b4628)' }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{big.host}</div>
                    <div className="muted" style={{ fontSize: 10 }}>{big.views} views</div>
                  </div>
                </div>
                <button className="btn sm" style={{ marginLeft: 'auto' }}>Watch now <span className="arrow" /></button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="row" style={{ marginTop: 36, gap: 12, alignItems: 'flex-end' }}>
            <div className="eyebrow">Episodes · series 2</div>
            <div style={{ flex: 1, height: 1, background: 'var(--hair)' }} />
            <div className="muted" style={{ fontSize: 12 }}>32 videos · 4 hosts</div>
          </div>

          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {VIDEOS.slice(1).map((v, i) => (
              <div key={i}>
                <div style={{
                  aspectRatio: '16 / 9',
                  background: `radial-gradient(70% 60% at ${30 + i * 10}% 40%, hsl(${28 + i*15} 40% ${60 - i*4}%), hsl(${24 + i*12} 30% ${30 - i*2}%))`,
                  position: 'relative',
                  cursor: 'pointer',
                }}>
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 40, height: 40,
                    background: 'rgba(0,0,0,0.5)', color: 'var(--paper)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 V19 L19 12 Z" /></svg>
                  </div>
                  <div className="num" style={{
                    position: 'absolute', bottom: 8, right: 8,
                    fontSize: 10, color: 'rgba(255,255,255,0.9)',
                    background: 'rgba(0,0,0,0.5)', padding: '2px 6px',
                  }}>{v.dur}</div>
                </div>
                <div className="eyebrow" style={{ marginTop: 12, fontSize: 9 }}>{v.cat}</div>
                <div style={{ fontSize: 14, fontWeight: 500, marginTop: 6, lineHeight: 1.3 }}>{v.title}</div>
                <div className="row between" style={{ marginTop: 8 }}>
                  <div className="muted" style={{ fontSize: 11 }}>{v.host}</div>
                  <div className="num muted" style={{ fontSize: 11 }}>{v.views}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileShell = ({ active, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--paper)' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </div>
      <div className="tabbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: 0, borderTop: '1px solid var(--hair)' }}>
        {[
          { icon: IconHome, label: 'Home', key: 'home', href: '/' },
          { icon: IconAppt, label: 'Sessions', key: 'sessions', href: '/sessions' },
          { icon: IconMed, label: 'Rx', key: 'prescriptions', href: '/prescriptions' },
          { icon: IconProgress, label: 'Progress', key: 'progress', href: '/before-after' },
          { icon: IconChat, label: 'Chat', key: 'chat', href: '/chat' },
          { icon: IconRewards, label: 'Loyalty', key: 'loyalty', href: '/loyalty' },
          { icon: IconRefer, label: 'Refer', key: 'refer', href: '/referral' },
          { icon: IconBlog, label: 'Blog', key: 'blog', href: '/blog' },
          { icon: IconVideo, label: 'Videos', key: 'videos', href: '/videos' },
        ].map(({ icon: Icon, label, key, href }) => (
          <NavItem key={key} icon={Icon} label={label} active={active === key} href={href} />
        ))}
      </div>
    </div>
  );
};

const VideosMobile = () => {
  const big = VIDEOS[0];

  return (
    <MobileShell active="videos">
      <div style={{ padding: '16px 16px 100px' }}>
        <div className="eyebrow">Video library</div>
        <div className="display" style={{ fontSize: 32, marginTop: 8 }}>Watch · learn · apply</div>

        {/* Featured */}
        <div style={{ marginTop: 20, aspectRatio: '16 / 9', background: 'radial-gradient(70% 60% at 40% 40%, #c69e76 0%, #5a3c24 80%)', position: 'relative', borderRadius: 8 }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 50, height: 50,
            background: 'var(--paper)', color: 'var(--ink)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 V19 L19 12 Z" /></svg>
          </div>
          <div style={{ position: 'absolute', bottom: 12, left: 12, color: 'rgba(255,255,255,0.95)' }}>
            <div className="num" style={{ fontSize: 11 }}>{big.dur}</div>
          </div>
        </div>

        <div className="eyebrow gold dot" style={{ marginTop: 16 }}>Featured</div>
        <div className="h3" style={{ marginTop: 8 }}>{big.title}</div>
        <div className="row center" style={{ marginTop: 14, gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #e6c9a8, #6b4628)' }} />
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>{big.host}</div>
            <div className="muted" style={{ fontSize: 10 }}>{big.views} views</div>
          </div>
        </div>

        {/* Other videos */}
        <div className="eyebrow" style={{ marginTop: 28 }}>Episodes · series 2</div>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {VIDEOS.slice(1).map((v, i) => (
            <div key={i}>
              <div style={{
                aspectRatio: '16 / 9',
                background: `radial-gradient(70% 60% at ${30 + i * 10}% 40%, hsl(${28 + i*15} 40% ${60 - i*4}%), hsl(${24 + i*12} 30% ${30 - i*2}%))`,
                position: 'relative',
                borderRadius: 8,
              }}>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 32, height: 32,
                  background: 'rgba(0,0,0,0.5)', color: 'var(--paper)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5 V19 L19 12 Z" /></svg>
                </div>
                <div className="num" style={{
                  position: 'absolute', bottom: 6, right: 6,
                  fontSize: 9, color: 'rgba(255,255,255,0.9)',
                  background: 'rgba(0,0,0,0.5)', padding: '2px 5px',
                }}>{v.dur}</div>
              </div>
              <div className="eyebrow" style={{ marginTop: 10, fontSize: 9 }}>{v.cat}</div>
              <div style={{ fontSize: 13, fontWeight: 500, marginTop: 4, lineHeight: 1.2 }}>{v.title}</div>
              <div className="muted" style={{ fontSize: 10, marginTop: 6 }}>{v.host}</div>
            </div>
          ))}
        </div>
      </div>
    </MobileShell>
  );
};

export default function VideosPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <VideosMobile /> : <VideosDesktop />;
}
