// import React, { useState } from 'react';
// import axios from 'axios';

// function InternationalStocks() {
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');
//   const [analysisType, setAnalysisType] = useState('current');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleAnalysis = async () => {
//     console.log("Sending Request to Backend");
//     setLoading(true);
//     setError(null); // Reset error state

//     if (analysisType === 'current') {
//       if (!stockSymbol || !strategy || !amount) {
//         alert("Please fill all fields");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.post('http://localhost:5000/current-analysis', {
//           company_stock: stockSymbol,
//           strategy: strategy,
//           amount: parseFloat(amount)
//         });
//         console.log("Received Response:", response.data);
//         setResult(response.data.analysis);
//       } catch (err) {
//         console.error("Error Occurred:", err);
//         setError(err.message || "An error occurred");
//       }
//     } else if (analysisType === 'weekly') {
//       if (!stockSymbol) {
//         alert("Please enter stock symbol");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.post('http://localhost:5000/weekly-analysis', {
//           company_stock: stockSymbol
//         });
//         console.log("Received Response:", response.data);
//         setResult(response.data.analysis);
//       } catch (err) {
//         console.error("Error Occurred:", err);
//         setError(err.message || "An error occurred");
//       }
//     }
//     setLoading(false); // Set loading to false after request is done
//   };

//   return (
//     <div className="App">
//       <h1>Stock Analysis App (International)</h1>
//       <div>
//         <label>Stock Symbol:</label>
//         <input type="text" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)} />
//       </div>
//       {analysisType === 'current' && (
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
//       <div>
//         <label>Analysis Type:</label>
//         <select value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
//           <option value="current">Current Analysis</option>
//           <option value="weekly">Weekly Analysis</option>
//         </select>
//       </div>
//       <button onClick={handleAnalysis} disabled={loading}>
//         {loading ? "Loading..." : "Run Analysis"}
//       </button>
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

// export default InternationalStocks;

// import React, { useState } from 'react';
// import axios from 'axios';
// import StockAnalysisLayout from './layout/StockAnalysislayout'; // Import the layout

// const InternationalStocks = () => {
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');
//   const [analysisType, setAnalysisType] = useState('current');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleAnalysis = async () => {
//     console.log("Sending Request to Backend");
//     setLoading(true);
//     setError(null);

//     const apiUrl = analysisType === 'current'
//       ? 'http://localhost:5000/current-analysis'
//       : 'http://localhost:5000/weekly-analysis';

//     const requestData = analysisType === 'current'
//       ? { company_stock: stockSymbol, strategy, amount: parseFloat(amount) }
//       : { company_stock: stockSymbol };

//     if ((analysisType === 'current' && (!stockSymbol || !strategy || !amount)) ||
//         (analysisType === 'weekly' && !stockSymbol)) {
//       alert("Please fill all required fields.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(apiUrl, requestData);
//       console.log("Received Response:", response.data);
//       setResult(response.data.analysis);
//     } catch (err) {
//       console.error("Error Occurred:", err);
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StockAnalysisLayout title="International Stock Analysis">
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
//             <input
//               type="number"
//               style={styles.input}
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//           </div>
//         </div>
//       )}
//       <div style={styles.formGroup}>
//         <label style={styles.label}>Analysis Type:</label>
//         <select style={styles.select} value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
//           <option value="current">Current Analysis</option>
//           <option value="weekly">Weekly Analysis</option>
//         </select>
//       </div>
//       <button style={styles.button} onClick={handleAnalysis} disabled={loading}>
//         {loading ? "Loading..." : "Run Analysis"}
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
//     appearance: 'none', // Remove default arrow
//     backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="currentColor" viewBox="0 0 24 24" height="16" width="16"><path d="M7 10l5 5 5-5z"/></svg>')`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPositionX: 'calc(100% - 0.75rem)',
//     backgroundPositionY: '50%',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     color: 'white',
//     padding: '0.8rem 1.5rem',
//     borderRadius: '0.5rem',
//     border: 'none',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s ease-in-out',
//     '&:hover': {
//       backgroundColor: '#0056b3',
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
//     backgroundColor: '#e9ecef',
//     border: '1px solid #ced4da',
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

// export default InternationalStocks;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StockAnalysisLayout from './layout/StockAnalysislayout';
// import { supabase } from './supabaseClient';

// const InternationalStocks = () => {
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');
//   const [analysisType, setAnalysisType] = useState('current');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userEmail, setUserEmail] = useState('');
//   const [sessionId, setSessionId] = useState('');

//   // Fetch user email and session id on mount
//   useEffect(() => {
//     const fetchUserInfo = async () => {
//       const { data: { user }, error } = await supabase.auth.getUser();
//       if (error) {
//         console.error("Error fetching user:", error.message);
//         return;
//       }
//       setUserEmail(user?.email || '');
//       setSessionId(user?.id || ''); // session_id can be user.id or custom logic
//     };

//     fetchUserInfo();
//   }, []);

//   const handleAnalysis = async () => {
//     setLoading(true);
//     setError(null);

//     const apiUrl = analysisType === 'current'
//       ? 'http://localhost:5000/current-analysis'
//       : 'http://localhost:5000/weekly-analysis';

//     const requestData = analysisType === 'current'
//       ? { company_stock: stockSymbol, strategy, amount: parseFloat(amount) }
//       : { company_stock: stockSymbol };

//     if ((analysisType === 'current' && (!stockSymbol || !strategy || !amount)) ||
//         (analysisType === 'weekly' && !stockSymbol)) {
//       alert("Please fill all required fields.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(apiUrl, requestData);
//       const analysisResult = response.data.analysis;
//       setResult(analysisResult);

//       // Save session to Supabase
//       const { error: insertError } = await supabase.from('stock_session').insert([{
//         session_id: sessionId,
//         user_email: userEmail,
//         stock_symbol: stockSymbol,
//         analysis_type: analysisType,
//         strategy: analysisType === 'current' ? strategy : null,
//         amount: analysisType === 'current' ? parseFloat(amount) : null,
//         result: analysisResult,
//       }]);

//       if (insertError) {
//         console.error("Error saving to Supabase:", insertError.message);
//       } else {
//         console.log("Session saved successfully.");
//       }

//     } catch (err) {
//       console.error("Error during analysis:", err);
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StockAnalysisLayout title="International Stock Analysis">
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
//             <select
//               style={styles.select}
//               value={strategy}
//               onChange={(e) => setStrategy(e.target.value)}
//             >
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
//         <select
//           style={styles.select}
//           value={analysisType}
//           onChange={(e) => setAnalysisType(e.target.value)}
//         >
//           <option value="current">Current Analysis</option>
//           <option value="weekly">Weekly Analysis</option>
//         </select>
//       </div>

//       <button style={styles.button} onClick={handleAnalysis} disabled={loading}>
//         {loading ? "Loading..." : "Run Analysis"}
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
//     backgroundColor: '#007bff',
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
//     backgroundColor: '#e9ecef',
//     border: '1px solid #ced4da',
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

// export default InternationalStocks;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { supabase } from './supabaseClient';
// import { v4 as uuidv4 } from 'uuid';
// import StockAnalysisLayout from './layout/StockAnalysislayout';

// const InternationalStocks = () => {
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');
//   const [analysisType, setAnalysisType] = useState('current');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userEmail, setUserEmail] = useState('');
//   const [uniqueId, setUniqueId] = useState('');

//   // Get current user session
//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data: { session }, error } = await supabase.auth.getSession();
//       if (error || !session) {
//         console.error('Error fetching session or not logged in');
//         return;
//       }
//       setUserEmail(session.user.email);
//       setUniqueId(uuidv4());
//     };

//     fetchUser();
//   }, []);

//   const handleAnalysis = async () => {
//     console.log("Sending Request to Backend");
//     setLoading(true);
//     setError(null);

//     const apiUrl = analysisType === 'current'
//       ? 'http://localhost:5000/current-analysis'
//       : 'http://localhost:5000/weekly-analysis';

//     const requestData = analysisType === 'current'
//       ? { company_stock: stockSymbol, strategy, amount: parseFloat(amount) }
//       : { company_stock: stockSymbol };

//     // Form validation
//     if ((analysisType === 'current' && (!stockSymbol || !strategy || !amount)) ||
//         (analysisType === 'weekly' && !stockSymbol)) {
//       alert("Please fill all required fields.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(apiUrl, requestData);
//       const analysisResult = response.data.analysis;
//       console.log("Received Response:", analysisResult);
//       setResult(analysisResult);

//       // Save to Supabase
//       const { error: insertError } = await supabase
//         .from('stock_session')
//         .insert([
//           {
//             unique_id: uniqueId,
//             email: userEmail,
//             stock_symbol: stockSymbol,
//             analysis_type: analysisType,
//             strategy: analysisType === 'current' ? strategy : null,
//             amount: analysisType === 'current' ? parseFloat(amount) : null,
//             result: analysisResult
//           }
//         ]);

//       if (insertError) {
//         console.error("Supabase Insert Error:", insertError);
//       } else {
//         console.log("Data saved to Supabase");
//       }

//     } catch (err) {
//       console.error("Error Occurred:", err);
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StockAnalysisLayout title="International Stock Analysis">
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

//       <button style={styles.button} onClick={handleAnalysis} disabled={loading}>
//         {loading ? "Loading..." : "Run Analysis"}
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
//     backgroundColor: '#007bff',
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
//     backgroundColor: '#e9ecef',
//     border: '1px solid #ced4da',
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

// export default InternationalStocks;

// Working code with previous

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { supabase } from './supabaseClient';
// import StockAnalysisLayout from './layout/StockAnalysislayout';

// const InternationalStocks = () => {
//   const [stockSymbol, setStockSymbol] = useState('');
//   const [strategy, setStrategy] = useState('');
//   const [amount, setAmount] = useState('');
//   const [analysisType, setAnalysisType] = useState('current');
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [userEmail, setUserEmail] = useState('');
//   // const [uniqueId, setUniqueId] = useState('');

//   // Fetch user session
//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data, error } = await supabase.auth.getSession();
//       console.log("Session Data:", data); // DEBUG
//       if (error || !data?.session) {
//         console.error('Error fetching session or not logged in:', error);
//         return;
//       }
//       const email = data.session.user.email;
//       setUserEmail(email);
//       // setUniqueId(uuidv4());
//       console.log("User Email:", email); // DEBUG
//     };

//     fetchUser();
//   }, []);

//   const handleAnalysis = async () => {
//     if (!userEmail) {
//       alert("User not authenticated. Please log in or wait a moment.");
//       return;
//     }

//     console.log("Sending Request to Backend");
//     setLoading(true);
//     setError(null);

//     const apiUrl = analysisType === 'current'
//       ? 'http://localhost:5000/current-analysis'
//       : 'http://localhost:5000/weekly-analysis';

//     const requestData = analysisType === 'current'
//       ? { company_stock: stockSymbol, strategy, amount: parseFloat(amount) }
//       : { company_stock: stockSymbol };

//     // Validation
//     if ((analysisType === 'current' && (!stockSymbol || !strategy || !amount)) ||
//         (analysisType === 'weekly' && !stockSymbol)) {
//       alert("Please fill all required fields.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(apiUrl, requestData);
//       const analysisResult = response.data.analysis;
//       console.log("Received Response:", analysisResult);
//       setResult(analysisResult);

//       const payload = {
//         // unique_id: uniqueId,
//         email: userEmail,
//         stock_symbol: stockSymbol,
//         analysis_type: analysisType,
//         strategy: analysisType === 'current' ? strategy : null,
//         amount: analysisType === 'current' ? parseFloat(amount) : null,
//         result: analysisResult
//       };

//       console.log("Insert Payload:", payload); // DEBUG

//       const { error: insertError } = await supabase
//         .from('stock_sessions')
//         .insert([payload]);

//       if (insertError) {
//         console.error("Supabase Insert Error:", JSON.stringify(insertError, null, 2));
//       } else {
//         console.log("✅ Data saved to Supabase successfully.");
//       }

//     } catch (err) {
//       console.error("❌ Error Occurred:", err);
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <StockAnalysisLayout title="International Stock Analysis">
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
//     backgroundColor: '#007bff',
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
//     backgroundColor: '#e9ecef',
//     border: '1px solid #ced4da',
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

// export default InternationalStocks;

// New with same theme

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { supabase } from './supabaseClient';
import StockAnalysisLayout from './layout/StockAnalysislayout';

const InternationalStocks = () => {
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

  const handleAnalysis = async () => {
    if (!userEmail) {
      alert("Please log in.");
      return;
    }
    setLoading(true);
    setError(null);
    
    const apiUrl = analysisType === 'current'
      ? 'https://muzair-010-stock_analysis.hf.space/current-analysis'
      : 'https://muzair-010-stock_analysis.hf.space/weekly-analysis';

    // const apiUrl = analysisType === 'current'
    //   ? 'http://localhost:5000/current-analysis'
    //   : 'http://localhost:5000/weekly-analysis';

    const requestData = analysisType === 'current'
      ? { company_stock: stockSymbol, strategy, amount: parseFloat(amount) }
      : { company_stock: stockSymbol };

    if ((analysisType === 'current' && (!stockSymbol || !strategy || !amount)) ||
        (analysisType === 'weekly' && !stockSymbol)) {
      alert("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(apiUrl, requestData);
      setResult(response.data.analysis);

      const { error: insertError } = await supabase.from('stock_sessions').insert([
        {
          email: userEmail,
          stock_symbol: stockSymbol,
          analysis_type: analysisType,
          strategy: analysisType === 'current' ? strategy : null,
          amount: analysisType === 'current' ? parseFloat(amount) : null,
          result: response.data.analysis
        }
      ]);

      if (insertError) console.error("Insert Error:", insertError);
    } catch (err) {
      setError(err.message || "An error occurred");
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
          Analyze International Stocks
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

export default InternationalStocks;




