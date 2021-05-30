
// export default () => (
//   <div>
//     <h1>Home</h1>
//     <p>Note that Web3 is not loaded for this page.</p>
//     {/* <div><Link href='/dapp'><a>My Dapp</a></Link></div> */}
//     <div>
//       <Link href="/account">
//         <a>My Account</a>
//       </Link>
//     </div>
//     <div>
//       <Link href="/launchpad">
//         <a>Launchpad</a>
//       </Link>
//     </div>
//     <div>
//       <Link href="/presale">
//         <a>Presale</a>
//       </Link>
//     </div>
//     <div>
//       <Link href="/auth">
//         <a>Auth</a>
//       </Link>
//     </div>
//   </div>
// );

import Link from "next/link";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// const passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <img src={'optimusLogo.jpg'} style={{width:30, height:30}}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Optimus
          </Typography>
          <Link href="/account">
            <Button color="inherit">Login</Button>
          </Link> 
          <Link href="/launchpad">
            <Button color="inherit">Launchpad</Button>
         </Link>
          <Link href="/presale">
            <Button color="inherit">Presale</Button>
          </Link>
          <Link href="/auth">
            <Button color="inherit">Auth</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}