import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { AddItemIcon } from 'pearson-mui-theme';
import { ArrowBackIcon } from 'pearson-mui-theme';
import { ContentsIcon} from 'pearson-mui-theme';
import { FilterIcon } from 'pearson-mui-theme';
import { MenuIcon } from 'pearson-mui-theme';
import { NoteBookIcon } from 'pearson-mui-theme';

const styles = theme => ({
  root: {
      margin: theme.spacing.unit
  }
});

/**
 * Renders/demos Call To Action Button.
 *
 * @author Mithun Adavelly
 */
const component = ({ classes }) => (
  <div>
    <IconButton className={classes.root} aria-label="Back" disabled color="primary">
        <ArrowBackIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="Add Item" disabled color="primary">
        <AddItemIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="contents" disabled color="primary">
        <ContentsIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="filter" disabled color="primary">
        <FilterIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="Menu" disabled color="primary">
        <MenuIcon  />
    </IconButton>
    <IconButton className={classes.root} aria-label="NoteBook" disabled color="primary">
        <NoteBookIcon  />
    </IconButton>
 
  </div>
);

component.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(component);
