import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
//import { makeStyles } from 'tss-react/mui';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons';
import avatar from '../images/poovizhi.jpg';
import Footer from './Footer';
//css styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  ListItem: {
    color: 'tan',
  },
}));
const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contact',
    listPath: '/contact',
  },
];
const Navbar = () => {
  const [state, setstate] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setstate({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (Slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(Slider, false)}
    >
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Poovizhi Singaravelu"
      />
      <Divider />
      <List>
        {menuItems.map((IsItem, key) => (
          <ListItem button key={key} component={Link} to={IsItem.listPath}>
            <ListItemIcon className={classes.ListItem}>
              {IsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.ListItem}
              primary={IsItem.listText}
            />
          </ListItem>
        ))}
        ;
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: '#222' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant="h5" style={{ color: 'tan' }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider('right', false)}
            >
              {sideList('right')}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
