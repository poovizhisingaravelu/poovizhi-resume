import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/calculator.JPG';
import project2 from '../images/Capture.JPG';
import project3 from '../images/thirukural.JPG';
const useStyles = makeStyles({
  mainContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
});
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Calculator
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textsecondary"
                  component="p"
                >
                  You have seen many varieties of calculators and now we give
                  you the chance to create a basic virtual calculator that will
                  be able to do all the basic arithmetic operations such as
                  addition, subtraction, multiplication, and division. Being
                  this simple it will easier for both of us to explain and
                  understand the process.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="primary" color="primary">
                  Share
                </Button>
                <Button size="primary" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  National API
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textsecondary"
                  component="p"
                >
                  The fetch() method in JavaScript is used to request data from
                  a server. The request can be of any type of API that returns
                  the data in JSON or XML. The fetch() method requires one
                  parameter, the URL to request, and returns a promise.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="primary" color="primary">
                Share
              </Button>
              <Button size="primary" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  திருக்குறள்
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textsecondary"
                  component="p"
                >
                  The fetch() method in JavaScript is used to request data from
                  a server. The request can be of any type of API that returns
                  the data in JSON or XML. The fetch() method requires one
                  parameter, the URL to request, and returns a promise
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="primary" color="primary">
                Share
              </Button>
              <Button size="primary" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
