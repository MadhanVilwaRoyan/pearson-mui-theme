import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardList } from 'pearson-mui-theme';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BookmarkonIcon } from 'pearson-mui-theme';
import  CustomHorizontalStepper  from '../steppers/HorizontalStepper'

/**
 * Renders/demos Cards.
 *
 * @author Hari Gangadharan
 */

const styles = theme => ({
  card: {
    fontStyle: "normal",
    fontStretch: "normal",
    lineHeight: "normal",
    fontFamily: "OpenSans",
    borderRadius: 8,
    border: "solid 1px rgba(151, 151, 151, 0.07)",
    backgroundColor: "#ffffff",
  },
  OverrideCardWidth:{
    width:600
  },
  cardRightIcon:{
    display:"flex",
    width:"100%",
    flexDirection: "row-reverse"
  },
  cardWithZeroPaddingTop:
  {
    paddingTop:0
  },
  paddginZero:{
    padding:0
  },
  cardContentHeader:{
    height: 17,
    fontSize: 12,
    letterSpacing: -0.07,
    marginBottom:20
  },
  flexContainer:{
      display:'flex'
  },
  cardLeftContent:{
    width:'9%',
    paddingRight:'20px',
    paddinggBottom:'20px',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.31,
    textAlign: 'right',
    color: '#252525'
  },
  cardCenterContent:{
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: 1.4,
  color: '#252525 ',
    width:'86%',
    paddingLeft:'20px',
    paddingRight:'20px',
    paddingBottom:'20px'
  },
  smallContent:{
    fontSize: '12px',
    lineHeight: 1.0,
    letterSpacing: '0.2px',
    color: '#6a7070',
    fontWeight:'normal'
  },
  hrLine:{
    width: 550,
    border: "solid 1px #d8d8d8"
  },
  vrLine: {
    height: 48,
    border: "solid 1px #d8d8d8"
  }

});

const component = ({ classes }) => (

  <div>
    <CardList>
      <Typography variant="h3">Recently Visited</Typography>
    </CardList>
    <CardList>
      <Card className={classes.card} tabIndex='0'>
        <CardContent>
          1.1-1.2 The History of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:32 PM</div>
        </CardActions>
      </Card>
      <Card className={classes.card} tabIndex='0'>
        <CardContent>
          1.5-1.9 The Scientific Research
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:37 PM</div>
        </CardActions>
      </Card>
      <Card className={classes.card} tabIndex='0'>
        <CardContent>
          1.10-1.11 Ethics of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:39 PM</div>
        </CardActions>
      </Card>
    </CardList>
    <CardList>
      <Card className={classes.card}  tabIndex='0'>
        <CardContent className={classes.cardWithZeroPaddingTop}>
        <Typography component="div" className={classes.cardRightIcon}><BookmarkonIcon color="primary" className={classes.bookmarkIcon}/></Typography>
        <Typography
          variant="body1"
          component="div"
          className={classes.cardContentHeader}
        >
          Chapter 1: The Science of Psychology
        </Typography>
       
          1.1-1.2 The History of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:32 PM</div>
        </CardActions>
      </Card>
      <Card className={classes.card} tabIndex='0'>
        <CardContent className={classes.cardWithZeroPaddingTop}>
        <Typography component="div" className={classes.cardRightIcon}><BookmarkonIcon color="primary" className={classes.bookmarkIcon}/></Typography>
        <Typography
          variant="body1"
          component="div"
          className={classes.cardContentHeader}
        >
          Chapter 1: The Science of Psychology
        </Typography>
       
          1.10-1.11 Ethics of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:39 PM</div>
        </CardActions>
      </Card>
      <Card className={classes.card}  tabIndex='0'>
        <CardContent className={classes.cardWithZeroPaddingTop}>
        <Typography component="div" className={classes.cardRightIcon}><BookmarkonIcon color="primary" className={classes.bookmarkIcon}/></Typography>
        <Typography
          variant="body1"
          component="div"
          className={classes.cardContentHeader}
        >
          Chapter 1: The Science of Psychology
        </Typography>
        
          1.10-1.11 Ethics of Psychology
        </CardContent>
        <CardActions>
          <div>JUNE 14, 2019 03:39 PM</div>
        </CardActions>
      </Card>
    </CardList>
    <CardList>
      <Card className={`${classes.card} ${classes.OverrideCardWidth} ${classes.paddginZero}`}   tabIndex='0'>
          <CardContent >
            <div className={classes.flexContainer}>
              <div className={classes.cardLeftContent}>
                <div>Jan 11</div>
                <div className={classes.smallContent}>8 pm</div>
              </div>
              <div className={classes.vrLine}></div>
              <div className={classes.cardCenterContent}>
                <div>4: Consciousness</div>
                <div className={classes.smallContent}>3 readings, 6 quizzes, 1 shared writing</div>
              </div>
            </div>
            <div className={classes.hrLine}></div>
          </CardContent>
          <CardActions>
              <div className={classes.flexContainer}>
                <CustomHorizontalStepper></CustomHorizontalStepper>
              </div>
          </CardActions>
        </Card>
    </CardList>
  </div>


);
component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
