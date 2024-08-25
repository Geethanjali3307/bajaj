import React, { useState } from 'react';

const ResponseDisplay = ({ data }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (e) => {
        const { options } = e.target;
        const selected = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedOptions(selected);
    };

    const renderResponse = () => {
        let result = {};
        if (selectedOptions.includes('Alphabets')) {
            result['Alphabets'] = data.alphabets;
        }
        if (selectedOptions.includes('Numbers')) {
            result['Numbers'] = data.numbers;
        }
        if (selectedOptions.includes('Highest lowercase alphabet')) {
            result['Highest lowercase alphabet'] = data.highest_lowercase_alphabet;
        }
        return JSON.stringify(result, null, 2);
    };

    return (
        <div>
            <select multiple={true} onChange={handleChange}>
                <option value="Alphabets">Alphabets</option>
                <option value="Numbers">Numbers</option>
                <option value="Highest lowercase alphabet">Highest lowercase alphabet</option>
            </select>
            <pre>{renderResponse()}</pre>
        </div>
    );
};

export default ResponseDisplay;
