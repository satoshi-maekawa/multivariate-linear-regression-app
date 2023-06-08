import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [inputs, setInputs] = useState({
    x1: '',
    x2: '',
    x3: '',
    x4: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [samples, setSamples] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/samples');
      setSamples(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multiple Linear Regression(重回帰分析)アプリ</h1>
        <h2>x1, x2, x3, x4を入力すると yを予測します</h2>
        <div className="input-section">
          <input className="input" name="x1" placeholder="x1" value={inputs.x1} onChange={handleInputChange} />
          <input className="input" name="x2" placeholder="x2" value={inputs.x2} onChange={handleInputChange} />
          <input className="input" name="x3" placeholder="x3" value={inputs.x3} onChange={handleInputChange} />
          <input className="input" name="x4" placeholder="x4" value={inputs.x4} onChange={handleInputChange} />
          <button className="predict-button" onClick={handlePredictButtonClick}>予測する</button>
        </div>
          {prediction && <p>予測したyは {prediction} です</p>}
        <div className="table-section">
          <h2>今回のサンプルデータ</h2>
          <table className="samples-table">
            <thead>
              <tr>
                <th>y</th>
                <th>x1</th>
                <th>x2</th>
                <th>x3</th>
                <th>x4</th>
              </tr>
            </thead>
            <tbody>
              {samples.map((sample, index) => (
                <tr key={index}>
                  <td>{sample.y}</td>
                  <td>{sample.x1}</td>
                  <td>{sample.x2}</td>
                  <td>{sample.x3}</td>
                  <td>{sample.x4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
