import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/bank.png';
import Query from './components/qoury/Query';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const showAndHide = ()=> {
    setShowComponent(!showComponent)
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Bank Clients</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
        <Grid item xs={12} sm={4}>
          
        <Button
						className={classes.buttonSubmit}
						variant="contained"
						color="secondary"
						size="large"
						type="button"
						fullWidth
            onClick={showAndHide}
					>
						{
              showComponent ? "Hide Search Bar":"Show Search Bar"
            }
					</Button>
          {
            showComponent ?<Query setCurrentId={setCurrentId}/>:""
          }
              
          </Grid>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              {
                !showComponent ? <Posts setCurrentId={setCurrentId} />:""
              }
            </Grid>
            <Grid item xs={12} sm={4}>
              {
                !showComponent ? <Form currentId={currentId} setCurrentId={setCurrentId} />:""
              }
              
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
