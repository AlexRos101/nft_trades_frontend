import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import useStyles from '../styles/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HotbidItem from '../components/HotbidItem'

const Hotbids = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      src: 'images/products/item_1.jpg',
      title: 'ETH Me Outside',
      subtitle: 'Current Bid 1.3ETH',
      amount: '1.55ETH',
      like: '159',
    },
    {
      id: 2,
      src: 'images/products/item_2.jpg',
      title: 'Lazyone Panda',
      subtitle: 'Current Bid 2ETH',
      amount: '1.55ETH',
      like: '75',
    },
    {
      id: 3,
      src: 'images/products/item_3.jpg',
      title: 'Splendid Girl',
      subtitle: 'Current Bid 4.7ETH',
      amount: '5.1ETH',
      like: '253',
    },
    {
      id: 4,
      src: 'images/products/item_4.jpg',
      title: 'Amazing NFT Art',
      subtitle: 'Current Bid 1.2ETH',
      amount: '7ETH',
      like: '324',
    },
    {
      id: 5,
      src: 'images/products/item_3.gif',
      title: 'Portrait Gallery',
      subtitle: 'Current Bid 0.05ETH',
      amount: '0.7ETH',
      like: '54',
    },
    {
      id: 6,
      src: 'images/products/item_5.jpg',
      title: 'Flourishing Cat #180',
      subtitle: 'Current Bid 0.25ETH',
      amount: '3ETH',
      like: '125',
    },
  ];
  return (
    <Box sx={{ flexGrow: 1, minHeight: '400px', margin:'48px 90px'}}>
      <Box sx={{display:'flex', justifyContent: 'center', alignItems: 'center', margin: '32px'}}>
        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png" />
        <Typography variant="h3">Hot Bids</Typography>
      </Box>
      <Swiper
        slidesPerView={4}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {sectionItems.map((item) => (
          <SwiperSlide key={item.id}>
            <HotbidItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hotbids;