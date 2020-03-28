import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from './NavLinks/NavBar';
import ContactTable from './ContactTable';
import Search from './Pages/Search';
import Add from './Pages/Add';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Album from './Pages/Album';
import NotFound from './Common/notfound';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    padding: theme.spacing(0),
  },
}));
//console.log();
function RootComponent(props) {
  //console.log(props);
  const DarkMode = props.DarkMode
  //console.log(DarkMode);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.root}>
        <CssBaseline />
        <NavBar DarkMode= { DarkMode } />
          <Switch>
            <Route path="/Contacts" exact component={ContactTable} />
            <Route path="/Search" component={Search} />
            <Route path="/AddContact" component={Add} />
            <Route path="/EditContact" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/album" component={Album} />
            <Redirect from="/" exact to="/Contacts" />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        <br />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default RootComponent;