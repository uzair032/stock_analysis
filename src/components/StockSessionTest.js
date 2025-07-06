import React, { useState } from 'react';
import { supabase } from './supabaseClient'; // Update path if needed

function StockSessionTest() {
  const [message, setMessage] = useState('');

  const handleInsert = async () => {
    const { data, error } = await supabase
      .from('stock_sessions')
      .insert([
        {
          email: 'test@example.com',
          stock_symbol: 'AAPL',
          analysis_type: 'current',
          strategy: 'long-term',
          amount: 5000,
          result: 'Strong Buy',
        }
      ]);

    if (error) {
      console.error('Insert Error:', error);
      setMessage(`Error inserting data: ${JSON.stringify(error, null, 2)}`);
    } else {
      console.log('Insert Success:', data);
      setMessage('Data inserted successfully!');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={handleInsert}>Insert Test Session</button>
      <p>{message}</p>
    </div>
  );
}

export default StockSessionTest;
