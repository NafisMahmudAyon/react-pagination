import React, { useState } from 'react';
// import './styles.css';

function Apps() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div className='ex'>
      <button onClick={handleClick}>Click me</button>
      <div className={`component ${showComponent ? 'show' : ''}`}>
        <h1>Hello World</h1>
        <p>This component is now visible</p>
      </div>
    </div>
  );
}

export default Apps;
