import React from 'react'
// import WrapperStyle from './wrapper.module.css';
// import { Card, CardHeader, CardContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Wrapper = ({ content, title }) => {
  const [showPopup, setShowPopup] = React.useState(true);
  if (!showPopup) return null;

  return (
    <div>
      <Card sx={{ bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          height: '25%',
          m:"2rem"}}>
      <CardHeader
        action={
          <IconButton onClick={() => setShowPopup(false)}>
            <CloseIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>
        {content}
      </CardContent>
    </Card>
    </div>

  )
}

export default Wrapper