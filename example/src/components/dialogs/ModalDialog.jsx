import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/**
 * Renders/demos Modal Dialog.
 *
 * @author Hari Gangadharan
 */
class ModalDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="App-wrap dialog-wrap">
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >Open alert dialog</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure you want to delete this course?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You cannot undo this action.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="default"
              onClick={this.handleClose}
            >Cancel</Button>
            <Button
              autoFocus
              variant="text"
              color="primary"
              onClick={this.handleClose}
            >Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ModalDialog;
