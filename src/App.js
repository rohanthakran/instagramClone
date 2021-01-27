import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './App.css';
import logo from "./images/logo.png";
import Post from "./Post.js";
import {db} from "./firebase"
import { Button } from "@material-ui/core";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//use effect help you to run a code on specific condition
function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      }))
      )
    });
  }, []);


  return (
    <React.Fragment>
      {/*Header*/}
      <div className="app">
        
      <Modal
      open={open}
          onClose={() => {
            setOpen(false);
      }}
  
    >
      <div style={modalStyle} className={classes.paper}>
     <h2>I am model</h2>

    </div>
    </Modal>
      <div className="app_header">
        <img
          className="app_headerImage"
          alt="Instagram" class="s4Iyt"
          src={logo}/>

        </div>
        <Button onClick={() => setOpen(true)}>SignUp</Button>
        {
          posts.map(({id, post}) => (
            <Post key={id} username={post.username} caption ={post.caption} imageUrl={post.imageUrl} />
          ))
        }
       

 
    </div> 

    {/*Post*/}
 </React.Fragment>    
  
    
  );
}

export default App;
