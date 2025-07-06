import React, { useState } from 'react';
import axios from 'axios';

function Inputform() {
    const [inputText, setInputText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/mymodels/', {
                text: inputText
            });
            console.log('Data sent successfully:', response.data);
            setInputText(''); // Clear the input after successful submission
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Inputform;
