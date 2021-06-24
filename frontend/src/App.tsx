import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiTest from './components/apiTest';
import FeatureList from './components/features/featureList';
import FeatureInput from './components/featureInput/featureInput';


function App() {
  return (
    <div className="App">

      <div>Res: <ApiTest />
        <FeatureInput />
        <FeatureList />

      </div>
    </div>
  );
}

export default App;
