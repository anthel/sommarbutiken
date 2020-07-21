import React from 'react'

import { makeStyles, ThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      marginTop: theme.spacing(5),
      width: theme.spacing(64),
      height: theme.spacing(64)
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function SellScreen() {

  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  return (
    <div className={classes.flex}>
      <div className={classes.root}>
        <Paper variant="outlined">
          <h2>Lägg till ny annons i Sommarbutiken</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
            </div>
            <div>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
            </div>
            <div>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />
            </div>
            <div>
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.margin}>
                  Lägg till annons
                </Button>
              </ThemeProvider>
            </div>
          </form>
        </Paper>

      </div>
      
      {/* <Paper variant="outlined" square /> */}
      
    </div>
  )
}

export default SellScreen
