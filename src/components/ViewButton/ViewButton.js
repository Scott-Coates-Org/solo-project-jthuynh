import React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
// import YouTubeIcon from '@mui/icons-material/YouTube';

import { useState } from 'react';

const ViewButton = ({ component, icon }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsVisible(current => !current);
  };

  return (
    <div>
      <div style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        {component}
      </div>

      <IconButton onClick={handleClick}>
        {icon}
      </IconButton>
    </div>
  );

}

export default ViewButton