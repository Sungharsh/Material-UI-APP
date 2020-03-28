import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Contacts from './ContactsLink';
import Search from './SearchLink';
import AddContact from './AddLink';
import EditContact from './SignIn';
import Album from './AlbumLink';
import SignUp from './SignUpLink';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '5px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    color: 'fff',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width:300px)': {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  }
}));
export default function NavBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const DarkMode = props.DarkMode;
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
     return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
  
                <IconButton 
                  edge="start" 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="menu"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  >
                  <MenuIcon fontSize="large"/>
                </IconButton>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                <MenuItem onClick={handleClose}>
                  <Link to="Contacts" > <Contacts /> </Link> 
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="/Search"  > <Search /> </Link> 
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="AddContact"><AddContact /></Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="EditContact"><EditContact /></Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="Album"><Album /></Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link to="SignUp"><SignUp /></Link>
                </MenuItem>

                </Menu>
              
                <Typography className={classes.title} variant="h6" color="inherit">
                  Contact Manager
                </Typography>

            <Tooltip title="Dark Mode" aria-label="add">
              
                <IconButton position="right" edge="start" color="inherit" aria-label="menu">
                  <SettingsBrightnessIcon onClick = { DarkMode }  fontSize="large" />
                </IconButton>
            </Tooltip>

            </Toolbar>
          </AppBar>
    </div>
  );
}