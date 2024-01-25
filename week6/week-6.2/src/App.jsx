import React, { useState, useRef } from 'react';

function App() {
  const [force, forceRender] = useState(0);
  const trackRef = useRef(0);

  const handleReRender = () => {
    // Update state to force re-render
    forceRender(force + 1);
    
    // Update the value stored in trackRef
    trackRef.current = force + 1;
  };

  return (
    <div>
      <p>This component has rendered {trackRef.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}

export default App;
