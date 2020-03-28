import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
    backgroundColor: '#053f5b',
    color: '#fff',
  },
  title: {
    color: '#fff',
  }
}));

function Copyright() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
    <Typography className={classes.title} variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link className={classes.title} color="inherit" target="_blank" rel="noopener noreferrer" href="https://sungharsh.github.io/">
        Sunny.ProDev / Meterial-UI
      </Link>{' '}
      {new Date().toLocaleDateString()}
      {'.'}
    </Typography>
    </div>
  );
}

export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          App built with Meterial UI
        </Typography>
        <Typography className={classes.title} variant="subtitle1" align="center" color="textSecondary" component="p">
          Created by Sungharsh
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}