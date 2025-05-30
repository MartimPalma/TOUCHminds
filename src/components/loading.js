import React, { useEffect } from 'react';

const Loading = ({ message = "A carregar..." }) => {
  useEffect(() => {
    const styleId = 'loading-touchminds-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.type = 'text/css';
      style.innerHTML = `
        @keyframes fillAnimation {
          0% {
            background-position: -200% 0;
            filter: drop-shadow(0 0 0 transparent);
          }
          50% {
            background-position: 0% 0;
            filter: drop-shadow(0 0 10px #99CBC8);
          }
          100% {
            background-position: 200% 0;
            filter: drop-shadow(0 0 0 transparent);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div style={styles.overlay} role="alert" aria-busy="true" aria-live="assertive">
      <div style={styles.container}>
        <h1 style={styles.touchminds}>TOUCHminds</h1>
        <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  container: {
    textAlign: 'center',
  },
  touchminds: {
    fontSize: '5rem',
    fontWeight: '900',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(90deg, #234970 25%, #99CBC8 50%, #234970 75%)',
    backgroundSize: '200% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'fillAnimation 3s ease-in-out infinite',
    userSelect: 'none',
    margin: 0,
  },
  message: {
    marginTop: '16px',
    fontSize: '1.3rem',
    color: '#234970',
    fontWeight: '600',
  }
};

export default Loading;
