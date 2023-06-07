import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles({
  root: {
    '&.MuiBottomNavigationAction-root': {
      minWidth: 0,
      maxWidth: 250,
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: '#222' }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
      />
    </BottomNavigation>
  );
};

export default Footer;
