import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import useStyles from '../styles/styles';
import SellItem from '../components/SellItem';

const SellItems = () => {
  const classes = useStyles();

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
    <Box sx={{ flexGrow: 1, minHeight: '400px', backgroundImage:`url(images/gradient_light.jpg)` }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Grid
            item
            xs={12}
            md={2.5}
            minHeight={300}
            key={item.id}
          >
            <SellItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SellItems;