import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeatureList from './components/features/featureList';
import FeatureInput from './components/featureInput/featureInput';


function App() {
  return (
    <div className="App">

        <FeatureInput />
        <FeatureList />

    </div>
  );
}

export default App;
