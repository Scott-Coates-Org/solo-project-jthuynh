import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';


const ViewButton = ({ icon }) => {
  return (
    <IconButton>
      {icon}
      <div>The icon is above</div>
    </IconButton>
  )
}

export default ViewButton