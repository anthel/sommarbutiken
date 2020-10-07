import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';

import { makeStyles, ThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      marginTop: theme.spacing(5),
      width: theme.spacing(64),
      height: theme.spacing(90)
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: theme.spacing(25),
    },
  },
  CenterLayout: {
    display: 'flex',
    justifyContent: 'center',
  },
  CenterContent: {
    height: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ImagePreview: {
    width: 'fit-content',
    height: 'fit-content',
  },
  SubmitButton: {
    position: 'absolute',
    bottom: '1',
  },
  HeaderText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
}));

function SellScreen() {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    text: '',
    image: '',
    imagePreviewUrl: '',
    date: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      date: new Date(),
    })
  }
  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  const handleSubmit = () => {
    dispatch(addItem(formData))
  }
  const RenderImageUpload = () => {

    let {imagePreviewUrl} = formData;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} width={100} />);
    } else {
      imagePreview = (<div className={classes.ImagePreview}>Please select an Image for Preview</div>);
    }
    return (
      <div className="previewComponent">
        
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>handleImageChange(e)} />

        <div className={classes.ImagePreview}>
          {imagePreview}
        </div>
      </div>
    )
  }

  return (
    <div className={classes.CenterLayout}>
      <div className={classes.root}>
        <Paper variant="outlined">
          <div className={classes.CenterContent}>
            <h2 className={classes.HeaderText}>Lägg till ny annons i Sommarbutiken</h2>
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

              {/* TODO: Image preview should be fixed size 
                  Backend for storing and handling images 
                  Images should be saved in categories
              */}
              
              <RenderImageUpload/>
                
                <ThemeProvider theme={theme}>
                
                  <Button 
                    onClick={handleSubmit} 
                    variant="contained" 
                    color="primary" 
                    className={classes.SubmitButton}
                    > Lägg till annons
                  </Button>
                  
                </ThemeProvider>

            </form>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default SellScreen
