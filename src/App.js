import React from "react"
import './App.css';
import logo from "./images/logo.png";
import Post from "./Post.js"

function App() {
  return (
    <React.Fragment>
      {/*Header*/}
     <div className = "app">
      <div className="app_header">
        <img
          className="app_headerImage"
          alt="Instagram" class="s4Iyt"
          src={logo}/>

        </div>
        <Post username ="clever" caption ="WOW" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/7-react-projects-for-2021-2.png"/>
        <Post username ="Rohan" caption ="WOW" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/7-react-projects-for-2021-2.png"/>

        
        <Post username="Itsrohanthakran" caption="it is working" imageUrl="https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/modern_way-1.jpeg"/>
        <Post/>

 
    </div> 

    {/*Post*/}
 </React.Fragment>    
  
    
  );
}

export default App;
