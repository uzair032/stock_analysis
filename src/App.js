// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Index from "./components/index.js";
// import Login from "./components/login.js";
// import Signup from "./components/signup.js";
// import NotFound from "./components/NotFound.js";
// import HomePage from './components/Homepage.js';
// import InternationalStocks from './components/Internationalstocks.js';
// import SpecificCountryStocks from './components/SpecificCountrystocks.js';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Index />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/international" element={<InternationalStocks />} />
//         <Route path="/country" element={<SpecificCountryStocks />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Index from "./components/index.js";
// import Login from "./components/login.js";
// import Signup from "./components/signup.js";
// import NotFound from "./components/NotFound.js";
// import HomePage from './components/Homepage.js';
// import InternationalStocks from './components/Internationalstocks.js';
// import SpecificCountryStocks from './components/SpecificCountrystocks.js';
// import StockContext from './components/StockContext.js';

// import Demo from './components/Demo.js';

// import { AuthProvider } from './contexts/AuthProvider';
// import ProtectedRoute from './routes/ProtectedRoute';

// function App() {
//   const [topStocks, setTopStocks] = useState([]);

//   useEffect(() => {
//     const fetchStocks = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/top-stocks');
//         const data = await response.json();
//         setTopStocks(data.slice(0, 10));
//       } catch (error) {
//         console.error('Failed to fetch top stocks:', error);
//       }
//     };

//     fetchStocks();
//     const interval = setInterval(fetchStocks, 5 * 60 * 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           {/* Public Routes */}
//           {/* <Route path="/" element={<StockSessionTest />} /> */}
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/demo" element={<Demo />} />
//           <Route path="*" element={<NotFound />} />

//           {/* Protected Routes */}
//           <Route
//             path="/home"
//             element={
//               <ProtectedRoute>
//                 <HomePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/international"
//             element={
//               <ProtectedRoute>
//                 <InternationalStocks />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/country"
//             element={
//               <ProtectedRoute>
//                 <SpecificCountryStocks />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from "./components/index.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import NotFound from "./components/NotFound.js";
import HomePage from './components/Homepage.js';
import InternationalStocks from './components/Internationalstocks.js';
import SpecificCountryStocks from './components/SpecificCountrystocks.js';
import StockContext from './components/StockContext.js'; // ✅ Your global context

import Demo from './components/Demo.js';

import { AuthProvider } from './contexts/AuthProvider';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [topStocks, setTopStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // const response = await fetch('http://localhost:5000/top-stocks');
        // for locally add this in package.json file "proxy": "http://localhost:5000",
        const response = await fetch('https://muzair-010-stock_analysis.hf.space/top-stocks');
        const data = await response.json();
        setTopStocks(data.slice(0, 10));
      } catch (error) {
        console.error('Failed to fetch top stocks:', error);
      }
    };

    fetchStocks(); // Initial fetch

    const interval = setInterval(fetchStocks, 5 * 60 * 1000); // Auto-refresh every 5 minutes
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <Router>
      <AuthProvider>
        <StockContext.Provider value={{ topStocks, setTopStocks }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="*" element={<NotFound />} />

            {/* Protected Routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/international"
              element={
                <ProtectedRoute>
                  <InternationalStocks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/country"
              element={
                <ProtectedRoute>
                  <SpecificCountryStocks />
                </ProtectedRoute>
              }
            />
          </Routes>
        </StockContext.Provider>
      </AuthProvider>
    </Router>
  );
}

export default App;


