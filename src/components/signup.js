// import React from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   return (
//     <div>
//         <nav style={{ backgroundColor: '#f9fafb', padding: '1rem 1rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151', textDecoration: 'none' }}>
//             StockAI
//           </Link>
//           <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
//             <Link to="/" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//               Home
//             </Link>
//             <Link to="/about" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//               About
//             </Link>
//             <Link to="/contact" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//               Contact
//             </Link>
//             <Link to="/login" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1rem', '&:hover': { color: '#1e293b' } }}>
//               Login
//             </Link>
//             <Link to="/signup" style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.375rem', fontWeight: 'medium', textDecoration: 'none', fontSize: '1rem', '&:hover': { backgroundColor: '#1d4ed8' } }}>
//               Sign Up
//             </Link>
//           </div>
//         </nav>

//         <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #dbeafe, #c4b5fd)' }}>
//         <div style={{
//           width: '400px',
//           backgroundColor: 'white',
//           boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.15)', // More pronounced shadow
//           borderRadius: '0.75rem', // More rounded corners
//           padding: '2rem',
//         }}>
//           <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}> {/* Added a subtle divider */}
//             <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>Create Account</h1> {/* Larger title */}
//             <p style={{ color: '#6b7280', fontSize: '1rem' }}> {/* Slightly darker and larger description */}
//               Get started with StockAI and unlock smart investment insights.
//             </p>
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem' }}> {/* Increased spacing */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}> {/* Reduced label spacing */}
//               <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Full Name</label>
//               <input
//                 id="name"
//                 placeholder="John Doe"
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem', // More rounded input
//                   padding: '0.75rem', // Increased input padding
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
//               <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem',
//                   padding: '0.75rem',
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
//               <label htmlFor="password" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem',
//                   padding: '0.75rem',
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
//               <label htmlFor="confirm" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Confirm Password</label>
//               <input
//                 id="confirm"
//                 type="password"
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem',
//                   padding: '0.75rem',
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//               />
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}> {/* Increased checkbox spacing */}
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="rounded border-gray-300 focus:ring-blue-500" // Added focus style
//                 style={{ width: '1.1rem', height: '1.1rem' }} // Slightly larger checkbox
//               />
//               <label htmlFor="terms" style={{ fontSize: '0.875rem', color: '#6b7280' }}> {/* Slightly darker label */}
//                 I agree to the{" "}
//                 <Link to="/terms" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 'medium' }}>
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link to="/privacy" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 'medium' }}>
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>
//             <button
//               className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2" // Added focus styles
//               style={{
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 padding: '0.875rem', // Increased button padding
//                 borderRadius: '0.5rem', // Rounded button corners
//                 fontWeight: 'semibold', // More prominent text
//                 textAlign: 'center',
//                 textDecoration: 'none',
//                 display: 'block',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out', // Added transition
//                 '&:focus': {
//                   outline: 'none',
//                 },
//               }}
//             >
//               Create Account
//             </button>
//             <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6b7280', marginTop: '0.75rem' }}> {/* Adjusted spacing and color */}
//               <span>Already have an account?</span>{" "}
//               <Link to="/login" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 'medium' }}>
//                 Sign in
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// Previous working

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { supabase } from './supabaseClient';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!name) {
//       setError('Please enter your full name.');
//       return;
//     }

//     if (!email) {
//       setError('Please enter your email address.');
//       return;
//     }

//     if (!password) {
//       setError('Please enter a password.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     if (!agreeTerms) {
//       setError('Please agree to the Terms of Service and Privacy Policy.');
//       return;
//     }

//     try {
//       setError(null);
//       const { data, error } = await supabase.auth.signUp({
//         email: email,
//         password: password,
//         options: {
//           data: {
//             full_name: name, // Store additional user data in the 'users' table (if you have it set up)
//           },
//         },
//       });

//       if (error) {
//         setError(error.message);
//       } else {
//         console.log('Signed up:', data);
//         // Optionally, redirect the user to a verification page or dashboard
//         navigate('/login?message=signup_success'); // Example: Redirect with a success message
//       }
//     } catch (err) {
//       setError('An unexpected error occurred during signup.');
//       console.error('Signup error:', err);
//     }
//   };

//   return (
//     <div>
//       <nav style={{ backgroundColor: '#f9fafb', padding: '1rem 1rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, #dbeafe, #c4b5fd)' }}>
//         <div style={{
//           width: '400px',
//           backgroundColor: 'white',
//           boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.15)',
//           borderRadius: '0.75rem',
//           padding: '2rem',
//         }}>
//           <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
//             <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e293b' }}>Create Account</h1>
//             <p style={{ color: '#6b7280', fontSize: '1rem' }}>
//               Get started with StockAI and unlock smart investment insights.
//             </p>
//           </div>
//           <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.5rem' }}>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
//               <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Full Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 placeholder="John Doe"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem',
//                   padding: '0.75rem',
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//                 required
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
//               <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem',
//                   padding: '0.75rem',
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//                 required
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
//               <label htmlFor="password" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem',
//                   padding: '0.75rem',
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//                 required
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
//               <label htmlFor="confirm" style={{ fontSize: '0.9rem', fontWeight: 'medium', color: '#374151' }}>Confirm Password</label>
//               <input
//                 id="confirm"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 style={{
//                   border: '1px solid #d1d5db',
//                   borderRadius: '0.5rem',
//                   padding: '0.75rem',
//                   fontSize: '0.9rem',
//                   color: '#374151',
//                 }}
//                 required
//               />
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="rounded border-gray-300 focus:ring-blue-500"
//                 style={{ width: '1.1rem', height: '1.1rem' }}
//                 checked={agreeTerms}
//                 onChange={(e) => setAgreeTerms(e.target.checked)}
//                 required
//               />
//               <label htmlFor="terms" style={{ fontSize: '0.875rem', color: '#6b7280' }}>
//                 I agree to the{" "}
//                 <Link to="/terms" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 'medium' }}>
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link to="/privacy" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 'medium' }}>
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2"
//               style={{
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 padding: '0.875rem',
//                 borderRadius: '0.5rem',
//                 fontWeight: 'semibold',
//                 textAlign: 'center',
//                 textDecoration: 'none',
//                 display: 'block',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//                 '&:focus': {
//                   outline: 'none',
//                 },
//               }}
//             >
//               Create Account
//             </button>
//             <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#6b7280', marginTop: '0.75rem' }}>
//               <span>Already have an account?</span>{" "}
//               <Link to="/login" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: 'medium' }}>
//                 Sign in
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// New working

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || password !== confirmPassword || !agreeTerms) {
      setError('Please complete all fields correctly.');
      return;
    }

    try {
      setError(null);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } },
      });

      if (error) {
        setError(error.message);
      } else {
        navigate('/login?message=signup_success');
      }
    } catch (err) {
      setError('An unexpected error occurred during signup.');
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
            Create Account
          </h1>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#cbd5e1' }}>
            Join StockAI and unlock smart investment insights.
          </p>

          <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {error && <p style={{ color: 'red', fontSize: '0.9rem', textAlign: 'center' }}>{error}</p>}

            <div>
              <label htmlFor="name" style={labelStyle}>Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

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

            <div>
              <label htmlFor="confirm" style={labelStyle}>Confirm Password</label>
              <input
                id="confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <input
                type="checkbox"
                id="terms"
                style={{ width: '1.1rem', height: '1.1rem' }}
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              <label htmlFor="terms" style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                I agree to the{' '}
                <Link to="/terms" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: '500' }}>Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" style={{ color: '#3b82f6', textDecoration: 'underline', fontWeight: '500' }}>Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" style={buttonStyle}>
              Create Account
            </button>

            <div style={{ textAlign: 'center', fontSize: '0.875rem', color: '#cbd5e1' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Sign in</Link>
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

export default Signup;
