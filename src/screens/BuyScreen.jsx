import React from 'react';

import { useSelector } from 'react-redux';
import { makeStyles  } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ListingCard from '../components/ListingCard';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      marginTop: theme.spacing(5),
      width: theme.spacing(64),
      height: theme.spacing(64)
    },
  },
  LayoutContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  BodyWrapper: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0px, 1fr)', //'minmax(0px, 1fr)250px'
    gap: '16px',
    padding: '16px 0px',
  },
  CenterWithPadding: {
    justifyContent: 'center',
    padding: '300px',
  },
  listStyles: {
    listStyle: 'outside none none',
  },
  listItem: {
    display: 'inline-block',
    
  },
  plainText: {
    textDecoration: 'none',
    color: 'rgb(54, 52, 51)',
    fontSize: '17px',
  },
}));

function BuyScreen() {

  const classes = useStyles();

  const products = useSelector(state=> state.itemList);
  const {items} = products;
  console.log(products)
  let category = 'Alla artiklar';

  /* TODO: Should be able to pick a category  */
  return (
    <div className={classes.LayoutContainer}>
      <div className="breadcrumb-wrapper">
        <nav>
          <ol className={classes.listStyles}>
            <li className={classes.listItem}>
              <div className={classes.plainText}>
                Alla
              </div>
            </li>
            <li className={classes.listItem}>
              <div>
                <ChevronRightIcon fontSize="small"/>
              </div>
            </li>
            <li className={classes.listItem}>
              <a href="#">
                <div className={classes.plainText}>{category}</div>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <main className={classes.CenterWithPadding}>
        <div className={classes.BodyWrapper}>
          <h1>{category}</h1>
          
          {items && items.map(item => {
            return <ListingCard 
            name={item.name} 
            email={item.email} 
            title={item.title} 
            text={item.text}
            image={item.imagePreviewUrl}
          />
            
          })}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
      </main>
      
      
    </div>
  )
}

export default BuyScreen
