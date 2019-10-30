import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardList } from 'pearson-mui-theme';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BookmarkonIcon } from 'pearson-mui-theme';
import AssignmentCard from '../cards/AssignmentCard'
import ScoresCard from '../cards/ScoresCard'

/**
 * Renders/demos Cards.
 *
 * @author Hari Gangadharan
 */

const styles = theme => ({
  card: {
    width: 362,
    backgroundColor: "#ffffff",
  },
  cardRightIcon:theme.overrides.CustomCard.cardRightIcon,
  cardWithZeroPaddingTop:theme.overrides.CustomCard.cardWithZeroPaddingTop,
  cardContentHeader:theme.overrides.CustomCard.cardContentHeader
});

const component = ({ classes }) => (

  <div >
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
        <div className={classes.cardRightIcon}><BookmarkonIcon color="primary" className={classes.bookmarkIcon}/></div>
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
        <AssignmentCard></AssignmentCard>
        <ScoresCard></ScoresCard>
    </CardList>
  </div>


);
component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
