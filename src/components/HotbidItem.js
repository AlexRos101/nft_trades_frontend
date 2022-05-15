import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from '@mui/material';

function HotbidItem(props) {
  const { src, title, subtitle, amount, like } = props;
  
  return (
    <Box>
      <img src={'logo192.png'} />
      <Typography>{title}</Typography>
    </Box>
  );
}

export default HotbidItem;