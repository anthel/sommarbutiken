import React, { useState } from 'react'

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
  center: {
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

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    text: ""
  })

  return (
    <div className={classes.center}>
      <div className={classes.root}>
        <Paper variant="outlined">
          <h2>Lägg till ny annons i Sommarbutiken</h2>
          <form 
            className={classes.root} 
            noValidate 
            autoComplete="off"
            onChange={handleChange}
          >
            <div>
              <TextField 
                name="name"
                id="outlined-basic" 
                label="Namn" 
                variant="outlined" 
                size="small"
                value={formData.name}
              />
            </div>
            <div>
              <TextField 
                name="email"
                id="outlined-basic" 
                label="Epost" 
                variant="outlined" 
                size="small"
                value={formData.email}
              />
            </div>
            <div>
              <TextField 
                name="title"
                id="outlined-basic" 
                label="Annonstitel" 
                variant="outlined" 
                size="small"
                value={formData.title}
              />
            </div>
            <div>
              <TextField
                name="text"
                id="outlined-multiline-static"
                label="Text"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
                value={formData.text}
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
      
      
      
    </div>
  )
}

export default SellScreen
