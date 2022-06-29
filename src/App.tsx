import React from 'react';
import FontProvider from './components/FontProvider';

export default function App() {
  return (
    <React.StrictMode>
      <FontProvider>
        <div>
          <h1>zeithrold.cloud</h1>
        </div>
      </FontProvider>
    </React.StrictMode>
  );
}