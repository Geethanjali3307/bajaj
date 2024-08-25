import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ onResponse }) => {
    const [jsonData, setJsonData] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedData = JSON.parse(jsonData);
            setError(null);
            const response = await axios.post('YOUR_BACKEND_URL/bfhl', parsedData);
            onResponse(response.data);
        } catch (err) {
            setError('Invalid JSON format or error in API call');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                placeholder="Enter JSON"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;
