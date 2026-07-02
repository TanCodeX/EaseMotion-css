import React from 'react';
import TimelineNode from './TimelineNode';

export const metadata = {
  title: 'EaseMotion Next.js Showcase',
  description: 'Demonstrating SSR compatibility with EaseMotion CSS',
};

// Simulate server data fetch
async function getTimelineData() {
  return [
    { id: 1, title: 'Project Initialization', description: 'Server-side rendering begins without blocking the main thread.', icon: '🚀' },
    { id: 2, title: 'Static Styles Applied', description: 'EaseMotion CSS is loaded as a pure static asset with zero JS overhead.', icon: '⚡' },
    { id: 3, title: 'Client Hydration', description: 'Interactive React state kicks in smoothly, preserving layout integrity.', icon: '💧' },
    { id: 4, title: 'Animations Ready', description: 'Hover and click to see 60fps hardware-accelerated animations.', icon: '✨' },
  ];
}

export default async function Home() {
  const data = await getTimelineData();

  return (
    <main style={{ minHeight: '100vh', padding: '4rem 2rem', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header className="ease-slide-down" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            EaseMotion <span style={{ color: '#0070f3' }}>SSR</span> Showcase
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            A hybrid Server/Client Next.js page demonstrating seamless zero-CLS animations using pure static CSS utilities.
          </p>
        </header>

        <section>
          {data.map((item, index) => (
            <TimelineNode 
              key={item.id} 
              title={item.title} 
              description={item.description} 
              index={index} 
              icon={item.icon}
            />
          ))}
        </section>
        
        <footer className="ease-fade-in" style={{ marginTop: '4rem', textAlign: 'center', color: '#94a3b8', animationDelay: '1s' }}>
          <p>Powered by Next.js App Router + EaseMotion CSS</p>
        </footer>
      </div>
    </main>
  );
}
