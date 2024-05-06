import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Routing
function ToggleComponent() {
  const [isToggled, setToggled] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggled(!isToggled);
    navigate(isToggled ? '/' : '/dashboard');
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? 'Go to Landing' : 'Go to Dashboard'}
      </button>
    </div>
  );
}

export default ToggleComponent;
// https://gist.github.com/hkirat/24c877cf7ffecf92f1b759b66987553a --->easy example