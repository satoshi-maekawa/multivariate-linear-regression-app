import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputs, setInputs] = useState({
    x1: '',
    x2: '',
    x3: '',
    x4: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handlePredictButtonClick = async () => {
    const response = await axios.get('http://localhost:5000/predict', {
      params: inputs
    });
    setPrediction(response.data.y);
  };

  return (
    <div>
      <input name="x1" value={inputs.x1} onChange={handleInputChange} />
      <input name="x2" value={inputs.x2} onChange={handleInputChange} />
      <input name="x3" value={inputs.x3} onChange={handleInputChange} />
      <input name="x4" value={inputs.x4} onChange={handleInputChange} />
      <button onClick={handlePredictButtonClick}>Predict</button>
      {prediction && <p>Predicted y: {prediction}</p>}
    </div>
  );
}

export default App;