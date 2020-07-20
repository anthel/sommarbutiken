import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    'paper': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    },
    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function SellScreen() {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root.paper}>
        <Paper variant="outlined" />
      </div>
      
      {/* <Paper variant="outlined" square /> */}
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
      </form>
    </div>
  )
}

export default SellScreen
