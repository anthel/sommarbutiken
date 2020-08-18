import React from 'react'

import { makeStyles, ThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      marginTop: theme.spacing(5),
      width: theme.spacing(64),
      height: theme.spacing(64)
    },
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
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

  return (
    <div>
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
                <div className={classes.plainText}>Alla artiklar</div>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className={classes.center}>
        <h3>Alla artiklar</h3>
      </div>
      
    </div>
  )
}

export default BuyScreen
