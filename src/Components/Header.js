import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Typed from 'react-typed';
//css styles
const useStyles = makeStyles((theme) => ({
  avata: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: 'tomato',
  },
  subtitle: {
    color: 'orange',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Typography className={classes.subtitle} variant="h5">
        <Typed strings={['Hi There']} />
      </Typography>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['I am Poovizhi Singaravelu']} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={['Web Design', 'Web Development', 'MERN Stack Developer']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
