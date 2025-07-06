// import React from 'react';
// import { Link } from 'react-router-dom';

// function HomePage() {
//   return (
//     <div>
//       <h1>Select Stock Type</h1>
//       <Link to="/international">
//         <button>International Stocks</button>
//       </Link>
//       <Link to="/country">
//         <button>Specific Country Stocks</button>
//       </Link>
//     </div>
//   );
// }

// export default HomePage;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { supabase } from './supabaseClient';

// function HomePage() {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) {
//       console.error('Logout failed:', error.message);
//     } else {
//       navigate('/');
//     }
//   };

//   return (
//     <div style={{ height: '100vh', background: 'linear-gradient(to bottom right, white, #9ec8ff)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', padding: '2rem', gap: '2rem' }}>
//       <div>
//         <nav style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.9)',
//           padding: '1rem 1.5rem',
//           borderBottom: '1px solid #e5e7eb',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           width: '100%',
//           maxWidth: '1200px',
//           borderRadius: '0.5rem',
//           boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
//         }}>
//           <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#374151', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//             <div style={{ width: '24px', height: '24px', backgroundColor: '#63b3ed', borderRadius: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontSize: '1rem' }}>
//               S
//             </div>
//             StockAI
//           </Link>
//           <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
//             <Link to="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.1rem' }}>
//               Home
//             </Link>
//             <Link to="/about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.1rem' }}>
//               About
//             </Link>
//             {/* Logout Button */}
//             <button
//               onClick={handleLogout}
//               style={{
//                 backgroundColor: '#ef4444',
//                 color: 'white',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '0.375rem',
//                 cursor: 'pointer',
//                 fontSize: '1rem',
//               }}
//             >
//               Logout
//             </button>
//           </div>
//         </nav>
//       </div>

//       <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#374151', marginBottom: '1rem' }}>Explore Stock Markets</h1>

//       <div style={{ display: 'flex', gap: '2rem' }}>
//         {/* International Stocks */}
//         <Link to="/international" style={{ textDecoration: 'none' }}>
//           <div style={{
//             backgroundColor: '#f9fafb',
//             border: '1px solid #e5e7eb',
//             borderRadius: '0.5rem',
//             padding: '1.5rem',
//             width: '250px',
//             textAlign: 'center',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//           }}>
//             <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '0.5rem' }}>Global Markets</h2>
//             <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>
//               Explore stocks listed on exchanges across the world.
//             </p>
//             <button style={{
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               padding: '0.75rem 1.5rem',
//               borderRadius: '0.375rem',
//               fontWeight: 'medium',
//               cursor: 'pointer',
//             }}>
//               International Stocks
//             </button>
//           </div>
//         </Link>

//         {/* Specific Country Stocks */}
//         <Link to="/country" style={{ textDecoration: 'none' }}>
//           <div style={{
//             backgroundColor: '#f9fafb',
//             border: '1px solid #e5e7eb',
//             borderRadius: '0.5rem',
//             padding: '1.5rem',
//             width: '250px',
//             textAlign: 'center',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//             transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//           }}>
//             <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold', color: '#1e293b', marginBottom: '0.5rem' }}>Local Markets</h2>
//             <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1rem' }}>
//               Browse stocks specifically listed within a chosen country.
//             </p>
//             <button style={{
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               padding: '0.75rem 1.5rem',
//               borderRadius: '0.375rem',
//               fontWeight: 'medium',
//               cursor: 'pointer',
//             }}>
//               Specific Country Stocks
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// New working code with same theme 
// import React from 'react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import StockContext from './StockContext';


function HomePage() {
  const navigate = useNavigate();

  const { topStocks } = useContext(StockContext);
  // const [topStocks, setTopStocks] = useState([]);

  // useEffect(() => {
  //   const fetchStocks = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/top-stocks'); // Replace with full URL if not using proxy
  //       if (!response.ok) {
  //         throw new Error(`HTTP error: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setTopStocks(data.slice(0, 10)); // Show only top 10
  //     } catch (error) {
  //       console.error('Failed to fetch top stocks:', error);
  //     }
  //   };

  //   fetchStocks();
  // }, []);


  
    const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout failed:', error.message);
    } else {
      navigate('/');
    }
    };

    const thStyle = {
      padding: '0.75rem',
      fontWeight: 'bold',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    };
    
    const tdStyle = {
      padding: '0.75rem',
    };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #312e81)',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem 1.5rem',
        borderRadius: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        <Link to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none'
        }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            S
          </div>
          StockAI Pro
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '1rem' }}>Home</Link>
          <Link to="/about" style={{ color: '#d1d5db', textDecoration: 'none', fontSize: '1rem' }}>About</Link>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={e => e.target.style.backgroundColor = '#b91c1c'}
            onMouseLeave={e => e.target.style.backgroundColor = '#dc2626'}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Top stocks */}
      <h1 style={{
          fontSize: '2rem',
          color: 'white',
          textAlign: 'center',
          margin: '4rem 0 2rem'
          }}>
          🔥 Top 10 Market Movers (International)
      </h1>

      {topStocks.length === 0 ? (
        <p style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '1.25rem',
          marginTop: '2rem'
        }}>
          Loading stock data...
        </p>
      ) : (
        <div style={{ overflowX: 'auto', padding: '1rem' }}>
          <table style={{
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
            borderCollapse: 'collapse',
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0.5rem',
            overflow: 'hidden'
          }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Ticker</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Change (%)</th>
                <th style={thStyle}>Volume</th>
                <th style={thStyle}>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {topStocks.map((stock, idx) => (
                <tr key={idx} style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.03)'
                }}>
                  <td style={tdStyle}>{idx + 1}</td>
                  <td style={tdStyle}>{stock.ticker}</td>
                  <td style={tdStyle}>{stock.description}</td>
                  <td style={tdStyle}>{stock.price.toLocaleString()}</td>
                  <td style={{
                    ...tdStyle,
                    color: stock.change >= 0 ? '#22c55e' : '#ef4444'
                  }}>
                    {stock.change}%
                  </td>
                  <td style={tdStyle}>{stock.volume.toLocaleString()}</td>
                  <td style={{ ...tdStyle, color: '#fbbf24' }}>
                    {(stock.market_cap / 1_000_000_000).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>Explore Stock Markets</h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {/* International Stocks */}
        <Link to="/international" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '1rem',
            width: '280px',
            textAlign: 'center',
            transition: 'all 0.2s',
            cursor: 'pointer'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Global Markets</h2>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
              Explore stocks listed on exchanges across the world.
            </p>
            <button style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>International Stocks</button>
          </div>
        </Link>

        {/* Specific Country Stocks */}
        <Link to="/country" style={{ textDecoration: 'none' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '1rem',
            width: '280px',
            textAlign: 'center',
            transition: 'all 0.2s',
            cursor: 'pointer'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white', marginBottom: '1rem' }}>Local Markets</h2>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
              Browse stocks specifically listed within a chosen country.
            </p>
            <button style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>Specific Country Stocks</button>
          </div>
        </Link>


      </div>
    </div>
  );
}

export default HomePage;

