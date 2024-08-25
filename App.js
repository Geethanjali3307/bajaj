import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        document.title = 'Your Roll Number';
    }, []);

    return (
        <div className="App">
            <h1>Your Roll Number</h1>
            <InputForm onResponse={setResponseData} />
            {responseData && <ResponseDisplay data={responseData} />}
        </div>
    );
}

export default App;
