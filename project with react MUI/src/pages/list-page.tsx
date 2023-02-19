import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from '@mui/material';

const ListPage = () => (
  <Container sx={{
    my: 6, p: 4, boxShadow: 3, borderRadius: 2,
  }}
  >
    <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="Secondary text" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="Secondary text" />
        </ListItem>
      </List>
    </Box>
  </Container>
);

export default ListPage;
