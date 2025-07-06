import React from 'react';
import { Link } from 'react-router-dom';

const StockAnalysisLayout = ({ title, children }) => {
  return (
    <div style={styles.container}>
            <div>
            <nav style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white
                padding: '1rem 1.5rem',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1200px', // Limit width for better readability on large screens
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#374151', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#63b3ed', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>
                    S
                </div>
                StockAI
                </Link>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Link to="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.2s ease-in-out', '&:hover': { color: '#1e293b' } }}>
                    Home
                </Link>
                <Link to="/about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.1rem', transition: 'color 0.2s ease-in-out', '&:hover': { color: '#1e293b' } }}>
                    About
                </Link>
                </div>
            </nav>
        </div>

      <h1 style={styles.title}>{title}</h1>
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    height: '100vh',
    background: 'linear-gradient(to bottom right, white, #9ec8ff)',
    minHeight: '80vh',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
  },
  content: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
  },
};

export default StockAnalysisLayout;