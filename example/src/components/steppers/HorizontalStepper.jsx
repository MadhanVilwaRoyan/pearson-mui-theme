import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StarIcon from '@material-ui/icons/Star'
import StepConnector from '@material-ui/core/StepConnector'
import { HorizontalStepper } from 'pearson-mui-theme';


const useStyles = theme => ({
  root:{
    paddingTop:'5px',
    paddingBottom:'0px',
    marginBottom:'0px'
  }
})

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 5px)',
    right: 'calc(50% + 5px)'
  },
  active: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  completed: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector)
const useQontoStepIconStyles = theme => ({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: '#784af4'
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles()
  const { active, completed, icon } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {icon && icon}
      {!icon && completed && (
        <div className={`${classes.circle} ${classes.completed}`} />
      )}
      {!icon && !completed && <div className={classes.circle} />}
    </div>
  )
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.any
}

function getSteps() {
  return [
    {
      label: 'step1',
      icon: null,
      iconTypeID: 1
    },
    {
      label: 'step2',
      icon: <StarIcon />,
      iconTypeID: 2
    },
    {
      label: 'step3',
      icon: <StarIcon />,
      iconTypeID: 2
    },
    {
      label: 'step4',
      icon: <StarIcon />,
      iconTypeID: 2
    },
    {
      label: 'step5',
      icon: <StarIcon />,
      iconTypeID: 2
    }
  ]
}

export default function CustomizedSteppers() { 
  const [activeStep] = React.useState(1)
  const iconclasses = useQontoStepIconStyles()
  const stepperClasses = useStyles()
  const steps = getSteps()

  return (
    <HorizontalStepper  className={stepperClasses.root}>
      <Stepper
        alternativeLabel        
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((step, index) => {
          const stepProps = {}
          const completed = (index < activeStep)
          stepProps.completed = completed
          stepProps.icon = step.icon
          stepProps.icon =
            step.iconTypeID === 2 && index < activeStep ? (
              <StarIcon className={iconclasses.completed} />
            ) : (
              step.icon
            )
          return (
            <Step >
              <StepLabel {...stepProps} StepIconComponent={QontoStepIcon} />
            </Step>
          )
        })}
      </Stepper>
      </HorizontalStepper>
  )
    }
