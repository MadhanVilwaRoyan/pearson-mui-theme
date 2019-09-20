import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import colors from '../colors';
// import { makeStyles } from '@material-ui/core/styles';
const styles = {
  small: {
    width: 18,
    height: 18
  },
  normal: {
    width: 24,
    height: 24
  }
};

const ArchiveIcon = ({ classes, size = 'small', ...other }) => (
  <SvgIcon viewBox="0 0 18 18" className={classes[size]} {...other}>
    <path d="M1,4 L1.90790158,2.12745299 C2.24223433,1.43789168 2.94119229,1 3.7075298,1 L14.2924702,1 C15.0588077,1 15.7577657,1.43789168 16.0920984,2.12745299 L17,4 L17,14.25 C17,15.7687831 15.7687831,17 14.25,17 L3.75,17 C2.23121694,17 1,15.7687831 1,14.25 L1,4 Z M2.94484615,4 L15.0551539,4 L14.5174237,2.89093162 C14.4756321,2.80473646 14.3882624,2.75 14.2924702,2.75 L3.7075298,2.75 C3.61173761,2.75 3.52436786,2.80473646 3.48257627,2.89093162 L2.94484615,4 Z M15.25,5.75 L2.75,5.75 L2.75,14.25 C2.75,14.8022847 3.19771525,15.25 3.75,15.25 L14.25,15.25 C14.8022847,15.25 15.25,14.8022847 15.25,14.25 L15.25,5.75 Z" fill="currentcolor" fill-rule="nonzero"></path>
    <path d="M8.125,11.007015 L8.125,7.87750722 C8.125,7.39287336 8.51675084,7 9,7 C9.48324916,7 9.875,7.39287336 9.875,7.87750722 L9.875,11.007015 L11.5011367,9.38181662 C11.8440224,9.03912873 12.39995,9.03912873 12.7428357,9.38181662 C13.0857214,9.7245045 13.0857214,10.2801113 12.7428357,10.6227992 L9.62084952,13.7429841 L9.6205304,13.7433028 C9.27761902,14.0856719 8.72192987,14.0855657 8.37915048,13.7429841 L5.25716429,10.6227992 C4.91427857,10.2801113 4.91427857,9.7245045 5.25716429,9.38181662 C5.60005002,9.03912873 6.15597762,9.03912873 6.49886334,9.38181662 L8.125,11.007015 Z" fill="currentcolor" fill-rule="nonzero"></path>  
</SvgIcon>
);

ArchiveIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['small', 'normal'])
};

export default withStyles(styles)(ArchiveIcon);
