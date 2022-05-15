import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import useStyles from '../styles/styles';

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Buy, sell and <br />collect NFTs.
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
          The world's largest digital marketplace <br />for crypto collectibles and non-fungible <br />tokens
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Upload
          </Button>
          <Button
            variant="contained"
            color="warning"
            sx={{ width: '200px', fontSize: '16px' }}
          >
            Explore
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={'images/hero/hero.jpg'} className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;