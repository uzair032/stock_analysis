// import React from 'react';

// function SpecificCountryStocks() {
//   return (
//     <div>
//       <h1>Specific Country Stocks Page</h1>
//       <p>This page will display stocks for a specific country.</p>
//       {/* Add your specific country stock data logic here */}
//     </div>
//   );
// }

// export default SpecificCountryStocks;
// import React, { useState } from 'react';
// import stockData from './stockData.json';
// import axios from 'axios';

// function SpecificCountryStocks() {
//   const [country, setCountry] = useState('');
//   const [companyStock, setCompanyStock] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [analysisType, setAnalysisType] = useState('current');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleCountryChange = (e) => {
//     setCountry(e.target.value);
//     setCompanyStock('');
//     setResult(null);
//   };

//   const handleAnalysis = async () => {
//     if (!country || !companyStock) {
//       if (analysisType === 'current' && (!strategy || !amount)) {
//         alert("Please select a country, enter a company stock symbol, strategy and amount.");
//         return;
//       } else if (analysisType === 'weekly') {
//         alert('Please select a country and enter a company stock symbol.');
//         return;
//       }
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const countrySymbol = getCountrySymbol(country);
//       let response;

//       if (analysisType === 'current') {
//         response = await axios.post('http://localhost:5000/current-analysis-national', {
//           company_stock: companyStock,
//           strategy: strategy,
//           amount: parseFloat(amount),
//           country_symbol: countrySymbol, // Pass country symbol
//         });
//       } else if (analysisType === 'weekly') {
//         response = await axios.post('http://localhost:5000/weekly-analysis-national', {
//           company_stock: companyStock,
//           country_symbol: countrySymbol, // Pass country symbol
//         });
//       }

//       setResult(response.data.analysis);
//     } catch (err) {
//       console.error("Error analyzing stock:", err);
//       setError(err.message || "An error occurred during analysis.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getCountrySymbol = (selectedCountry) => {
//     const countryData = stockData.StockExchanges.find(item => item.Country === selectedCountry);
//     return countryData ? countryData.Symbol : '';
//   };

//   return (
//     <div>
//       <h1>Specific Country Stocks Analysis</h1>
//       <div>
//         <label>Country:</label>
//         <select value={country} onChange={handleCountryChange}>
//           <option value="">Select a country</option>
//           {stockData.StockExchanges.map(item => (
//             <option key={item.Country} value={item.Country}>
//               {item.Country}
//             </option>
//           ))}
//         </select>
//       </div>

//       {country && (
//         <div>
//           <label>Company Stock Symbol:</label>
//           <input
//             type="text"
//             value={companyStock}
//             onChange={(e) => setCompanyStock(e.target.value)}
//             placeholder="Enter company stock symbol"
//           />
//         </div>
//       )}

//       {country && (
//         <div>
//           <label>Analysis Type:</label>
//           <select value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
//             <option value="current">Current Analysis</option>
//             <option value="weekly">Weekly Analysis</option>
//           </select>
//         </div>
//       )}

//       {country && analysisType === 'current' && (
//         <div>
//           <label>Strategy:</label>
//           <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
//             <option value="">Select Strategy</option>
//             <option value="buy">Buy</option>
//             <option value="sell">Sell</option>
//           </select>
//           <label>Amount:</label>
//           <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         </div>
//       )}

//       {country && companyStock && (
//         <button onClick={handleAnalysis} disabled={loading}>
//           {loading ? "Analyzing..." : "Analyze Stock"}
//         </button>
//       )}

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {result && (
//         <div>
//           <h2>Analysis Result:</h2>
//           <pre>{result}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SpecificCountryStocks;

// import React, { useState } from 'react';
// import stockData from './stockData.json';
// import axios from 'axios';
// import StockAnalysisLayout from './layout/StockAnalysislayout'; // Import the layout

// function SpecificCountryStocks() {
//   const [country, setCountry] = useState('');
//   const [companyStock, setCompanyStock] = useState('');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [analysisType, setAnalysisType] = useState('current');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleCountryChange = (e) => {
//     setCountry(e.target.value);
//     setCompanyStock('');
//     setResult(null);
//   };

//   const handleAnalysis = async () => {
//     if (!country || !companyStock) {
//       const alertMessage = analysisType === 'current'
//         ? "Please select a country and enter a company stock symbol."
//         : "Please select a country and enter a company stock symbol.";
//       alert(alertMessage);
//       return;
//     }

//     if (analysisType === 'current' && (!strategy || !amount)) {
//       alert("Please select a strategy and enter an amount for current analysis.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const countrySymbol = getCountrySymbol(country);
//       let response;

//       if (analysisType === 'current') {
//         response = await axios.post('http://localhost:5000/current-analysis-national', {
//           company_stock: companyStock,
//           strategy: strategy,
//           amount: parseFloat(amount),
//           country_symbol: countrySymbol,
//         });
//       } else if (analysisType === 'weekly') {
//         response = await axios.post('http://localhost:5000/weekly-analysis-national', {
//           company_stock: companyStock,
//           country_symbol: countrySymbol,
//         });
//       }

//       setResult(response.data.analysis);
//     } catch (err) {
//       console.error("Error analyzing stock:", err);
//       setError(err.message || "An error occurred during analysis.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getCountrySymbol = (selectedCountry) => {
//     const countryData = stockData.StockExchanges.find(item => item.Country === selectedCountry);
//     return countryData ? countryData.Symbol : '';
//   };

//   return (
//     <StockAnalysisLayout title="Specific Country Stock Analysis">
//       <div style={styles.formGroup}>
//         <label style={styles.label}>Country:</label>
//         <select style={styles.select} value={country} onChange={handleCountryChange}>
//           <option value="">Select a country</option>
//           {stockData.StockExchanges.map(item => (
//             <option key={item.Country} value={item.Country}>
//               {item.Country}
//             </option>
//           ))}
//         </select>
//       </div>

//       {country && (
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Company Stock Symbol:</label>
//           <input
//             type="text"
//             style={styles.input}
//             value={companyStock}
//             onChange={(e) => setCompanyStock(e.target.value)}
//             placeholder="Enter company stock symbol"
//           />
//         </div>
//       )}

//       {country && (
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Analysis Type:</label>
//           <select style={styles.select} value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
//             <option value="current">Current Analysis</option>
//             <option value="weekly">Weekly Analysis</option>
//           </select>
//         </div>
//       )}

//       {country && analysisType === 'current' && (
//         <div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Strategy:</label>
//             <select style={styles.select} value={strategy} onChange={(e) => setStrategy(e.target.value)}>
//               <option value="">Select Strategy</option>
//               <option value="buy">Buy</option>
//               <option value="sell">Sell</option>
//             </select>
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Amount:</label>
//             <input type="number" style={styles.input} value={amount} onChange={(e) => setAmount(e.target.value)} />
//           </div>
//         </div>
//       )}

//       {country && companyStock && (
//         <button style={styles.button} onClick={handleAnalysis} disabled={loading}>
//           {loading ? "Analyzing..." : "Analyze Stock"}
//         </button>
//       )}

//       {error && <p style={styles.error}>{error}</p>}

//       {result && (
//         <div style={styles.resultContainer}>
//           <h2 style={styles.resultTitle}>Analysis Result:</h2>
//           <pre style={styles.resultText}>{result}</pre>
//         </div>
//       )}
//     </StockAnalysisLayout>
//   );
// }

// const styles = {
//   formGroup: {
//     marginBottom: '1.5rem',
//     width: '100%',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '0.5rem',
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   input: {
//     width: '100%',
//     padding: '0.75rem',
//     borderRadius: '0.5rem',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//   },
//   select: {
//     width: '100%',
//     padding: '0.75rem',
//     borderRadius: '0.5rem',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//     appearance: 'none',
//     backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="currentColor" viewBox="0 0 24 24" height="16" width="16"><path d="M7 10l5 5 5-5z"/></svg>')`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPositionX: 'calc(100% - 0.75rem)',
//     backgroundPositionY: '50%',
//   },
//   button: {
//     backgroundColor: '#28a745', // Different primary color for national stocks
//     color: 'white',
//     padding: '0.8rem 1.5rem',
//     borderRadius: '0.5rem',
//     border: 'none',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s ease-in-out',
//     '&:hover': {
//       backgroundColor: '#1e7e34',
//     },
//     '&:disabled': {
//       backgroundColor: '#ccc',
//       cursor: 'not-allowed',
//     },
//   },
//   error: {
//     color: 'red',
//     marginTop: '1rem',
//   },
//   resultContainer: {
//     marginTop: '2rem',
//     padding: '1.5rem',
//     borderRadius: '0.5rem',
//     backgroundColor: '#f0f8ff', // Light blue for national results
//     border: '1px solid #add8e6',
//   },
//   resultTitle: {
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     marginBottom: '0.75rem',
//     color: '#333',
//   },
//   resultText: {
//     whiteSpace: 'pre-wrap',
//     fontFamily: 'monospace',
//     fontSize: '0.9rem',
//     color: '#222',
//   },
// };

// export default SpecificCountryStocks;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { supabase } from './supabaseClient';
// import stockData from './stockData.json';
// import StockAnalysisLayout from './layout/StockAnalysislayout';

// const SpecificCountryStocks = () => {
//   const [country, setCountry] = useState('');
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');
//   const [analysisType, setAnalysisType] = useState('current');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userEmail, setUserEmail] = useState('');

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       if (error || !data?.session) {
//         console.error('Error fetching session or not logged in:', error);
//         return;
//       }
//       setUserEmail(data.session.user.email);
//     };

//     fetchUser();
//   }, []);

//   const getCountrySymbol = (selectedCountry) => {
//     const countryData = stockData.StockExchanges.find(item => item.Country === selectedCountry);
//     return countryData ? countryData.Symbol : '';
//   };

//   const handleAnalysis = async () => {
//     if (!userEmail) {
//       alert("User not authenticated. Please log in.");
//       return;
//     }

//     if (!country || !stockSymbol) {
//       alert("Please select a country and stock symbol.");
//       return;
//     }

//     if (analysisType === 'current' && (!strategy || !amount)) {
//       alert("Please provide strategy and amount for current analysis.");
//       return;
//     }

//     const countrySymbol = getCountrySymbol(country);
//     const apiUrl = analysisType === 'current'
//       ? 'http://localhost:5000/current-analysis-national'
//       : 'http://localhost:5000/weekly-analysis-national';

//     const requestData = analysisType === 'current'
//       ? { company_stock: stockSymbol, strategy, amount: parseFloat(amount), country_symbol: countrySymbol }
//       : { company_stock: stockSymbol, country_symbol: countrySymbol };

//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(apiUrl, requestData);
//       const analysisResult = response.data.analysis;
//       setResult(analysisResult);

//       const payload = {
//         email: userEmail,
//         stock_symbol: stockSymbol,
//         analysis_type: analysisType,
//         strategy: analysisType === 'current' ? strategy : null,
//         amount: analysisType === 'current' ? parseFloat(amount) : null,
//         result: analysisResult,
//         country: country,
//         inserted_at: new Date().toISOString()
//       };

//       const { error: insertError } = await supabase
//         .from('stock_country_sessions')
//         .insert([payload]);

//       if (insertError) {
//         console.error("Supabase Insert Error:", insertError);
//       } else {
//         console.log("✅ Data saved to Supabase.");
//       }

//     } catch (err) {
//       console.error("❌ API Error:", err);
//       setError(err.message || "An error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StockAnalysisLayout title="Specific Country Stock Analysis">
//       <div style={styles.formGroup}>
//         <label style={styles.label}>Country:</label>
//         <select style={styles.select} value={country} onChange={(e) => setCountry(e.target.value)}>
//           <option value="">Select a country</option>
//           {stockData.StockExchanges.map(item => (
//             <option key={item.Country} value={item.Country}>{item.Country}</option>
//           ))}
//         </select>
//       </div>

//       <div style={styles.formGroup}>
//         <label style={styles.label}>Stock Symbol:</label>
//         <input
//           type="text"
//           style={styles.input}
//           value={stockSymbol}
//           onChange={(e) => setStockSymbol(e.target.value)}
//         />
//       </div>

//       {analysisType === 'current' && (
//         <>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Strategy:</label>
//             <select style={styles.select} value={strategy} onChange={(e) => setStrategy(e.target.value)}>
//               <option value="">Select Strategy</option>
//               <option value="buy">Buy</option>
//               <option value="sell">Sell</option>
//             </select>
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Amount:</label>
//             <input
//               type="number"
//               style={styles.input}
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>
//         </>
//       )}

//       <div style={styles.formGroup}>
//         <label style={styles.label}>Analysis Type:</label>
//         <select style={styles.select} value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
//           <option value="current">Current Analysis</option>
//           <option value="weekly">Weekly Analysis</option>
//         </select>
//       </div>

//       <button style={styles.button} onClick={handleAnalysis} disabled={loading || !userEmail}>
//         {loading ? "Analyzing..." : "Run Analysis"}
//       </button>

//       {error && <p style={styles.error}>{error}</p>}
//       {result && (
//         <div style={styles.resultContainer}>
//           <h2 style={styles.resultTitle}>Analysis Result:</h2>
//           <pre style={styles.resultText}>{result}</pre>
//         </div>
//       )}
//     </StockAnalysisLayout>
//   );
// };

// const styles = {
//   formGroup: {
//     marginBottom: '1.5rem',
//     width: '100%',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '0.5rem',
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   input: {
//     width: '100%',
//     padding: '0.75rem',
//     borderRadius: '0.5rem',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//   },
//   select: {
//     width: '100%',
//     padding: '0.75rem',
//     borderRadius: '0.5rem',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//     appearance: 'none',
//     backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="currentColor" viewBox="0 0 24 24" height="16" width="16"><path d="M7 10l5 5 5-5z"/></svg>')`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPositionX: 'calc(100% - 0.75rem)',
//     backgroundPositionY: '50%',
//   },
//   button: {
//     backgroundColor: '#28a745',
//     color: 'white',
//     padding: '0.8rem 1.5rem',
//     borderRadius: '0.5rem',
//     border: 'none',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//   },
//   error: {
//     color: 'red',
//     marginTop: '1rem',
//   },
//   resultContainer: {
//     marginTop: '2rem',
//     padding: '1.5rem',
//     borderRadius: '0.5rem',
//     backgroundColor: '#f0f8ff',
//     border: '1px solid #add8e6',
//   },
//   resultTitle: {
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     marginBottom: '0.75rem',
//     color: '#333',
//   },
//   resultText: {
//     whiteSpace: 'pre-wrap',
//     fontFamily: 'monospace',
//     fontSize: '0.9rem',
//     color: '#222',
//   },
// };

// export default SpecificCountryStocks;

// New theme with same styling

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { supabase } from './supabaseClient';
import stockData from './stockData.json';
import StockAnalysisLayout from './layout/StockAnalysislayout';

const SpecificCountryStocks = () => {
  const [country, setCountry] = useState('');
  const [stockSymbol, setStockSymbol] = useState('');
  const [strategy, setStrategy] = useState('');
  const [amount, setAmount] = useState('');
  const [analysisType, setAnalysisType] = useState('current');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data?.session) return;
      setUserEmail(data.session.user.email);
    };
    fetchUser();
  }, []);

  const getCountrySymbol = (selectedCountry) => {
    const countryData = stockData.StockExchanges.find(item => item.Country === selectedCountry);
    return countryData ? countryData.Symbol : '';
  };

  const handleAnalysis = async () => {
    if (!userEmail) return alert("Please log in.");
    if (!country || !stockSymbol) return alert("Select a country and stock symbol.");
    if (analysisType === 'current' && (!strategy || !amount)) return alert("Provide strategy and amount.");

    const countrySymbol = getCountrySymbol(country);
    const apiUrl = analysisType === 'current'
      ? 'http://localhost:5000/current-analysis-national'
      : 'http://localhost:5000/weekly-analysis-national';

    const requestData = analysisType === 'current'
      ? { company_stock: stockSymbol, strategy, amount: parseFloat(amount), country_symbol: countrySymbol }
      : { company_stock: stockSymbol, country_symbol: countrySymbol };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(apiUrl, requestData);
      setResult(response.data.analysis);

      const { error: insertError } = await supabase
        .from('stock_country_sessions')
        .insert([{
          email: userEmail,
          stock_symbol: stockSymbol,
          analysis_type: analysisType,
          strategy: analysisType === 'current' ? strategy : null,
          amount: analysisType === 'current' ? parseFloat(amount) : null,
          result: response.data.analysis,
          country,
          inserted_at: new Date().toISOString()
        }]);

      if (insertError) console.error("Insert Error:", insertError);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #312e81)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '60rem', margin: '0 auto', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
          Analyze Country-Specific Stocks
        </h1>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '1rem',
          backdropFilter: 'blur(8px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <div>
            <label style={labelStyle}>Country</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)} style={inputStyle}>
              <option value="">Select a country</option>
              {stockData.StockExchanges.map(item => (
                <option key={item.Country} value={item.Country}>{item.Country}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Stock Symbol</label>
            <input
              type="text"
              value={stockSymbol}
              onChange={(e) => setStockSymbol(e.target.value)}
              style={inputStyle}
            />
          </div>

          {analysisType === 'current' && (
            <>
              <div>
                <label style={labelStyle}>Strategy</label>
                <select value={strategy} onChange={(e) => setStrategy(e.target.value)} style={inputStyle}>
                  <option value="">Select Strategy</option>
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </>
          )}

          <div>
            <label style={labelStyle}>Analysis Type</label>
            <select value={analysisType} onChange={(e) => setAnalysisType(e.target.value)} style={inputStyle}>
              <option value="current">Current Analysis</option>
              <option value="weekly">Weekly Analysis</option>
            </select>
          </div>

          <button onClick={handleAnalysis} disabled={loading || !userEmail} style={buttonStyle}>
            {loading ? 'Analyzing...' : 'Run Analysis'}
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {result && (
            <div style={{
              marginTop: '2rem',
              backgroundColor: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '1.5rem',
              borderRadius: '1rem'
            }}>
              <h2 style={{ fontSize: '1.5rem', color: '#60a5fa', marginBottom: '1rem' }}>📊 Analysis Result</h2>
              <pre style={{ whiteSpace: 'pre-wrap', fontSize: '1rem', color: '#d1d5db' }}>{result}</pre>
            </div>
          )}
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
  padding: '0.8rem 1.5rem',
  borderRadius: '0.75rem',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: '600',
  cursor: 'pointer',
  marginTop: '1rem'
};

export default SpecificCountryStocks;

