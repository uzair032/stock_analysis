// // login.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import { supabase } from '../supabaseClient';

// const Login = () => {
//   return (
//     <div>
//       <nav style={{ backgroundColor: '#f9fafb', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151', textDecoration: 'none' }}>
//           StockAI
//         </Link>
//         <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
//           <Link to="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             Home
//           </Link>
//           <Link to="/about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             About
//           </Link>
//           <Link to="/contact" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             Contact
//           </Link>
//           <Link to="/login" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             Login
//           </Link>
//           <Link to="/signup" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.375rem', fontWeight: 'medium', textDecoration: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#1d4ed8' } }}>
//             Sign Up
//           </Link>
//         </div>
//       </nav>

//       <div style={{ minHeight: 'calc(100vh - 60px)', // Adjust for NavBar height (assuming 60px)
//                    display: 'flex',
//                    alignItems: 'center',
//                    justifyContent: 'center',
//                    background: 'linear-gradient(to bottom right, #dbeafe, #c4b5fd)' }}>
//         <div style={{ width: '400px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', borderRadius: '0.5rem', padding: '2rem' }}>
//           <div style={{ paddingBottom: '1rem' }}>
//             <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#1e293b' }}>Welcome back</h1>
//             <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
//               Enter your credentials to access your account
//             </p>
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//               <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#374151' }}>Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 style={{ borderWidth: '1px', borderColor: '#d1d5db', borderRadius: '0.375rem', padding: '0.5rem', fontSize: '0.875rem' }}
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//               <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#374151' }}>Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 style={{ borderWidth: '1px', borderColor: '#d1d5db', borderRadius: '0.375rem', padding: '0.5rem', fontSize: '0.875rem' }}
//               />
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//               <input type="checkbox" id="remember" className="rounded border-gray-300" style={{ width: '1rem', height: '1rem' }} />
//               <label htmlFor="remember" style={{ fontSize: '0.875rem', color: '#4b5563' }}>Remember me</label>
//             </div>
//             <button
//               className="w-full bg-blue-600 hover:bg-blue-700"
//               style={{
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 padding: '0.75rem',
//                 borderRadius: '0.375rem',
//                 fontWeight: 'medium',
//                 textAlign: 'center',
//                 textDecoration: 'none',
//                 display: 'block',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s ease-in-out',
//               }}
//             >
//               Sign in
//             </button>
//             <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
//               <span style={{ color: '#4b5563' }}>Don't have an account?</span>{" "}
//               <Link to="/signup" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
//                 Sign up
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };  

// export default Login;

// // login.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { supabase } from './supabaseClient';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       setError(null);
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: email,
//         password: password,
//       });

//       if (error) {
//         setError(error.message);
//       } else {
//         console.log('Logged in:', data);
//         navigate('/home'); // Redirect on successful login
//       }
//     } catch (err) {
//       setError('An unexpected error occurred.');
//       console.error('Login error:', err);
//     }
//   };

//   return (
//     <div>
//       <nav style={{ backgroundColor: '#f9fafb', padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151', textDecoration: 'none' }}>
//           StockAI
//         </Link>
//         <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
//           <Link to="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             Home
//           </Link>
//           <Link to="/about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             About
//           </Link>
//           <Link to="/contact" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             Contact
//           </Link>
//           <Link to="/login" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//             Login
//           </Link>
//           <Link to="/signup" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.375rem', fontWeight: 'medium', textDecoration: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#1d4ed8' } }}>
//             Sign Up
//           </Link>
//         </div>
//       </nav>

//       <div
//         style={{
//           minHeight: 'calc(100vh - 60px)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           background: 'linear-gradient(to bottom right, #dbeafe, #c4b5fd)',
//         }}
//       >
//         <div
//           style={{
//             width: '400px',
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
//             backgroundColor: 'white',
//             borderRadius: '0.5rem',
//             padding: '2rem',
//           }}
//         >
//           <div style={{ paddingBottom: '1rem' }}>
//             <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#1e293b' }}>
//               Welcome back
//             </h1>
//             <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>
//               Enter your credentials to access your account
//             </p>
//           </div>
//           <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//               <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#374151' }}>
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{ borderWidth: '1px', borderColor: '#d1d5db', borderRadius: '0.375rem', padding: '0.5rem', fontSize: '0.875rem' }}
//                 required
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
//               <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#374151' }}>
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={{ borderWidth: '1px', borderColor: '#d1d5db', borderRadius: '0.375rem', padding: '0.5rem', fontSize: '0.875rem' }}
//                 required
//               />
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//               <input type="checkbox" id="remember" className="rounded border-gray-300" style={{ width: '1rem', height: '1rem' }} />
//               <label htmlFor="remember" style={{ fontSize: '0.875rem', color: '#4b5563' }}>Remember me</label>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700"
//               style={{
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 padding: '0.75rem',
//                 borderRadius: '0.375rem',
//                 fontWeight: 'medium',
//                 textAlign: 'center',
//                 textDecoration: 'none',
//                 display: 'block',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s ease-in-out',
//               }}
//             >
//               Sign in
//             </button>
//             <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
//               <span style={{ color: '#4b5563' }}>Don't have an account?</span>{' '}
//               <Link to="/signup" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
//                 Sign up
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// New working theme

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        navigate('/home');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #312e81)',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '1rem',
          backdropFilter: 'blur(10px)',
          padding: '2rem',
          color: 'white',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)'
        }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center' }}>
            Welcome Back
          </h1>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#cbd5e1' }}>
            Enter your credentials to sign in
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {error && <p style={{ color: 'red', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}

            <div>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="password" style={labelStyle}>Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="remember" style={{ width: '1rem', height: '1rem' }} />
              <label htmlFor="remember" style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>Remember me</label>
            </div>

            <button type="submit" style={buttonStyle}>
              Sign In
            </button>

            <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>
              <span style={{ color: '#cbd5e1' }}>Don't have an account?</span>{' '}
              <Link to="/signup" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: '600',
  color: '#d1d5db'
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '0.5rem',
  border: '1px solid #4b5563',
  backgroundColor: '#0f172a',
  color: 'white',
  fontSize: '1rem'
};

const buttonStyle = {
  background: 'linear-gradient(to right, #2563eb, #7c3aed)',
  color: 'white',
  padding: '0.75rem',
  borderRadius: '0.75rem',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer'
};

export default Login;
