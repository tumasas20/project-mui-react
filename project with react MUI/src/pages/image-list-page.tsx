import React from 'react';
import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from '@mui/material';

const itemData = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image 1',
  },
  {
    img: 'https://picsum.photos/400/400',
    title: 'Image 2',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Image 3',
  },
  {
    img: 'https://picsum.photos/400/300',
    title: 'Image 4',
  },
  {
    img: 'https://picsum.photos/200/300',
    title: 'Image 5',
  },
  {
    img: 'https://picsum.photos/300/200',
    title: 'Image 6',
  },
  {
    img: 'https://picsum.photos/300/300',
    title: 'Image 7',
  },
  {
    img: 'https://picsum.photos/200/200',
    title: 'Image 8',
  },
  {
    img: 'https://picsum.photos/100/200',
    title: 'Image 9',
  },
  {
    img: 'https://picsum.photos/100/300',
    title: 'Image 10',
  },
  {
    img: 'https://picsum.photos/200/100',
    title: 'Image 11',
  },
  {
    img: 'https://picsum.photos/200/400',
    title: 'Image 12',
  },
];
const itemData2 = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image 1',
  },
  {
    img: 'https://picsum.photos/400/400',
    title: 'Image 2',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Image 3',
  },
  {
    img: 'https://picsum.photos/400/300',
    title: 'Image 4',
  },
  {
    img: 'https://picsum.photos/200/300',
    title: 'Image 5',
  },
  {
    img: 'https://picsum.photos/300/200',
    title: 'Image 6',
  },
  {
    img: 'https://picsum.photos/300/300',
    title: 'Image 7',
  },
  {
    img: 'https://picsum.photos/200/200',
    title: 'Image 8',
  },
  {
    img: 'https://picsum.photos/100/200',
    title: 'Image 9',
  },
  {
    img: 'https://picsum.photos/100/300',
    title: 'Image 10',
  },
  {
    img: 'https://picsum.photos/200/100',
    title: 'Image 11',
  },
  {
    img: 'https://picsum.photos/200/400',
    title: 'Image 12',
  },
];
const itemData3 = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'Image 1',
  },
  {
    img: 'https://picsum.photos/400/400',
    title: 'Image 2',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Image 3',
  },
  {
    img: 'https://picsum.photos/400/300',
    title: 'Image 4',
  },
  {
    img: 'https://picsum.photos/200/300',
    title: 'Image 5',
  },
  {
    img: 'https://picsum.photos/300/200',
    title: 'Image 6',
  },
  {
    img: 'https://picsum.photos/300/300',
    title: 'Image 7',
  },
  {
    img: 'https://picsum.photos/200/200',
    title: 'Image 8',
  },
  {
    img: 'https://picsum.photos/100/200',
    title: 'Image 9',
  },
  {
    img: 'https://picsum.photos/100/300',
    title: 'Image 10',
  },
  {
    img: 'https://picsum.photos/200/100',
    title: 'Image 11',
  },
  {
    img: 'https://picsum.photos/200/400',
    title: 'Image 12',
  },
];

const ImageListPage = () => (
  <Stack spacing={4}>
    <ImageList
      sx={{ width: 500, height: 450 }}
      cols={3}
      rowHeight={164}
    >
      {
          itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))
        }
    </ImageList>
    <ImageList
      variant="woven"
      sx={{ width: 500, height: 450 }}
      cols={3}
      gap={8}
    >
      {
          itemData2.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))
        }
    </ImageList>
    <Box sx={{ width: 500, height: 450, overflow: 'scroll' }}>
      <ImageList
        variant="masonry"
        cols={3}
        gap={8}
      >
        {
          itemData3.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}?w=248&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))
        }
      </ImageList>
    </Box>
  </Stack>
);

export default ImageListPage;
