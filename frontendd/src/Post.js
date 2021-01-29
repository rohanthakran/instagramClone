import React from "react";
import "./post.css"
import Avatar from '@material-ui/core/Avatar';

const Post = (porps) => {
    return (
        <React.Fragment>
            <div className="post">
                <div className="post_header">
                    <Avatar className="post_avatar" alt="Rohan" />
                <h3>{porps.username} </h3>
                    
                
                </div>

               
                {/* header -> avatrt +username*/}
                <img className ="post_image" src= {porps.imageUrl} alt="image2"></img>
                {/*image */}

                <h4 className="post__text"> {porps.caption}</h4>
                {/*userName +caption */}

            </div>
        </React.Fragment>
    )
}
export default Post 