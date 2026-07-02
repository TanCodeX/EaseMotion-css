"use client";

import React, { useState } from 'react';

export default function TimelineNode({ 
  title, 
  description, 
  index, 
  icon 
}: { 
  title: string, 
  description: string, 
  index: number, 
  icon: string 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="ease-fade-in ease-hover-lift"
      style={{ 
        display: 'flex', 
        gap: '1.5rem', 
        animationDelay: `${index * 0.15}s`,
        cursor: 'pointer',
        padding: '1rem',
        borderRadius: '12px',
        backgroundColor: isExpanded ? 'rgba(0, 112, 243, 0.05)' : 'transparent',
        transition: 'background-color 0.3s ease'
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div 
          className={isExpanded ? 'ease-pulse' : ''}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: isExpanded ? '#0070f3' : '#e2e8f0',
            color: isExpanded ? 'white' : '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            transition: 'all 0.3s ease'
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1, width: '2px', backgroundColor: '#e2e8f0', margin: '0.5rem 0' }}></div>
      </div>
      <div style={{ flex: 1, paddingBottom: '2rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#0f172a' }}>{title}</h3>
        <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>{description}</p>
        
        {isExpanded && (
          <div className="ease-slide-down" style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', color: '#334155' }}>
            <p style={{ margin: 0 }}>Extra interactive details loaded via client component state. No CLS occurred because hydration perfectly preserved the structure.</p>
          </div>
        )}
      </div>
    </div>
  );
}
