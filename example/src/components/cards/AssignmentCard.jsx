import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import  CustomHorizontalStepper  from '../steppers/HorizontalStepper'

const styles = theme => ({
  card: {
    width: 765,
    backgroundColor: "#ffffff",
  },
  cardContentHeader: theme.overrides.CustomCard.cardContentHeader,
  paddginZero:theme.overrides.CustomCard.paddginZero,
  flexContainer:theme.overrides.CustomCard.flexContainer,
  cardLeftContent:theme.overrides.CustomCard.cardLeftContent,
  cardCenterContent:theme.overrides.CustomCard.cardCenterContent,
  cardCenterActionContent:theme.overrides.CustomCard.cardCenterActionContent,
  cardActionRightContent:theme.overrides.CustomCard.cardActionRightContent,
  smallContent:theme.overrides.CustomCard.smallContent,
  hrLine:theme.overrides.CustomCard.hrLine,
  vrLine:theme.overrides.CustomCard.vrLine,
  cardDarkColor:theme.overrides.CustomCard.cardDarkColor
});

class AssignmentCard extends React.Component {
    render() {
        const {classes} = this.props;
    return (
    <Card className={`${classes.card} ${classes.paddginZero} ${classes.cardDarkColor}`}   tabIndex='0'>
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
          <div className={classes.cardLeftContent}></div>
          <div className={classes.cardCenterActionContent}>
            <CustomHorizontalStepper></CustomHorizontalStepper>
          </div>
          <div className={classes.cardActionRightContent}>
            <div className={classes.smallContent}>worth 198 points</div>
          </div>
        </div>
    </CardActions>
  </Card>
    )
    }
}
AssignmentCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AssignmentCard);