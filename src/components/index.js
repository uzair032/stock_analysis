// // // index.js
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { supabase } from './supabaseClient'; // make sure this path is correct

// // Icon components
// const SearchIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '1.5rem', height: '1.5rem' }} viewBox="0 0 24 24">
//     <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
//   </svg>
// );

// const TrendingUpIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '1.5rem', height: '1.5rem' }} viewBox="0 0 24 24">
//     <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l6.88-6.88a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.88 6.88V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
//   </svg>
// );

// const ChartLineIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={{ width: '1.5rem', height: '1.5rem' }} viewBox="0 0 24 24">
//     <path fillRule="evenodd" d="M3 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 01.75.75v15a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V4.5zm9.38 8.79l-3.38 3.38a.75.75 0 01-1.06-1.06l3.38-3.38-1.72-1.72a.75.75 0 011.06-1.06l2.25 2.25 4.5-4.5a.75.75 0 111.06 1.06l-5.03 5.03 2.97 2.97a.75.75 0 01-1.06 1.06l-3.5-3.5z" clipRule="evenodd" />
//   </svg>
// );

// const Index = () => {
//   const [userEmail, setUserEmail] = useState(null);
//   const navigate = useNavigate();

//   // Check session on mount and listen to auth changes
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession();
//       if (session?.user) setUserEmail(session.user.email);
//     };

//     getSession();

//     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//       if (session?.user) {
//         setUserEmail(session.user.email);
//       } else {
//         setUserEmail(null);
//       }
//     });

//     return () => listener?.subscription.unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     setUserEmail(null);
//     navigate('/');
//   };

  
//   return (
//     <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, white, #9ec8ff)' }}>
//       <nav style={{ backgroundColor: '#f9fafb', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151', textDecoration: 'none' }}>
//           StockAI
//         </Link>
//         <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
//           <Link to="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem' }}>Home</Link>
//           <Link to="/about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem' }}>About</Link>
//           <Link to="/contact" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem' }}>Contact</Link>

//           {userEmail ? (
//             <>
//               <span style={{ color: '#2563eb', fontWeight: '500', fontSize: '1rem' }}>{userEmail}</span>
//               <button
//                 onClick={handleLogout}
//                 style={{
//                   backgroundColor: '#ef4444',
//                   color: 'white',
//                   padding: '0.5rem 1rem',
//                   borderRadius: '0.375rem',
//                   border: 'none',
//                   fontSize: '1rem',
//                   cursor: 'pointer'
//                 }}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem' }}>Login</Link>
//               <Link to="/signup" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.375rem', fontWeight: '500', textDecoration: 'none', fontSize: '1rem' }}>Sign Up</Link>
//             </>
//           )}
//         </div>
//       </nav>

//       <main style={{ paddingTop: '4rem' }}>
//         {/* Hero Section */}
//         <section style={{ padding: '5rem 1rem' }}>
//           <div style={{ maxWidth: '7xl', margin: '0 auto', textAlign: 'center' }}>
//             <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1e293b', marginBottom: '1.5rem' }}>
//               Smart Stock Analysis with AI
//             </h1>
//             <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
//               Make informed investment decisions with our AI-powered stock analysis platform. Get real-time insights, predictions, and recommendations.
//             </p>
//             <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
//               <button
//                 onClick={() => {
//                   if (userEmail) {
//                     navigate('/home');
//                   } else {
//                     navigate('/login');
//                   }
//                 }}
//                 style={{
//                   backgroundColor: '#3b82f6',
//                   color: 'white',
//                   fontSize: '1rem',
//                   padding: '0.75rem 2rem',
//                   borderRadius: '0.375rem',
//                   fontWeight: 'medium',
//                   cursor: 'pointer',
//                   transition: 'background-color 0.2s ease-in-out',
//                 }}
//               >
//                 Get Started
//               </button>
//               <Link to="/login" style={{ border: '1px solid #3b82f6', color: '#3b82f6', backgroundColor: 'transparent', padding: '0.75rem 2rem', borderRadius: '0.375rem', fontWeight: 'medium', textDecoration: 'none', fontSize: '1rem' }}>
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section style={{ padding: '5rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
//           <div style={{ maxWidth: '7xl', margin: '0 auto' }}>
//             <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem' }}>
//               Why Choose StockAI?
//             </h2>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
//               <div style={{ padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '0.5rem', backgroundColor: 'white' }}>
//                 <SearchIcon />
//                 <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Smart Analysis</h3>
//                 <p style={{ color: '#4b5563' }}>AI algorithms analyze trends and provide accurate insights.</p>
//               </div>
//               <div style={{ padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '0.5rem', backgroundColor: 'white' }}>
//                 <TrendingUpIcon />
//                 <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Real-time Updates</h3>
//                 <p style={{ color: '#4b5563' }}>Get instant notifications on market changes and opportunities.</p>
//               </div>
//               <div style={{ padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '0.5rem', backgroundColor: 'white' }}>
//                 <ChartLineIcon />
//                 <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Predictive Insights</h3>
//                 <p style={{ color: '#4b5563' }}>AI-powered predictions help with data-driven investments.</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Index;




// Making new index

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient'; 

// Enhanced Icon components with inline styles
const SearchIcon = ({ iconColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={iconColor} strokeWidth="2" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const TrendingUpIcon = ({ iconColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={iconColor} strokeWidth="2" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 24 24">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
    <polyline points="16,7 22,7 22,13"/>
  </svg>
);

const BrainIcon = ({ iconColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={iconColor} strokeWidth="2" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 24 24">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);

const GlobeIcon = ({ iconColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={iconColor} strokeWidth="2" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ShieldIcon = ({ iconColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={iconColor} strokeWidth="2" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

const BarChartIcon = ({ iconColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={iconColor} strokeWidth="2" style={{ width: '2rem', height: '2rem' }} viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

const Index = () => {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) setUserEmail(session.user.email);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUserEmail(session.user.email);
      } else {
        setUserEmail(null);
      }
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserEmail(null);
    navigate('/');
  };

  const handleNavigation = (path) => {
    navigate(`/${path}`);
  };


  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #312e81)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(16px)',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <button
          onClick={() => handleNavigation('')}
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '2rem',
            height: '2rem',
            background: 'linear-gradient(to right, #60a5fa, #a855f7)',
            borderRadius: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <TrendingUpIcon iconColor="white" />
          </div>
          StockAI Pro
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {['home', 'features', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => handleNavigation(page)}
              style={{ color: '#d1d5db', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}

          {userEmail ? (
            <>
              <span style={{ color: '#3b82f6', fontWeight: '500' }}>{userEmail}</span>
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleNavigation('login')}
                style={{ color: '#d1d5db', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation('signup')}
                style={{
                  background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Start Free Trial
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(168, 85, 247, 0.2))'
        }}></div>
        <div style={{
          position: 'relative',
          maxWidth: '80rem',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(to right, #60a5fa, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '0.875rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Next-Generation AI Trading
            </span>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              Dominate Global Markets with{' '}
              <span style={{
                background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Agentic AI
              </span>
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#d1d5db',
              marginBottom: '2rem',
              maxWidth: '60rem',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Our autonomous AI agents analyze international markets 24/7, delivering real-time insights,
              predictive analytics, and automated trading strategies that outperform traditional methods.
            </p>
          </div>

          {/* Stock Market Visual */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}>
            <button
              onClick={() => {
                if (userEmail) {
                  handleNavigation('dashboard');
                } else {
                  handleNavigation('signup');
                }
              }}
              style={{
                background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                color: 'white',
                fontSize: '1.125rem',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transform: 'scale(1)',
                transition: 'all 0.2s',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.background = 'linear-gradient(to right, #1d4ed8, #6d28d9)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'linear-gradient(to right, #2563eb, #7c3aed)';
              }}
            >
              Start 14-Day Free Trial
            </button>
            <button
              onClick={() => handleNavigation('demo')}
              style={{
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Watch Live Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            color: '#9ca3af',
            fontSize: '0.875rem'
          }}>
            {[
              { icon: <ShieldIcon iconColor="#9ca3af" />, text: 'AI Compliant' },
              { icon: '🏆', text: '80% Accuracy Rate' },
              { icon: '⚡', text: 'Real-time Analysis' },
              { icon: '🌍', text: 'Global Markets' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {typeof item.icon === 'string' ? (
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                ) : (
                  item.icon
                )}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '5rem 1.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(8px)'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Why Professionals Should Choose StockAI Pro
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#d1d5db',
              maxWidth: '48rem',
              margin: '0 auto'
            }}>
              Advanced AI technology meets sophisticated trading strategies for unparalleled market advantage
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: BrainIcon, // Pass the component reference
                title: "Agentic AI Analysis",
                description: "Autonomous AI agents that learn, adapt, and execute trading strategies independently across multiple markets simultaneously."
              },
              {
                icon: GlobeIcon,
                title: "Global Market Coverage",
                description: "Track and analyze stocks from NYSE, NASDAQ, LSE, TSE, and 50+ international exchanges in real-time."
              },
              {
                icon: TrendingUpIcon,
                title: "Predictive Analytics",
                description: "Machine learning models predicted price movements with 85% accuracy."
              },
              {
                icon: BarChartIcon,
                title: "Risk Management",
                description: "Advanced algorithms automatically adjust portfolio risk based on market volatility and personal risk tolerance."
              },
              {
                icon: SearchIcon,
                title: "Sentiment Analysis",
                description: "Real-time analysis of news, social media, and earnings reports to gauge market sentiment and predict trends."
              },
              {
                icon: ShieldIcon,
                title: "Secure & Compliant",
                description: "Bank-grade security with full regulatory compliance across all major financial jurisdictions."
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon; // Get the component
              const isHovered = hoveredFeature === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    transition: 'all 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    style={{
                      color: isHovered ? '#a855f7' : '#60a5fa', // Change color based on hover state
                      marginBottom: '1.5rem',
                      transition: 'color 0.2s'
                    }}
                  >
                    <IconComponent iconColor={isHovered ? '#a855f7' : '#60a5fa'} /> {/* Pass color as prop */}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '1rem'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    color: '#d1d5db',
                    lineHeight: '1.6'
                  }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '3rem'
          }}>
            Trusted by Professional Traders 
          </h2>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              { number: "100+", label: "Active Traders" },
              // { number: "$2.5B+", label: "Assets Analyzed" },
              { number: "10+", label: "Countries" },
              { number: "80%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#60a5fa',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </div>
                <div style={{ color: '#d1d5db' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                quote: "StockAI Pro's agentic AI has transformed how I approach international markets. The accuracy is phenomenal.",
                author: "Syed Muhammad Rabi",
                role: "Stock Trader"
              },
              {
                quote: "Finally, an AI that understands global market correlations. My returns have increased 80% in 6 months.",
                author: "Ayaan Khan",
                role: "Student"
              },
              {
                quote: "The autonomous trading capabilities are game-changing. It's like having a team of analysts working 24/7.",
                author: "Abdul Wahab",
                role: "Independent Trader"
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                borderRadius: '0.75rem'
              }}>
                <p style={{
                  color: '#d1d5db',
                  marginBottom: '1rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.quote}"
                </p>
                <div style={{
                  color: 'white',
                  fontWeight: '600'
                }}>
                  {testimonial.author}
                </div>
                <div style={{
                  color: '#9ca3af',
                  fontSize: '0.875rem'
                }}>
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(168, 85, 247, 0.2))',
      }}>
        <div style={{
          maxWidth: '64rem',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Ready to Revolutionize Your Trading?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#d1d5db',
            marginBottom: '2rem'
          }}>
            Join thousands of professional traders who've already transformed their portfolios with StockAI Pro
          </p>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button 
            onClick={() => handleNavigation('login')}
            style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              color: 'white',
              fontSize: '1.125rem',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transform: 'scale(1)',
              transition: 'all 0.2s',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.background = 'linear-gradient(to right, #1d4ed8, #6d28d9)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.background = 'linear-gradient(to right, #2563eb, #7c3aed)';
            }}>
              Start Free Trial - No Credit Card Required
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              style={{
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                fontSize: '1.125rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Schedule Demo Call
            </button>
          </div>
          <p style={{
            color: '#9ca3af',
            fontSize: '0.875rem',
            marginTop: '1rem'
          }}>
            14-day free trial • Cancel anytime • No setup fees
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        // background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #312e81)',
        background: 'linear-gradient(to bottom right, #0f172a, #0e0e2c, #1e1e44)',
        padding: '3rem 1.5rem'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <button
                onClick={() => handleNavigation('home')}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  background: 'linear-gradient(to right, #60a5fa, #a855f7)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <TrendingUpIcon iconColor="white" />
                </div>
                StockAI Pro
              </button>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                Revolutionizing stock trading with cutting-edge Agentic AI.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Quick Links
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['home', 'features', 'pricing', 'contact', 'privacy policy'].map((link) => (
                  <li key={link} style={{ marginBottom: '0.5rem' }}>
                    <button
                      onClick={() => handleNavigation(link)}
                      style={{
                        color: '#d1d5db',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'white'}
                      onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Contact Us
              </h3>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                Email: bscs2107@pieas.edu.com, bscs2108@pieas.edu.com
              </p>
              <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
                Phone: +92 334-5181217
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem'
              }}>
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {/* Replace with actual social media icons/links */}
                <a href="#" style={{ color: '#d1d5db', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Facebook
                </a>
                <a href="#" style={{ color: '#d1d5db', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  Twitter
                </a>
                <a href="#" style={{ color: '#d1d5db', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '0.875rem'
          }}>
            &copy; {new Date().getFullYear()} StockAI Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;