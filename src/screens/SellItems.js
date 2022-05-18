import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import useStyles from '../styles/styles';
import SellItem from '../components/SellItem';
import Subscribe from './Subscribe';
import { useTheme } from '@mui/material/styles';

const SellItems = () => {
  const classes = useStyles();
  const theme = useTheme();

  const sectionItems = [
    {
      id: 1,
      src: 'images/products/sellitem-1.png',
      title: '1. Set up your wallet',
      subtitle: "Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the top right corner.",
    },
    {
      id: 2,
      src: 'images/products/sellitem-2.png',
      title: '2. Create Your Collection',
      subtitle: "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    },
    {
      id: 3,
      src: 'images/products/sellitem-3.png',
      title: '3. Add Your NFTs',
      subtitle: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats.',
    },
    {
      id: 4,
      src: 'images/products/sellitem-4.png',
      title: '4. List Them For Sale',
      subtitle: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, backgroundImage:`url(images/gradient_${theme.palette.mode}.jpg)`, padding: '32px' }}>
      <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', margin: '32px'}}>
        <Typography variant="h3">Create and sell your NFTs</Typography>
      </Box>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={2.5}
            key={item.id}
          >
            <SellItem {...item} />
          </Grid>
        ))}
      </Grid>

      <Subscribe />
    </Box>
  );
};

export default SellItems;