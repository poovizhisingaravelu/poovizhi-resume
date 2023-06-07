import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: '#233',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato',
      },
    },
  },

  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      diaplay: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        diaplay: 'none',
      },
    },
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subheading: {
    color: 'white',
    padding: '0',
    transform: 'uppercase',
  },
}));
const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          working Experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015-2016
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subheading}
            >
              Lecturer
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              Sembodai R.V Polytechnic college
            </Typography>
            <Typography variant="body1" align="center" style={{ color: 'tan' }}>
              I gave 100% result in 5 more subject handled by me
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016-2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subheading}
            >
              HOD
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              Sembodai R.V Polytechnic college
            </Typography>
            <Typography variant="body1" align="center" style={{ color: 'tan' }}>
              I gave 100% result in 5 more subject handled by me.I worked in
              exam cell coordinator
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            SKILLS
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              HTML,CSS,REACT,JAVASCRIPT,NODEJS,SQL,MONGODB,Problem Solving
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2023
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subheading}
            >
              Full Stack Developer course
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              Guvi
            </Typography>
            <Typography variant="body1" align="center" style={{ color: 'tan' }}>
              I solved more than 200 problem in javascript
            </Typography>
          </Box>

          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2012-2014
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subheading}
            >
              M.Tech-Computer Science Engineering
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              Periyar Maniammai university
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2008-2012
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subheading}
            >
              B.Tech-Information Technology
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: 'tomato' }}
            >
              A.V.C college of Engineering
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Resume;
