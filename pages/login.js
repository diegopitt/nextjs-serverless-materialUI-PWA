import React, { Component } from "react";
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, TextField } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { Paper } from '@material-ui/core';
import { sendBirdWrapper } from "../sendbird/sendBirdWrapper";

const styles = theme => ({
  root: {},
  form: {
    paddingTop: '20px'
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  header: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  form: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  foot: {
    textAlign: 'right',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  Button: {
    color: '#ffffff',
    width: '160px',
    backgroundColor: '#825eeb',
    '&:hover': {
      backgroundColor: '#6549b8',
    },
  },
});

const Login = class extends Component {
  state = {
    values: {
      password: 'password',
      email: 'demo1@demo.com',
      disabled: false
    }
  };
  componentDidMount() {
    console.log(this.props);
  }

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };
    newState.values[field] = value;
    this.setState(newState);
  };

  async handleSubmit() {
    const newState = { ...this.state };
    newState.values['disabled'] = true;
    this.setState(newState);
    this.props.authenticate(this.state.values.email, this.state.values.password).then(function (user) {
      if (!user) {
        newState.values['disabled'] = false;
        this.setState(newState);
      }
    }.bind(this));
  }

  render() {
    const { classes, className } = this.props;
    const { values } = this.state;
    const rootClassName = classNames(classes.root, className);
    return (
      <Grid container style={{ minHeight: '100vh', backgroundColor: '#825eeb' }} spacing={0} direction="column" alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={6}>
          <Paper className={rootClassName}>
            <div>
              <div className={classes.header}>Please, login</div>
            </div>
            <div>
              <form className={classes.form}>
                <TextField className={classes.input} label="Enter your email" name="email" type="text" value={values.email} onChange={event => this.handleFieldChange('email', event.target.value)} variant="outlined" />
                <TextField className={classes.input} label="Enter your password" name="password" onChange={event => this.handleFieldChange('password', event.target.value)} type="password" value={values.password} variant="outlined" />
              </form>
            </div>
            <div className={classes.foot}>
              <Button disabled={this.state.values.disabled} className={classes.Button} variant="contained" onClick={this.handleSubmit.bind(this)}>Next</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
export default withStyles(styles)(sendBirdWrapper(Login))