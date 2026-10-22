import React from 'react';

const LandingPage = ({ onStart }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f3f3' }}>
      <button 
        onClick={onStart}
        style={{
          padding: '14px 28px',
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        რეზიუმეს დამატება
      </button>
    </div>
  );
};

export default LandingPage;