import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
/* 
import logo from '../svg/logo2.svg';
import StarIcon from '@material-ui/icons/Star';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import PersonIcon from '@material-ui/icons/Person'; */
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';

import InputBase from '@material-ui/core/InputBase';

import { createStyles, makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    searchIconInSearch: {
      color: 'white',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor:'rgb(51, 53, 59)',
      '&:hover': {
        backgroundColor: 'rgb(74, 75, 78)',
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'white',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }), 
);

  function NavigationBar(props) {

  const history = useHistory();

  const classes = useStyles();

  const productState = useSelector(state => state.productReducer)


  return (
    <div className="navBar">

    <NavLink className="navLink" to='/'>
      <h2 className="logoHeader">Sommarbutiken</h2>
    </NavLink>
      <div className="navLinks">
        <NavLink className="navLink" to='/'>Hem</NavLink>
        <NavLink className="navLink" to='/clothes'>Kläder</NavLink>
        
        <NavLink className="navLink" to='/shoes'>Skor</NavLink> 
          
        <NavLink className="navLink" to="/login" >Logga in</NavLink>
        
      </div>
      {/* {authenticated && <h2 style={{color: 'white'}}>{username}</h2>} */}
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon className={classes.searchIconInSearch}/>
        </div>
        <InputBase
          placeholder="Sök…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className="container-shoppingcart">
        <a href="#"  className="button-shoppingcart">
          <ShoppingCartIcon 
            fontSize="large" 
            color="inherit"
          />
        </a>
        <h4 className="counter-shoppingcart">{productState.products.length}</h4>
      </div>
    </div> 
  )
}

export default NavigationBar;